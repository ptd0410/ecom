import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProducts({
    categoryId,
    page,
    limit,
  }: {
    categoryId?: number;
    page: number;
    limit: number;
  }) {
    const where = categoryId ? { categoryId } : {};

    const [items, total] = await this.prisma.$transaction([
      this.prisma.product.findMany({
        where,

        skip: (page - 1) * limit,

        take: limit,

        orderBy: {
          id: "desc",
        },

        include: {
          category: {
            select: {
              id: true,
              name: true,
            },
          },

          seller: {
            select: {
              id: true,
              uid: true,

              profile: {
                select: {
                  name: true,
                  avatar: true,
                },
              },
            },
          },
        },
      }),

      this.prisma.product.count({
        where,
      }),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getProduct(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },

      include: {
        category: true,

        seller: {
          select: {
            id: true,
            uid: true,

            profile: {
              select: {
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
    });
  }

  /**
   * Seller tạo product
   * sellerId lấy từ JWT
   */
  async createProduct(sellerId: number, body: any) {
    return this.prisma.product.create({
      data: {
        name: body.name,

        description: body.description,

        price: body.price,

        stock: body.stock,

        image: body.image,

        categoryId: body.categoryId,

        sellerId,
      },

      include: {
        category: true,

        seller: {
          select: {
            id: true,
            uid: true,

            profile: {
              select: {
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
    });
  }

  /**
   * Update product
   * Không cho đổi seller
   */
  async updateProduct(id: number, body: any) {
    return this.prisma.product.update({
      where: {
        id,
      },

      data: {
        name: body.name,

        description: body.description,

        price: body.price,

        stock: body.stock,

        image: body.image,

        categoryId: body.categoryId,
      },

      include: {
        category: true,

        seller: {
          select: {
            id: true,
            uid: true,

            profile: {
              select: {
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
