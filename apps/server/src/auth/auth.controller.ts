import { Body, Controller, Post } from "@nestjs/common";

import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private auth: AuthService) {}

  /**
   * Public register
   * Default role: CUSTOMER
   */
  @Post("register")
  register(
    @Body()
    body: {
      uid: string;
      password: string;
    },
  ) {
    return this.auth.register(body.uid, body.password);
  }

  /**
   * Login LOCAL account
   */
  @Post("login")
  login(
    @Body()
    body: {
      uid: string;
      password: string;
    },
  ) {
    return this.auth.login(body.uid, body.password);
  }

  /**
   * Refresh JWT
   */
  @Post("refresh")
  refresh(
    @Body()
    body: {
      token: string;
    },
  ) {
    return this.auth.refresh(body.token);
  }
}
