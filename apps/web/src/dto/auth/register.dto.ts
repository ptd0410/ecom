import { z } from "zod";

export const registerSchema = z
  .object({
    uid: z
      .string()
      .trim()
      .min(1, "Uid không được để trống")
      .max(50, "Uid không được quá 50 ký tự"),

    password: z
      .string()
      // .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .max(100, "Mật khẩu không được quá 100 ký tự"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Mật khẩu xác nhận không khớp",
  });

export type RegisterDTO = z.infer<typeof registerSchema>;
