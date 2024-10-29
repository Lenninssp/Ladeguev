import React, { useState } from "react";
import { AnimatePresence, motion, useTransform, useViewportScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["linear-gradient(to bottom, rgba(252, 232, 255, 0) 0%, rgba(252, 232, 255, 0) 100%)", "linear-gradient(to bottom, rgba(227, 218, 192, 1) 0%, rgba(227, 218, 192, 0) 100%)"]
  );

  const height = useTransform(scrollY, [0, 100], [120, 110]);
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["#E3DAC0", "#265956"] 
  );
  return (
    <motion.div
      id="navigation"
      style={{ background, height }}
      className="fixed w-full z-30"
    >
      <div className="px-[4%] py-10 flex items-start justify-between">
        <motion.div
          className="z-30 text-2xl md:text-4xl font-bold"
          style={{ color: textColor }}
        >
          Alejandro Ladeguev
        </motion.div>

        <div className="relative md:hidden z-30">
          <button
            onClick={toggleMenu}
            className="z-40 text-yellow-500 bg-alg rounded-full h-10 w-10 flex items-center justify-center"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-8">
          <motion.button style={{ color: textColor }} className="text-2xl" onClick={() => scrollToSection("home")}>
            Home
          </motion.button>
          <motion.button style={{ color: textColor }} className="text-2xl" onClick={() => scrollToSection("newReleases")}>
            New Releases!
          </motion.button>
          <motion.button style={{ color: textColor }} className="text-2xl" onClick={() => scrollToSection("store")}>
            Store
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            className="fixed inset-0 bg-gradient-to-b from-black to-transparent z-20 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="text-white text-3xl space-y-8 flex flex-col">
              <button onClick={() => scrollToSection("home")}>Home</button>
              <button onClick={() => scrollToSection("newReleases")}>New Releases!</button>
              <button onClick={() => scrollToSection("store")}>Store</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};