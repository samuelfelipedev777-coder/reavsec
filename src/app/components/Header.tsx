"use client";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-black/40 border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
      id="header"
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-4 md:px-6">
        <Image
          src="/reavsec-logo.svg"
          width={80}
          height={80}
          alt="Reavsec Logo"
          className="cursor-pointer w-[72px] md:w-[100px]"
          onClick={() => window.location.reload()}
          id="logo"
        />

        <ul className="hidden md:flex gap-6 items-center text-sm ml-10">
          <li className="flex items-center gap-1 hover:bg-[#343438] px-2 py-1 rounded-full"><a href="#inicio" id="link-inicio">Início</a></li>
          <li className="flex items-center gap-1 hover:bg-[#343438] px-2 py-1 rounded-full">
            <a href="#aprendizado" id="link-aprendizado">Aprendizado</a>
            <FiChevronDown size={14} className="text-gray-400" />
          </li>
          <li className="hover:bg-[#343438] px-2 py-1 rounded-full"><a href="#comunidade" id="link-comunidade">Comunidade</a></li>
          <li className="hover:bg-[#343438] px-2 py-1 rounded-full"><a href="#planos" id="link-planos">Planos</a></li>
          <li className="hover:bg-[#343438] px-2 py-1 rounded-full"><a href="#suporte" id="link-suporte">suporte</a></li>
          <li className="hover:bg-[#343438] px-2 py-1 rounded-full"><Link href="/novidades" id="link-novidades">Novidades</Link></li>
        </ul>

        <div className="flex gap-3 items-center text-sm font-medium">
          <div id="btn-login-desktop">
            <Link href="/login" id="link-login">
            <Button
              name="Login"
              className="hidden md:flex px-4 py-2 rounded-full border border-[#343438] bg-white/10 hover:bg-white/20 transition cursor-pointer"
            />
            </Link>
          </div>

          <div id="btn-comecar-desktop">
            <Link href="/signup" id="link-signup">
            <Button
              name="Começar agora"
              className="hidden md:flex px-4 py-2 rounded-full bg-[#8E51FF] hover:bg-[#7F22FE] transition cursor-pointer"
            />
            </Link>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 bg-[#18181B] border border-[#2e2e31] rounded-md cursor-pointer"
            id="menu-mobile-toggle"
          >
            {isOpen ? <RxCross2 size={20} /> : <RxHamburgerMenu size={20} />}
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f0f11] border-t border-[#2e2e31] shadow-xl flex flex-col text-sm md:hidden" id="menu-mobile">
          <a href="#inicio" className="px-5 py-4 border-b border-[#1c1c1f] hover:bg-[#2e2e31] transition duration-300 ease-in-out" id="mobile-inicio">Início</a>
          <a href="#aprendizado" className="px-5 py-4 border-b border-[#1c1c1f] hover:bg-[#2e2e31]" id="mobile-aprendizado">Aprendizado</a>
          <a href="#comunidade" className="px-5 py-4 border-b border-[#1c1c1f] hover:bg-[#2e2e31]" id="mobile-comunidade">Comunidade</a>
          <a href="#labs" className="px-5 py-4 border-b border-[#1c1c1f] hover:bg-[#2e2e31]" id="mobile-labs">Labs</a>
          <a href="#suporte" className="px-5 py-4 border-b border-[#1c1c1f] hover:bg-[#2e2e31]" id="mobile-sobre">Sobre</a>
          <Link href="/novidades" className="px-5 py-4 border-b border-[#1c1c1f] hover:bg-[#2e2e31]" id="mobile-Novidades">
          Novidades
          </Link>

          <div className="flex flex-col gap-2 px-5 py-5">
            <div id="btn-login-mobile">
              <Button
                name="Log in"
                className="w-full border border-[#343438] bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition cursor-pointer"
              />
            </div>

            <div id="btn-get-started-mobile">
              <Button
                name="Get Started"
                className="w-full bg-[#8E51FF] px-4 py-2 rounded-full hover:bg-[#7F22FE] transition cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}