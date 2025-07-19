import { useFormContext } from "react-hook-form";
import Button from "@shared/ui/button";
import FloatingPasswordInput from "@shared/ui/floating-password-input";
import { ILoginPasswordForm } from "../model/login-model";

function LoginPasswordForm() {
      const {
            register,
            formState: { errors },
      } = useFormContext<ILoginPasswordForm>();

      return (
            <>
                  <div className="flex flex-col gap-1">
                        <FloatingPasswordInput
                              label="Password"
                              id="password"
                              {...register("password")}
                              errorMessage={errors.password?.message}
                              autoFocus
                        />

                        <Button type="button" variant="link" size="sm" className="self-end text-sm">
                              Forgot Password?
                        </Button>
                  </div>

                  <Button type="submit" size="lg" variant="default">
                        Login
                  </Button>
            </>
      );
}

export default LoginPasswordForm;
