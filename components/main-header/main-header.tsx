import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/logo.png";

export default function MainHeader() {
  return (
    <header className="w-full h-10 flex justify-between items-center px-4">
      <div className="flex items-center cursor-pointer">
        <Link href="/">
          <div>
            <div className="w-5 h-0.5 bg-black my-0.5"></div>
            <div className="w-5 h-0.5 bg-black my-0.5"></div>
            <div className="w-5 h-0.5 bg-black my-0.5"></div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center flex-grow">
        <Link href="/" className="flex self-center">
          <Image
            src={Logo}
            alt="Medusajs logo"
            priority
            style={{
              width: "85px",
              height: "auto",
            }}
          />
        </Link>
      </div>
    </header>
  );
}
