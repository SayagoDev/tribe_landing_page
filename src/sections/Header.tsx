"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
      <a href="#">
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
          <p className="text-white/60 hidden md:block">
            Streamline your workflow and boost your productivity.
          </p>
          <div className="inline-flex gap-1 items-center">
            <p>Get started for free</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
          </div>
        </div>
      </a>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="#">
              <Image src={Logo} alt="Saas Logo" width={40} height={40} />
            </a>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
              <MenuIcon className="h-5 w-5" />
            </button>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 min-h-screen w-full bg-black shadow-xl transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col min-h-screen">
          <div className="flex items-center justify-between p-8 border-b border-white/10">
            <a onClick={handleLinkClick} href="#">
              <Image src={Logo} alt="Saas Logo" width={40} height={40} />
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white/60 hover:text-white"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 p-8 flex flex-col gap-8">
            <a
              href="#"
              onClick={handleLinkClick}
              className="text-2xl text-white/60 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="text-2xl text-white/60 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="text-2xl text-white/60 hover:text-white transition-colors"
            >
              Customers
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="text-2xl text-white/60 hover:text-white transition-colors"
            >
              Updates
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="text-2xl text-white/60 hover:text-white transition-colors"
            >
              Help
            </a>
          </nav>

          <div className="p-8 border-t border-white/10 mt-auto">
            <button
              onClick={handleLinkClick}
              className="btn bg-white text-black hover:bg-white/90 w-full text-lg py-4"
            >
              Get for free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
