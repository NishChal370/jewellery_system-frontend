import PrivateTopNav from "@navigation/topNav/private-topNav";

function PrivateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
      return (
            <>
                  <PrivateTopNav />

                  <main className="main--body w-full h-full">{children}</main>
            </>
      );
}

export default PrivateLayout;
