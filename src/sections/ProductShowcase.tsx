"use client";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ProductShowcase = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5 md:text-[54px] md:leading-[60px]">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with and app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <motion.img
            src={productImage.src}
            alt="Product Image"
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            style={{ translateY }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            style={{ y: translateY }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            style={{ y: translateY }}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
};
