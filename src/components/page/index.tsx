import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import "@animxyz/core";
import {  XyzTransitionGroup } from "@animxyz/react";
import { useState } from "react";
import { link } from "../../app/types/links";
import { cn } from "@/lib/utils";

type PageProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
  pos: string;
  links: link[];
  id?: string
};
export function Page({
  title,
  subtitle,
  imageSrc,
  altText,
  pos,
  links,
  id = "",
}: Readonly<PageProps>) {
  const [on, setOn] = useState(false);
  return (
    <div className="sticky top-0 h-screen contain-paint" id={id}>
      <div
        className={cn(
          " h-[300vh] absolute left-0 right-0 top-0 z-20  w-full ",
          pos
        )}
      >
        <div className="section-padding grid-gap  sticky top-0 flex h-screen grid-cols-12 flex-col justify-center  gap-y-fluid-sm md:grid md:place-items-center md:items-center">
          <div className="md:col-span-4 text-center mt-4 md:mt-0">
            <h2 className="text-2xl md:text-4xl lg:text-6xl text-alg font-bold tracking-tight">
              {title}
            </h2>
          </div>
          <div className="md:col-span-4 w-full max-w-md mx-auto">
            <div className="relative aspect-square rounded-xl overflow-hidden mx-4 md:mx-0">
              <button
                className="relative group"
                onMouseEnter={() => setOn(true)}
                onMouseLeave={() => setOn(false)}
              >
                <Image
                  src={imageSrc}
                  alt={altText}
                  width={1600}
                  height={1600}
                  className="w-full h-auto "
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  {links.map((link) => (
                    <div
                      key={link.name}
                      className="flex h-5/6 w-9/12 justify-center items-center gap-10"
                    >
                      <Link
                        href={link.link}
                        className="flex h-full justify-start items-center gap-10"
                        target="_blank"
                      >
                        <XyzTransitionGroup
                          className="flex h-full justify-center items-center gap-10"
                          xyz="duration-6 short-100% wide-25%"
                        >
                          {on && (
                            <Icon
                              icon={link.icon}
                              className={cn(
                                "xl:h-14 xl:w-14 text-white h-8 w-8"
                              )}
                            />
                          )}
                          {on && (
                            <div className="text-lg md:text-xl text-white">
                              {link.name}
                            </div>
                          )}
                        </XyzTransitionGroup>
                      </Link>
                    </div>
                  ))}
                </div>
              </button>
            </div>
          </div>
          <div className="md:col-span-4 text-center mt-4 md:mt-0">
            <h2 className="text-2xl md:text-4xl lg:text-6xl text-alg font-bold tracking-tight">
              {subtitle}
            </h2>
          </div>
        </div>
      </div>
      <div className=" pointer-events-none absolute left-0 top-0 z-30 h-screen w-full animate-pan-overlay opacity-5"></div>
      <div className="relative h-fit w-full">
        <Image
          src={imageSrc}
          alt="Background"
          className="absolute h-screen w-screen object-cover "
          width={1600}
          height={1600}
          
        />
        <div className="top absolute left-0 top-0 z-10 h-screen w-screen bg-gradient-to-t from-black"></div>
      </div>
    </div>
  );
}
