import { z } from "zod";
import REGEX from "@shared/regex/regex";
import { INPUT_ERROR_MESSAGE } from "@shared/constants/messages/inputErrorMessage";


export const signupSchema = z.object({
      email: (z.string()
            .min(1, { message: INPUT_ERROR_MESSAGE.empty })).and
            (z.email({ message: INPUT_ERROR_MESSAGE.invalidEmail })),
      password: z.string()
            .min(1, { message: INPUT_ERROR_MESSAGE.empty })
            .regex(REGEX.PASSWORD, { message: INPUT_ERROR_MESSAGE.invalidPassword }),
      location: z.string()
            .min(1, { message: INPUT_ERROR_MESSAGE.locationNotSelected }),
      agreeTermAndCondition: z.boolean()
            .refine((val) => val === true, { message: INPUT_ERROR_MESSAGE.notAgreeSignupTermAndCondition })
})