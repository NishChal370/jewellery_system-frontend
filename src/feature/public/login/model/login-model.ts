
import { z } from "zod";
import { loginSchema } from "@feature/public/login/schema/login-schema";


export type ILoginForm = z.infer<typeof loginSchema>;


export type ILoginEmailForm = Pick<z.infer<typeof loginSchema>, "email">;


export type ILoginPasswordForm = Pick<z.infer<typeof loginSchema>, "password">;
