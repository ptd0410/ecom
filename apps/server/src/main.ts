import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { initOwner } from "./init-owner";

async function bootstrap() {
  await initOwner();
  const app = await NestFactory.create(AppModule);

  // Prefix cho toàn bộ API
  // Ví dụ: /auth/login -> /api/auth/login
  app.setGlobalPrefix("api");

  // Cho phép frontend gọi API
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // Tự động validate DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // loại bỏ field không khai báo trong DTO
      forbidNonWhitelisted: true, // báo lỗi nếu gửi field thừa
      transform: true, // tự convert kiểu dữ liệu
    }),
  );

  const port = process.env.PORT || 3000;

  await app.listen(port);

  console.log(`🚀 Server running at ${await app.getUrl()}`);
}

bootstrap();
