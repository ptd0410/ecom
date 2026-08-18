import { z } from "zod";

export const userSchema = z.object({
  uid: z.string().trim().min(1, "Uid không được để trống"),

  password: z
    .string()
    // .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .max(100, "Mật khẩu không được quá 100 ký tự"),
});

export type LoginDTO = z.infer<typeof userSchema>;
