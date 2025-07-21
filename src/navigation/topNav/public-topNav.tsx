import Image from "next/image";
import logo from "@assets/logo.webp";

function PublicTopNav() {
      return (
            <nav className="top--nav flex flex-row justify-between w-full px-6 pt-4.5">
                  <Image src={logo} alt="Company logo" style={{ width: "12rem" }} />
            </nav>
      );
}

export default PublicTopNav;
