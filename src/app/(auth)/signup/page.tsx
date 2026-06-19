
import SignupForm from "@feature/auth/signup/components/signup-form";
import { PUBLIC_PATH } from "@shared/config/routePath/public-path";
import Button from "@shared/ui/button";

function SignupPage() {
      return (
            <>
                  <header className="flex flex-col  gap-1.5">
                        <h1 className="text-3xl font-extrabold">Let’s create your account</h1>
                        <p className="text-base">NexLuma makes it easy to get started.</p>
                  </header>

                  <SignupForm />

                  <span className="flex gap-2 items-center">
                        <p>Already have a NexLuma account?</p>

                        <Button type="button" variant="link" size="sm" asChild>
                              <a href={PUBLIC_PATH.login.full}>Login</a>
                        </Button>
                  </span>
            </>
      );
}

export default SignupPage;
