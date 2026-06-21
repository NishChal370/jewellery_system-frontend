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

      const [loginFormStep, setLoginFormStep] = useState<"email" | "password">("email");

      const showEmailStep = ()=>{
            setLoginFormStep("email");
      }

      const showPasswordStep = async () =>{
            const isEmailValid = await methods.trigger("email");

            if (!isEmailValid) return;

            setLoginFormStep("password");
      }

      const formSubmit = methods.handleSubmit((formDetail) => {
            console.log(formDetail);
      });

      const formSubmitHandler =
            loginFormStep === "email"
                  ? (event: FormEvent<HTMLFormElement>) => {
                          event.preventDefault();

                          void showPasswordStep();
                    }
                  : formSubmit;

      return { methods, loginFormStep, showEmailStep, formSubmitHandler } as const;
}

export default useLoginForm;
