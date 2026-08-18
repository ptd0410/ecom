import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { PrismaService } from "../prisma.service";

import { UserRole } from "@prisma/client";
import * as bcrypt from "bcrypt";

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  /**
   * Lấy danh sách ADMIN
   */
  async getAdmins() {
    return this.prisma.user.findMany({
      where: {
        roles: {
          has: UserRole.ADMIN,
        },
      },

      select: {
        id: true,

        uid: true,

        email: true,

        phone: true,

        roles: true,

        profile: {
          select: {
            name: true,

            avatar: true,
          },
        },

        createdAt: true,
      },

      orderBy: {
        id: "asc",
      },
    });
  }

  /**
   * OWNER tạo ADMIN
   */
  /**
   * OWNER tạo ADMIN mới
   */
  async createAdmin(
    roles: UserRole[],
    uid: string,
    password: string,
    name: string,
  ) {
    if (!roles.includes(UserRole.OWNER)) {
      throw new ForbiddenException("Only owner can create admin");
    }

    const existingUser = await this.prisma.user.findUnique({
      where: {
        uid,
      },
    });

    if (existingUser) {
      throw new ConflictException("UID already exists");
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        uid,

        roles: {
          set: [UserRole.ADMIN],
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
            name,
          },
        },
      },
    });

    return user;
  }

  /**
   * OWNER xoá ADMIN
   */
  async removeAdmin(roles: UserRole[], targetUserId: number) {
    if (!roles.includes(UserRole.OWNER)) {
      throw new ForbiddenException("Only owner can remove admin");
    }

    const target = await this.prisma.user.findUnique({
      where: {
        id: targetUserId,
      },

      select: {
        roles: true,
      },
    });

    if (!target) {
      throw new NotFoundException("User not found");
    }

    if (!target.roles.includes(UserRole.ADMIN)) {
      return target;
    }

    // Chỉ có ADMIN -> xoá user luôn
    if (target.roles.length === 1) {
      return this.prisma.user.delete({
        where: {
          id: targetUserId,
        },
      });
    }

    // Có thêm role khác -> chỉ bỏ ADMIN
    return this.prisma.user.update({
      where: {
        id: targetUserId,
      },

      data: {
        roles: {
          set: target.roles.filter((role) => role !== UserRole.ADMIN),
        },
      },
    });
  }
}
