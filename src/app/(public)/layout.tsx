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
                        <span
                              className="w-[90%] flex flex-col gap-8
                                    md:w-[60%] md:max-w-[36rem] md:min-w-[20rem]   
                                    lg:w-[40rem]
                              "
                        >
                              {children}
                        </span>
                  </main>
            </>
      );
}

export default PublicLayout;
