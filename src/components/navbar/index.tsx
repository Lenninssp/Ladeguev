import { usePageFormat } from "@/app/contexts/format";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const {isMobile} = usePageFormat();
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="px-[4%] fixed z-[123] w-full py-10 overflow-hidden">
      <div className="w-full flex items-center justify-between">
        <div className={cn("text-4xl text-alg hidden sm:flex")}>Alejandro Ladeguev</div>
        {isMobile ? (
          <div className="relative w-full flex flex-col items-end">
            <button onClick={toggleMenu} className="text-3xl text-yellow-500 bg-alg rounded-full h-10 w-10">
              ☰
            </button>
            {menuOpen && (
              <div className="absolute¬ mt-10 h-fit bg-white shadow-md rounded-md">
                <div className="py-2 px-4 text-2xl text-alg">link 1</div>
                <div className="py-2 px-4 text-2xl text-alg">link 2</div>
                <div className="py-2 px-4 text-2xl text-alg">link 3</div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-8">
            <div className="text-2xl text-alg">link 1</div>
            <div className="text-2xl text-alg">link 2</div>
            <div className="text-2xl text-alg">link 3</div>
          </div>
        )}
      </div>
    </div>
  );
};