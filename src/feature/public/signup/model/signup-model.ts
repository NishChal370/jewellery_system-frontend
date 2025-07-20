import { z } from "zod";
import { signupSchema } from "../schema/signup-schema";

export type ISignupForm = z.infer<typeof signupSchema>