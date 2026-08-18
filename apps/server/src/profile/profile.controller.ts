import { Body, Controller, Get, Patch, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth";
import { ProfileService } from "./profile.service";

@Controller("profile")
@UseGuards(JwtAuthGuard)
export class ProfileController {
  constructor(private readonly profile: ProfileService) {}

  @Get()
  getProfile(@Req() req: any) {
    return this.profile.getProfile(req.user.sub);
  }

  @Patch()
  editProfile(@Req() req: any, @Body() body: any) {
    return this.profile.editProfile(req.user.sub, body);
  }
}
