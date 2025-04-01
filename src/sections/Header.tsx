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
            <div className="relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
              <a href="#">
                <Image
                  src={Logo}
                  alt="Saas Logo"
                  width={40}
                  height={40}
                  className="relative"
                />
              </a>
            </div>
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
    </header>
  );
};
