import { useState } from "react";

export const Navbar = () => {
  const [on, setOn] = useState(false);

  return (
    <div className=" px-[4%] fixed z-[123] w-full py-10 ">
      <div className=" w-full grid-cols-12 items-center justify-between gap-x-10 sm:items-start lg:grid">
        <div className="col-span-3 text-4xl text-alg">
          Alejandro Ladeguev
        </div>
        <div className="col-span-3 text-2xl text-alg">link 1</div>
        <div className="col-span-3 text-2xl text-alg">link 2</div>
        <div className="col-span-3 text-2xl text-alg">link 2</div>
      </div>
    </div>
  );
};
