import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocailLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocailYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <a href="#">
            <Image
              src={logo}
              alt="SaaS logo"
              height={40}
              className="relative"
            />
          </a>
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Constumers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <a href="#">
            <SocialX />
          </a>
          <a href="#">
            <SocialInsta />
          </a>
          <a href="#">
            <SocailLinkedin />
          </a>
          <a href="#">
            <SocialPin />
          </a>
          <a href="#">
            <SocailYoutube />
          </a>
        </div>
        <p className="mt-6">
          &copy; 2025 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
