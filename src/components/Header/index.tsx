import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

type Paths = "home" | "blog";

export default function Header() {
  const { pathname } = useRouter();

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderBackground);

    return () => window.removeEventListener("scroll", handleHeaderBackground);
  }, []);

  function handleHeaderBackground() {
    if (window.scrollY > 0) {
      headerRef.current?.classList.remove("bg-transparent");
      headerRef.current?.classList.add("bg-white", "shadow-sm");
    } else {
      headerRef.current?.classList.remove("bg-white", "shadow-sm");
      headerRef.current?.classList.add("bg-transparent");
    }
  }

  function handleCurrentPathClasses(path: Paths) {
    const pathList = pathname.split("/");

    if (path === "home" && pathList[1] === "") {
      return "border-b border-base-blue text-base-blue";
    }

    return path === pathList[1]
      ? "border-b border-base-blue text-base-blue"
      : "border-b border-b-transparent text-base-green ";
  }

  return (
    <header className="fixed top-0 w-full py-[2.375rem] bg-transparent duration-300 z-50" ref={headerRef}>
      <div className="container flex items-center justify-between">
        <Link href="/">
          <img data-testid="svg-element" src="/assets/logo.svg" alt="Main Logo" width={193} height={35} />
        </Link>

        <nav className="hidden lg:flex items-center text-xl gap-14 text-base-green">
          <ul className="flex items-center gap-14">
            <li className={handleCurrentPathClasses("home")}>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Serviços</Link>
            </li>
            <li>
              <Link href="#">Quem Somos</Link>
            </li>
            <li className={handleCurrentPathClasses("blog")}>
              <Link href="/blog">Blog</Link>
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
