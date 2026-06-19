import { PUBLIC_PATH } from "@shared/config/routePath/public-path";
import Button from "@shared/ui/button";

interface ILoginHeader {
      isInEmailForm: boolean;
      email?: string;
      changeForm(): void;
}
function LoginHeader({ isInEmailForm, email, changeForm }: ILoginHeader) {
      return (
            <header className="flex flex-col items-start gap-4">
                  {isInEmailForm ? (
                        <>
                              <h1 className="text-page-title leading-section-title font-section-title">
                                    Log in to your account
                              </h1>
                              <span className="flex gap-1 items-center">
                                    <p>New to NexLuma?</p>

                                    <Button type="button" variant="link" size="sm" asChild>
                                          <a href={PUBLIC_PATH.signup.full}> Sign up</a>
                                    </Button>
                              </span>
                        </>
                  ) : (
                        <>
                              <h1 className="text-page-title leading-section-title font-section-title">
                                    Welcome Back
                              </h1>

                              <span className="break-all flex  items-center gap-2">
                                    {email}
                                    <Button type="button" variant="link" size="sm" onClick={changeForm}>
                                          Change Email
                                    </Button>
                              </span>
                        </>
                  )}
            </header>
      );
}

export default LoginHeader;
