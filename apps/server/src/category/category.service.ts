import { ForbiddenException, Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";
import { UserRole } from "@prisma/client";

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  getCategories() {
    return this.prisma.category.findMany({
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },

      orderBy: {
        id: "asc",
      },
    });
  }

  getCategory(id: number, take = 10) {
    return this.prisma.category.findUnique({
      where: {
        id,
      },

      include: {
        products: {
          take,

          orderBy: {
            id: "asc",
          },
        },
      },
    });
  }

  private async checkAdmin(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },

      select: {
        roles: true,
      },
    });

    if (
      !user ||
      (!user.roles.includes(UserRole.ADMIN) &&
        !user.roles.includes(UserRole.OWNER))
    ) {
      throw new ForbiddenException("Only admin or owner can manage categories");
    }
  }

  async createCategory(userId: number, body: any) {
    await this.checkAdmin(userId);

    return this.prisma.category.create({
      data: {
        name: body.name,

        description: body.description,
      },
    });
  }

  async updateCategory(userId: number, id: number, body: any) {
    await this.checkAdmin(userId);

    return this.prisma.category.update({
      where: {
        id,
      },

      data: {
        name: body.name,

        description: body.description,
      },
    });
  }

  async deleteCategory(userId: number, id: number) {
    await this.checkAdmin(userId);

    return this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
