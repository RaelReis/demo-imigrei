import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Header() {
  const { asPath } = useRouter();

  return (
    <header className="w-full py-[2.375rem] bg-base-green-light">
      <div className="container flex items-center justify-between">
        <img src="/assets/logo.svg" alt="Main Logo" />

        <nav className="hidden lg:flex items-center gap-14">
          <ul className="flex items-center text-base-green text-xl gap-14">
            <li>Home</li>
            <li>Serviços</li>
            <li>Quem Somos</li>
            <li>Blog</li>
          </ul>
          <Link className="button-fill" href="#">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
