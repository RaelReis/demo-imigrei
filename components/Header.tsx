import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const pathMap = {
  home: "/",
};

export default function Header() {
  const { asPath } = useRouter();

  function handleCurrentPathClasses(path: "home") {
    return pathMap[path] === asPath
      ? "border-b border-base-blue text-base-blue"
      : "border-b border-b-transparent text-base-green ";
  }

  return (
    <header className="w-full py-[2.375rem] bg-base-green-light">
      <div className="container flex items-center justify-between">
        <img src="/assets/logo.svg" alt="Main Logo" width={193} height={35} />

        <nav className="hidden lg:flex items-center text-xl gap-14 text-base-green">
          <ul className="flex items-center gap-14">
            <li className={handleCurrentPathClasses("home")}>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Serviços</Link>
            </li>
            <li>
              <Link href="#">Quem Somos</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
          <Link className="button-fill" href="#">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
