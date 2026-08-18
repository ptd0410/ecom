import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from "@nestjs/common";

import { CategoryService } from "./category.service";

@Controller("categories")
export class CategoryController {
  constructor(private readonly category: CategoryService) {}

  @Get()
  getCategories() {
    return this.category.getCategories();
  }

  @Get(":id")
  getCategory(@Param("id") id: string) {
    return this.category.getCategory(+id);
  }

  @Post()
  createCategory(@Req() req: any, @Body() body: any) {
    const userId = req.user.sub;

    return this.category.createCategory(userId, body);
  }

  @Patch(":id")
  updateCategory(@Req() req: any, @Param("id") id: string, @Body() body: any) {
    const userId = req.user.sub;

    return this.category.updateCategory(userId, +id, body);
  }

  @Delete(":id")
  deleteCategory(@Req() req: any, @Param("id") id: string) {
    const userId = req.user.sub;

    return this.category.deleteCategory(userId, +id);
  }
}
