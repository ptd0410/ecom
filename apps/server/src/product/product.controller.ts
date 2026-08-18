import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from "@nestjs/common";

import { ProductService } from "./product.service";
import { AuthRequest } from "../types";

@Controller("products")
export class ProductController {
  constructor(private readonly product: ProductService) {}

  @Get()
  getProducts(
    @Query("categoryId") categoryId?: string,
    @Query("page") page = "1",
    @Query("limit") limit = "20",
  ) {
    return this.product.getProducts({
      categoryId: categoryId ? +categoryId : undefined,

      page: +page,

      limit: +limit,
    });
  }

  @Get(":id")
  getProduct(@Param("id") id: string) {
    return this.product.getProduct(+id);
  }

  @Post()
  createProduct(@Req() req: AuthRequest, @Body() body: any) {
    const userId = req.user.sub;

    return this.product.createProduct(userId, body);
  }

  @Patch(":id")
  updateProduct(@Param("id") id: string, @Body() body: any) {
    return this.product.updateProduct(+id, body);
  }

  @Delete(":id")
  deleteProduct(@Param("id") id: string) {
    return this.product.deleteProduct(+id);
  }
}
