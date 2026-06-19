"use client";

import React from 'react'
import LoginHeader from './login-header';
import Form from '@shared/ui/form';
import LoginEmailForm from './login-email-form';
import LoginPasswordForm from './login-password-form';
import useLoginForm from '../hooks/use-login-form';
import Button from '@shared/ui/button';

function LoginForm() {
    const { methods, loginFormStep: currentLoginFormStep, formSubmitHandler, showEmailStep } = useLoginForm();

    return (
        <>
            <LoginHeader
                isInEmailForm={currentLoginFormStep === "email"}
                email={methods.watch("email")}
                changeForm={showEmailStep}
            />

            <Form className="flex flex-col gap-6" methods={methods} onSubmit={formSubmitHandler}>
                {currentLoginFormStep === "email" ? <LoginEmailForm /> : <LoginPasswordForm />}
            </Form>

            {currentLoginFormStep === "email" && (
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
            </>
      );
}

export default LoginForm
