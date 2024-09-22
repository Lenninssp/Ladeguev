"use client";
import "../styles.css";

const Exp = () => {
  return (
    <div className="h-screen w-screen">
      <div className="sticky top-0 h-screen contain-paint ">
        <div className=" h-[300vh] absolute left-0 right-0 top-0 z-20  w-full font-nippo  text-lemon bg-red-200">
          <div className=" section-padding grid-gap  sticky top-0 flex h-screen grid-cols-12 flex-col justify-center  gap-y-fluid-sm md:grid md:place-items-center md:items-center">
            <span className="col-span-4 flex text-heading-sm tracking-heading">
              <span>Text 1</span>
            </span>
          </div>
        </div>
      </div>
      <div className="sticky top-0 h-screen contain-paint ">
        <div className=" h-[300vh] top-[-100vh] absolute left-0 right-0  z-20  w-full font-nippo  text-lemon bg-blue-200">
          <div className=" section-padding grid-gap  sticky top-0 flex h-screen grid-cols-12 flex-col justify-center  gap-y-fluid-sm md:grid md:place-items-center md:items-center">
            <span className="col-span-4 flex text-heading-sm tracking-heading">
              <span>Text 2</span>
            </span>
          </div>
        </div>
      </div>
      <div className="sticky top-0 h-screen contain-paint ">
        <div className=" h-[300vh] top-[-200vh] absolute left-0 right-0 z-20  w-full font-nippo  text-lemon bg-green-200">
          <div className=" section-padding grid-gap  sticky top-0 flex h-screen grid-cols-12 flex-col justify-center  gap-y-fluid-sm md:grid md:place-items-center md:items-center">
            <span className="col-span-4 flex text-heading-sm tracking-heading">
              <span>Text 3</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
