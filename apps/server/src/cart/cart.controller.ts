import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";

import { UserRole } from "@prisma/client";

import { JwtAuthGuard } from "../auth";
import { PrismaService } from "../prisma.service";
import { CartService } from "./cart.service";

@Controller("cart")
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(
    private readonly cart: CartService,
    private readonly prisma: PrismaService,
  ) {}

  private async checkCustomer(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },

      select: {
        roles: true,
      },
    });

    if (!user || !user.roles.includes(UserRole.CUSTOMER)) {
      throw new ForbiddenException("Only customer can use cart");
    }
  }

  @Get()
  async getCart(@Req() req: any) {
    await this.checkCustomer(req.user.sub);

    return this.cart.getCart(req.user.sub);
  }

  @Post("items")
  async addItem(
    @Req() req: any,

    @Body()
    body: {
      productId: number;
      quantity?: number;
    },
  ) {
    await this.checkCustomer(req.user.sub);

    return this.cart.addItem(req.user.sub, body.productId, body.quantity);
  }

  @Patch("items/:productId")
  async updateItem(
    @Req() req: any,

    @Param("productId")
    productId: string,

    @Body()
    body: {
      quantity: number;
    },
  ) {
    await this.checkCustomer(req.user.sub);

    return this.cart.updateItem(req.user.sub, Number(productId), body.quantity);
  }

  @Delete("items/:productId")
  async removeItem(
    @Req() req: any,

    @Param("productId")
    productId: string,
  ) {
    await this.checkCustomer(req.user.sub);

    return this.cart.removeItem(req.user.sub, Number(productId));
  }

  @Delete()
  async clearCart(@Req() req: any) {
    await this.checkCustomer(req.user.sub);

    return this.cart.clearCart(req.user.sub);
  }
}
