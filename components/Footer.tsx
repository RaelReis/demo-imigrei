import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-footer-mobile lg:bg-footer-desktop bg-cover">
      <div className="container py-16 px-16 flex flex-col gap-y-8 lg:flex-row items-start text-base-footer">
        <div className="flex flex-col  items-start lg:items-center gap-5 max-w-sm lg:text-center lg:self-center">
          <img className="self-start lg:self-center w-[192px]" src="/assets/footer-logo.svg" alt="" />
          <p>Rua Manual João Souza, 540, São Paulo/SP - Brasil CNPJ: 000000/0000-00</p>
          <div className="flex gap-5 items-center">
            <Link className="duration-300 hover:brightness-125" href="#" aria-label="instagram">
              <img src="/assets/instagram-icon.svg" alt="" />
            </Link>
            <Link className="duration-300 hover:brightness-125" href="#" aria-label="facebook">
              <img src="/assets/facebook-icon.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="lg:ml-auto">
          <h3 className="text-xl text-white font-bold">Navegue</h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <Link className="duration-300 hover:brightness-125" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="duration-300 hover:brightness-125" href="#">
                Serviços
              </Link>
            </li>
            <li>
              <Link className="duration-300 hover:brightness-125" href="#">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link className="duration-300 hover:brightness-125" href="#">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:ml-auto">
          <h3 className="text-xl text-white font-bold">Contato</h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <Link className="flex items-center gap-4 duration-300 hover:brightness-125" href="#">
                <img src="/assets/phone-icon.svg" alt="" />
                <span>55+ 11 0 0000 - 0000</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-4 duration-300 hover:brightness-125" href="#">
                <img src="/assets/email-icon.svg" alt="" />
                <span>contato@imigrei.net</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-4 duration-300 hover:brightness-125" href="#">
                <img src="/assets/wpp-icon.svg" alt="" />
                <span>55+ 11 9 9999 - 9999</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}