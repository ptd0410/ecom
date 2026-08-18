import { Injectable, UnauthorizedException } from "@nestjs/common";

import { User, UserRole } from "@prisma/client";

import { PrismaService } from "../prisma.service";

import * as bcrypt from "bcrypt";

import { JwtService } from "@nestjs/jwt";

import { v4 as uuid } from "uuid";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,

    private jwt: JwtService,
  ) {}

  private async generateTokens(user: User) {
    const payload = {
      sub: user.id,

      uid: user.uid,

      roles: user.roles,
    };

    return {
      accessToken: await this.jwt.signAsync(payload, {
        secret: process.env.JWT_ACCESS_SECRET,

        expiresIn: "15m",
      }),

      refreshToken: await this.jwt.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,

        expiresIn: "30d",
      }),
    };
  }

  /**
   * Public register
   * Default role CUSTOMER
   */
  async register(
    uid: string,

    password: string,
  ) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        uid,
      },
    });

    if (existingUser) {
      throw new UnauthorizedException("UID already exists");
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        uid,

        roles: {
          set: [UserRole.CUSTOMER],
        },

        accounts: {
          create: {
            provider: "LOCAL",

            providerAccountId: uid,

            passwordHash: hash,
          },
        },

        profile: {
          create: {
            name: `user_${uuid()}`,
          },
        },
      },
    });

    return this.generateTokens(user);
  }

  /**
   * Login LOCAL
   */
  async login(
    uid: string,

    password: string,
  ) {
    const user = await this.prisma.user.findUnique({
      where: {
        uid,
      },

      include: {
        accounts: {
          where: {
            provider: "LOCAL",
          },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    const account = user.accounts[0];

    if (!account?.passwordHash) {
      throw new UnauthorizedException(
        "This account does not support password login",
      );
    }

    const valid = await bcrypt.compare(password, account.passwordHash);

    if (!valid) {
      throw new UnauthorizedException("Wrong password");
    }

    return this.generateTokens(user);
  }

  /**
   * Refresh token
   */
  async refresh(refreshToken: string) {
    try {
      const payload = await this.jwt.verifyAsync(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });

      const user = await this.prisma.user.findUnique({
        where: {
          id: payload.sub,
        },
      });

      if (!user) {
        throw new UnauthorizedException();
      }

      return this.generateTokens(user);
    } catch {
      throw new UnauthorizedException("Invalid refresh token");
    }
  }
}
