import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "../auth";
import { ProfileModule } from "../profile";
import { CategoryModule } from "../category";
import { ProductModule } from "../product";
import { CartModule } from "../cart";
import { AdminModule } from "../admin";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    AuthModule,
    ProfileModule,
    CategoryModule,
    ProductModule,
    CartModule,
    AdminModule,
  ],
})
export class AppModule {}
