import Link from "next/link";
import React from "react";
import logoS from "../../public/images/profile/logo-transparent.png";
import logoW from "../../public/images/profile/logo-white.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link
        href="/"
        className="w-16 h-16 text-light flex items-center 
        justify-center rounded-full text-xl font-bold"
      >
        <Image className="block dark:hidden" src={logoS} width={40} height={40} alt="Logo"></Image>
        <Image className="hidden dark:block" src={logoW} width={40} height={40} alt="Logo"></Image>
      </Link>
    </div>
  );
};

export default Logo;
