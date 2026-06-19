import { useFormContext } from "react-hook-form";
import Button from "@shared/ui/button";
import FloatingInput from "@shared/ui/floating-input";
import { ILoginEmailForm } from "../model/login-model";

function LoginEmailForm() {
      const {
            register,
            formState: { errors },
      } = useFormContext<ILoginEmailForm>();

      return (
            <>
                  <FloatingInput
                        label="Email or phone number"
                        id="email"
                        type="text"
                        {...register("email")}
                        errorMessage={errors.email?.message}
                  />

                  <Button type="submit" size="lg" variant="default">
                        Continue
                  </Button>
            </>
      );
}

export default LoginEmailForm;
