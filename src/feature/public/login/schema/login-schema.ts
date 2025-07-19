import { z } from "zod";
import REGEX from "@regex";
import { INPUT_ERROR_MESSAGE } from "@constant/messages/inputErrorMessage";



export const loginSchema = z.object({
      email: (z.string()
            .min(1, { message: INPUT_ERROR_MESSAGE.empty })).and
            (z.email({ message: INPUT_ERROR_MESSAGE.invalidEmail })),
      password: z.string()
            .min(1, { message: INPUT_ERROR_MESSAGE.empty })
            .regex(REGEX.PASSWORD, { message: INPUT_ERROR_MESSAGE.invalidPassword, })
})

