import PublicTopNav from "@shared/ui/navigation/topNav/public-topNav";

function AuthLayout({ children }: Readonly<{ 
    children: React.ReactNode; 
}>) {
    return (
        <>
            {children}
        </>
    );
}

export default AuthLayout;