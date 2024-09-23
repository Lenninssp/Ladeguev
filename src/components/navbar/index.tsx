import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
      <div className={cn(
        "fixed z-30 w-full transition-all duration-300",
        menuOpen ? "h-screen" : "h-auto pointer-events-none"
      )}>
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
            <div className="text-2xl text-alg">Home</div>
            <div className="text-2xl text-alg">New Relesases!</div>
            <div className="text-2xl text-alg">Store</div>
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
              <nav className="text-white text-3xl space-y-8">
                <div>Home</div>
                <div>New Release!</div>
                <div>Store</div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    
  );
};