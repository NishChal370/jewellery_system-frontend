import Button from '@shared/ui/button';
import LoginForm from './login-form';
import LeftScene from './login-left-scene';
import Image from 'next/image';
import logo from "@assets/logo-only.png";

function LoginView() {
   
    return (
        <div className="flex min-h-screen w-full flex-col auth:flex-row">
        {/* Left panel */}
        <LeftScene/>

        {/* Right login side */}
        <div className="flex w-full flex-shrink-0 items-center justify-center bg-surface px-6 py-12 auth:w-[45%] auth:px-14 auth:py-12">
            <div className="w-full max-w-[480px]">
                {/* Logo */}
                <div className="logo-wrap mb-10 flex items-center gap-1">
                    <div className="logo-icon">
                       <Image
                        src={logo}
                        alt="Nexluma"
                        height={32}
                        width={110}
                        className="h-12 w-auto"
                    />
                    </div>
                    <span className="logo-wordmark text-3xl font-bold -tracking-subheader self-end">Nexluma</span>
                </div>

                {/* Heading */}
                <div className="mb-7">
                    <h2 className="mb-[5px] text-section-header font-header tracking-subheader text-foreground">
                        Welcome back
                    </h2>
                    <p className="text-section-subheader text-muted-foreground">
                        Sign in to continue to your workspace
                    </p>
                </div>

                <LoginForm/>
                

                {/* Signup prompt */}
                <p className="mt-[22px] text-center text-body-sm">
                <span className='text-muted-foreground'>No account yet?</span> {" "}
                    <Button variant="text" size="sm" fullWidth={false}>
                        Create account
                    </Button>
                </p>
            </div>
        </div>
        </div>
  
    )
}

export default LoginView
