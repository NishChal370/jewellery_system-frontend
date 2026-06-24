import Button from '@shared/ui/button';
import LoginForm from './login-form';
import LeftScene from './login-left-scene';
import Image from 'next/image';
import logo from "@assets/logo-only.png";
import AppIcon from '@shared/icon/AppIcon';

function LoginView() {
   
    return (
        <div className="flex min-h-screen w-full flex-col auth:flex-row">
        {/* Left panel */}
        <LeftScene/>

        {/* Right login side */}
        <div className="flex w-full flex-shrink-0 items-start justify-center bg-surface px-8 py-[14vh]  auth:w-[45%] auth:min-w-[520px]">
            <div className="w-full max-w-[420px]">
                {/* Logo */}
                <div className="mb-8 flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="Nexluma"
                        height={40}
                        width={40}
                        className="h-10 w-10 object-contain"
                    />
                    <span className="text-2xl font-bold tracking-[-0.025] text-foreground self-end">Nexluma</span>
                </div>

                {/* Heading */}
                <header className="mb-8 space-y-2">
                    <h2 className="text-[1.75rem] font-header tracking-header leading-tight text-foreground">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Log in to continue to your workspace
                    </p>
                </header>

                {/* Passkey button */}
                <Button type="button" variant="secondary">
                    <AppIcon name="passkey"/>

                    Continue with Passkey
                </Button>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />

                    <span className="text-xs text-muted-foreground">
                        or
                    </span>

                    <div className="h-px flex-1 bg-border" />
                </div>

                <LoginForm/>
                

                {/* Signup prompt */}
                <p className="mt-6 text-center flex items-center justify-center gap-1 text-body-sm">
                    <span className='text-muted-foreground'>Don&apos;t have an account?</span>
                    <Button variant="text" size="sm" fullWidth={false}>
                        Create one
                    </Button>
                </p>
            </div>
        </div>
        </div>
  
    )
}

export default LoginView
