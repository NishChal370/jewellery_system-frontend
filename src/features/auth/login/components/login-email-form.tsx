import { useFormContext } from "react-hook-form";
import Button from "@shared/ui/button";
import FloatingInput from "@shared/ui/floating-input";
import { ILoginEmailForm } from "../types/login.types";

function LoginEmailForm() {
      const {
            register,
            formState: { errors },
      } = useFormContext<ILoginEmailForm>();

      return (
            <>
                  <FloatingInput
                        label="Email address"
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
