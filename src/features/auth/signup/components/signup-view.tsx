import Button from "@shared/ui/button"
import SignupForm from "./signup-form"
import { PUBLIC_PATH } from "@shared/config/routePath"
import Link from "next/link"

function SignupView() {
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
                    <Link href={PUBLIC_PATH.login.full}>Login</Link>
                </Button>
            </span>
        </>
    )
}

export default SignupView
