"use client";

import { useState } from 'react';
import Button from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import AppIcon from '@shared/icon/AppIcon';

function LoginForm() {
    const [isSigningIn, setIsSigningIn] = useState(false);

    function handleSignIn() {
        setIsSigningIn(true);
    }

    return (
        <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSignIn();
                }}
            >
                {/* Passkey button */}
                <Button variant="secondary">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="1" y="1" width="6" height="6" rx="1" fill="#1b1f3b" opacity="0.85"/>
                        <rect x="9" y="1" width="6" height="6" rx="1" fill="#1b1f3b" opacity="0.55"/>
                        <rect x="1" y="9" width="6" height="6" rx="1" fill="#1b1f3b" opacity="0.55"/>
                        <rect x="9" y="9" width="6" height="6" rx="1" fill="#1b1f3b" opacity="0.85"/>
                    </svg>
                    Continue with Passkey
                </Button>

                {/* Divider */}
                <div className="my-5 flex items-center gap-3 text-caption text-primary">
                    <span className="h-px flex-1 bg-divider" />
                        or
                    <span className="h-px flex-1 bg-divider" />
                </div>

                <span className='flex flex-col gap-4 mb-6'>
                    {/* Email field */}
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Email address"
                        placeholder="you@example.com"
                        leftIcon={ <AppIcon name="email"/>}
                        autoComplete="email"
                    />

                    {/* Password field */}
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="••••••••"
                        leftIcon={<AppIcon name="password"/>}
                        autoComplete="current-password"
                    />

                    <Button type="button" variant="text" size="sm" fullWidth={false} className='self-end'>
                        Forgot password?
                    </Button>
                </span>

                

                {/* Sign in button */}
                <Button type="submit" variant="primary">
                    {isSigningIn ? "Signing in…" : "Sign in"}
                </Button>
            </form>

    )
}

export default LoginForm
