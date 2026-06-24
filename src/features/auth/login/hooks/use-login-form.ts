import { useState } from "react";
import type {FormEvent} from "react";
import useAppForm from "@shared/hooks/form/use-app-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ILoginForm } from "@feature/auth/login/types/login.types";
import { loginSchema } from "@feature/auth/login/schema/login-schema";

function useLoginForm() {
      const methods = useAppForm<ILoginForm>({
            resolver: zodResolver(loginSchema),
      });


      const formSubmitHandler = methods.handleSubmit((formDetail) => {
            console.log("object")
            console.log(formDetail);
      });

      return { methods,formSubmitHandler } as const;
}

export default useLoginForm;
