import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="justify-center items-center">
          <Image
            src={"/logo.svg"}
            width={118}
            height={18}
            alt="Car hub logo"
            className="object-contain"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
