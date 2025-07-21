/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import logo from "@assets/logo.webp";
import Link from "next/link";
import { PRIVATE_PATH } from "@routePath/private-path";
import AppIcon from "@shared/icon/AppIcon";

function PrivateTopNav() {
      return (
            <nav className="top--nav flex flex-row justify-between gap-2 items-center w-full py-2.5 border border-b-accent/60">
                  <Link href={PRIVATE_PATH.dashboard.full}>
                        <Image src={logo} alt="Company logo" style={{ width: "9rem" }} />
                  </Link>

                  <aside className="h-7 w-fit gap-2.5 flex flex-row items-center">
                        <section className="flex items-center w-fit h-full">
                              <button
                                    type="button"
                                    className="cursor-pointer active:shadow border border-accent rounded p-1 h-full"
                              >
                                    <AppIcon name="notification" />
                              </button>
                        </section>

                        <hr className="border-b-8 border-accent w-[1.5px] rounded h-5 bg-accent" />

                        <span className="h-fit w-fit gap-1.5 flex flex-row items-center">
                              <img
                                    content="current user"
                                    alt="current user"
                                    src="https://avatars.githubusercontent.com/u/9113740?v=4"
                                    className="rounded h-7 object-cover text-caption"
                              />

                              <text className="flex flex-col gap-0 leading-3.5 w-fit max-w-32">
                                    <p className="truncate w-full text-caption font-caption">
                                          Nischal Bishwokarma
                                    </p>

                                    <p className="truncate text-caption w-full text-muted-foreground max-w-20">
                                          Founder
                                    </p>
                              </text>
                        </span>
                  </aside>
            </nav>
      );
}

export default PrivateTopNav;
