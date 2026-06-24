"use client";

import Button from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import AppIcon from '@shared/icon/AppIcon';
import useLoginForm from '../hooks/use-login-form';
import Form from '@shared/ui/form';

function LoginForm() {
    const { methods, formSubmitHandler } = useLoginForm()

    return (
        <Form methods={methods} onSubmit={formSubmitHandler}>
                <span className='flex flex-col gap-4'>
                    <Input
                        id="email"
                        type="email"
                        label="Email address"
                        placeholder="you@example.com"
                        leftIcon={ <AppIcon name="email"/>}
                        autoComplete="email"
                        {...methods.register("email")}
                    />

                    <Input
                        id="password"
                        type="password"
                        label="Password"
                        placeholder="••••••••"
                        leftIcon={<AppIcon name="password"/>}
                        autoComplete="current-password"
                        {...methods.register("password")}
                    />
                </span>
                
                <span className='flex justify-end self-end mb-4'>
                        <Button type="button" variant="text" size="sm" fullWidth={false}>
                            Forgot password?
                        </Button>
                </span>
                

                {/* Sign in button */}
                <Button type="submit" variant="primary">
                    Log in
                </Button>
            </Form>

    )
}

export default LoginForm
