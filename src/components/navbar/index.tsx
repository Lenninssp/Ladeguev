import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    }
  };

  return (
    <div
      className={cn(
        "fixed z-30 w-full transition-all duration-300",
        menuOpen ? "h-screen" : "h-auto pointer-events-none"
      )}
    >
      <div className="px-[4%] py-10 w-full flex items-start justify-between pointer-events-auto">
        <div className="z-30 text-2xl md:text-4xl font-bold text-alg mt-">
          Alejandro Ladeguev
        </div>

        <div className="relative md:hidden z-30">
          <button
            onClick={toggleMenu}
            className="z-40 text-yellow-500 bg-alg rounded-full h-10 w-10 flex items-center justify-center"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-8">
          <button
            className="text-2xl text-alg"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          <button
            className="text-2xl text-alg"
            onClick={() => scrollToSection("newReleases")}
          >
            New Releases!
          </button>
          <button
            className="text-2xl text-alg"
            onClick={() => scrollToSection("store")}
          >
            Store
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-black  to-transparent z-20 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
          >
            <nav className="text-white text-3xl space-y-8 flex flex-col">
              <button
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("newReleases")}
              >
                New Releases!
              </button>
              <button
                onClick={() => scrollToSection("store")}
              >
                Store
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
