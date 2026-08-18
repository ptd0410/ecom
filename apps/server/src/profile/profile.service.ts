import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: number) {
    return this.prisma.profile.findUnique({
      where: {
        userId,
      },

      select: {
        name: true,

        avatar: true,

        birthday: true,

        bio: true,

        user: {
          select: {
            uid: true,

            roles: true,

            email: true,

            phone: true,
          },
        },
      },
    });
  }

  async editProfile(userId: number, body: any) {
    return this.prisma.profile.update({
      where: {
        userId,
      },

      data: {
        name: body.name,

        avatar: body.avatar,

        birthday: body.birthday,

        bio: body.bio,
      },

      select: {
        name: true,

        avatar: true,

        birthday: true,

        bio: true,

        user: {
          select: {
            uid: true,

            roles: true,

            email: true,

            phone: true,
          },
        },
      },
    });
  }
}
