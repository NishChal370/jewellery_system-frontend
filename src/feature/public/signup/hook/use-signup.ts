
import useAppForm from "@hook/form/use-app-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISignupForm } from "../model/signup-model";
import { signupSchema } from "../schema/signup-schema";

function useSignupForm() {
      const methods = useAppForm<ISignupForm>({
            resolver: zodResolver(signupSchema),
            defaultValues: { agreeTermAndCondition: false, location: "" },
      });

      const formSubmitHandler = methods.handleSubmit((formData) => {
            console.log(formData);
      });

      return { methods, formSubmitHandler } as const;
}

export default useSignupForm