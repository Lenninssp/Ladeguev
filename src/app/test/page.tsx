"use client";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Exp = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(false);
  const changeNumber = () => {
    if (number >= 100) {
      setNumber(number - 400);
      return;
    }
    setNumber(number + 400);
  };
  return (
    <div className="h-full w-full bg-red-50 flex items-center justify-center gap-20">
      <motion.button
        className="bg-blue-200 h-20 w-20 "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => changeNumber()}
      />
      <motion.button
        className=" bg-yellow-400 h-20 w-20 rounded-lg"
        whileHover={{rotate: [null, 10, -10]}}
        transition={{}}
        onClick={() => {
          setVisible(!visible);
        }}
      />
      <AnimatePresence>
        {visible && (
          <motion.div
            className="h-32 w-32 rounded-sm bg-green-200"
            initial={{opacity: 0, scale: 0}}
            animate={{ rotate: number, opacity:1, scale:1 }}
            whileHover={{y:[null, -10, 0]}}
            exit={{ scale: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Exp;
