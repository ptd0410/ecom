import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";

import { AdminService } from "./admin.service";
import { JwtAuthGuard } from "../auth";

@Controller("admin")
@UseGuards(JwtAuthGuard)
export class AdminController {
  constructor(private readonly admin: AdminService) {}

  /**
   * Lấy danh sách admin
   */
  @Get()
  getAdmins() {
    return this.admin.getAdmins();
  }

  /**
   * OWNER thêm ADMIN
   */
  @Post("create")
  addAdmin(
    @Req() req: any,

    @Body()
    body: any,
  ) {
    return this.admin.createAdmin(
      req.user.roles,
      body.uid,
      body.password,
      body.name,
    );
  }

  /**
   * OWNER xoá quyền ADMIN
   */
  @Post("remove")
  removeAdmin(
    @Req() req: any,

    @Body()
    body: {
      uid: number;
    },
  ) {
    return this.admin.removeAdmin(req.user.roles, body.uid);
  }
}
