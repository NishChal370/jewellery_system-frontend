
import useAppForm from "@shared/hooks/form/use-app-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISignupForm } from "../types/signup.types";
import { signupSchema } from "../schema/signup-schema";

function useSignupForm() {
      const methods = useAppForm<ISignupForm>({
            resolver: zodResolver(signupSchema),
            defaultValues: { 
                  email:"",
                  password:"",
                  agreeTermAndCondition: false, 
                  location: "" },
      });

      const formSubmitHandler = methods.handleSubmit((formData) => {
            console.log(formData);
      });

      return { methods, formSubmitHandler } as const;
}

export default useSignupForm