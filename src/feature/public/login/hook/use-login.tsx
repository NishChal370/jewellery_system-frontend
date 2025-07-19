import { FormEvent, useState } from "react";
import useAppForm from "@hook/form/use-app-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginForm } from "@feature/public/login/model/login-model";
import { loginSchema } from "@feature/public/login/schema/login-schema";

function useLogin() {
      const methods = useAppForm<ILoginForm>({
            resolver: zodResolver(loginSchema),
      });

      const { handleSubmit } = methods;
      const [presentForm, setPresentForm] = useState<{ name: "email" | "password" }>({ name: "email" });

      const changeForm = async () => {
            if (presentForm.name === "password") {
                  setPresentForm({ name: "email" });

                  return;
            }

            const isEmailValid = await methods.trigger(["email"]);

            if (!isEmailValid) return;

            setPresentForm({ name: "password" });
      };

      const formSubmit = handleSubmit((formDetail) => {
            console.log(formDetail);
      });

      const formSubmitHandler =
            presentForm.name === "email"
                  ? (event: FormEvent<HTMLFormElement>) => {
                          event.preventDefault();

                          changeForm();
                    }
                  : formSubmit;

      return { methods, changeForm, formSubmitHandler, presentForm } as const;
}

export default useLogin;
