import PublicTopNav from "@navigation/topNav/public-topNav";

function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
      return (
            <>
                  <PublicTopNav />

                  <main
                        className="w-full h-full flex justify-center items-center-safe mb-40 pt-10 
                              sm:pt-0
                        "
                  >
                        {children}
                  </main>
            </>
      );
}

export default PublicLayout;
