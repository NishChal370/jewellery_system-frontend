import { cn } from "@lib/utils";
import Button from "./button";
import usePasswordToggle from "@hook/input/use-password-toggle";

type FloatingInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
      label: string;
      errorMessage?: string;
};

function FloatingPasswordInput({ label, className, errorMessage, ...props }: FloatingInputProps) {
      const [passwordVisible, changePasswordVisible] = usePasswordToggle();

      return (
            <div className="group relative w-full h-fit flex flex-col gap-1.5">
                  <input
                        data-slot="password"
                        className={cn(
                              "peer h-15 w-full rounded-md px-3 pt-4 pr-21 border border-input flex min-w-0  bg-transparent mt-0 shadow-xs transition-[color,box-shadow] outline-none",
                              "focus-visible:border-ring focus-visible:ring-ring/50s focus-visible:border-2 ",
                              "placeholder:text-muted-foreground",
                              "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                              "hover:border-primary group-hover:border-primary",
                              "aria-invalid:ring-destructive/20 aria-invalid:border-destructive aria-invalid:focus-visible:border-ring",
                              "dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
                              className
                        )}
                        name="email"
                        type={passwordVisible ? "text" : "password"}
                        aria-invalid={!!errorMessage}
                        {...props}
                        placeholder=""
                  />
                  <Button
                        onClick={changePasswordVisible}
                        type="button"
                        variant="ghost"
                        className="peer absolute right-0.5 top-0 translate-y-0 h-15 w-20 transform text-sm
                              hover:bg-transparent hover:text-primary
                        "
                  >
                        {passwordVisible ? "Hide" : "Show"}
                  </Button>

                  <label
                        htmlFor={props.id}
                        data-slot="label"
                        className={cn(
                              "flex items-center gap-2 text-sm font-medium text-muted-foreground  select-none pointer-events-none absolute left-3.5 top-2 origin-[0] scale-90 transform  transition-all",
                              "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 ",
                              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                              "peer-placeholder-shown:text-body peer-placeholder-shown:left-3 peer-placeholder-shown:top-5 peer-placeholder-shown:scale-90 peer-placeholder-shown:font-medium",
                              "peer-focus:top-2 peer-focus:left-3.5 peer-focus:font-medium peer-focus:text-foreground"
                        )}
                  >
                        {label}
                  </label>

                  {errorMessage && <p className="text-sm scale-98 text-destructive">{errorMessage}</p>}
            </div>
      );
}

export default FloatingPasswordInput;
