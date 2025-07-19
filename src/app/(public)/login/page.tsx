"use client";

import Form from "@shared/ui/form";
import Button from "@shared/ui/button";
import useLogin from "@feature/public/login/hook/use-login";
import LoginHeader from "@feature/public/login/components/login-header";
import LoginEmailForm from "@feature/public/login/components/login-email-form";
import LoginPasswordForm from "@feature/public/login/components/login-password-form";

function LoginPage() {
      const { methods, formSubmitHandler, changeForm, presentForm } = useLogin();

      return (
            <span
                  className="w-[90%] flex flex-col justify-between gap-8
                        md:w-[60%] md:max-w-[36rem] md:min-w-[20rem]   
                        lg:w-[40rem]
                  "
            >
                  <LoginHeader
                        isInEmailForm={presentForm.name === "email"}
                        email={methods.getValues("email")}
                        changeForm={changeForm}
                  />

                  <Form className="flex flex-col gap-6" methods={methods} onSubmit={formSubmitHandler}>
                        {presentForm.name === "email" ? <LoginEmailForm /> : <LoginPasswordForm />}
                  </Form>

                  {presentForm.name === "email" && (
                        <>
                              <span
                                    className="w-full flex gap-2 justify-center items-center text-muted-foreground/90
                                          [&>hr]:w-full [&>hr]:border-border [&>hr]:rounded
                                    "
                              >
                                    <hr />
                                    <p>or</p>
                                    <hr />
                              </span>

                              <Button type="submit" size="lg" variant="secondary">
                                    Sign in with a passkey
                              </Button>
                        </>
                  )}
            </span>
      );
}

export default LoginPage;
