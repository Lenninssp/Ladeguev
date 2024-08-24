import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import "@animxyz/core";
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";
import { useState } from "react";
import { link } from "../../app/types/links";

type PageProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
  links: link[];
};

export function Page({ title, subtitle, imageSrc, altText, links }: PageProps) {
  const [on, setOn] = useState(false);

  return (
    <div className="sticky top-0 h-screen contain-paint">
      <div className="absolute left-0 right-0 top-0 z-20 w-full">
        <div className="section-padding grid-gap sticky top-0 flex h-screen grid-cols-12 flex-col justify-center gap-y-fluid-sm md:grid md:place-items-center md:items-center">
          <div className="col-span-4 flex text-heading-sm tracking-heading justify-center items-center text-6xl text-yellow-500">
            {title}
          </div>
          <div className="group relative col-span-4 flex aspect-square w-full items-center justify-center overflow-clip rounded-xl">
            <button
              className="relative group"
              onMouseEnter={() => setOn(true)}
              onMouseLeave={() => setOn(false)}
            >
              <Image
                src={imageSrc}
                alt={altText}
                width={500}
                height={500}
                sizes="100vw"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-10">
                {links.map((link) => (
                  <div
                    key={link.name}
                    className="flex h-full w-9/12 justify-center items-center gap-10"
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
                            className="h-14 w-14 text-white"
                          />
                        )}
                        {on && (
                          <div className="text-xl text-white">{link.name}</div>
                        )}
                      </XyzTransitionGroup>
                    </Link>
                  </div>
                ))}
              </div>
            </button>
          </div>
          <div className="col-span-4 flex text-heading-sm tracking-heading justify-center items-center text-6xl text-yellow-500">
            {subtitle}
          </div>
        </div>
      </div>
      <div className="custom-gradient pointer-events-none absolute left-0 top-0 z-30 h-screen w-full animate-pan-overlay opacity-5"></div>
      <div className="relative h-fit w-full">
        <Image
          src={imageSrc}
          alt="Background"
          style={{ objectFit: "cover" }}
          className="absolute h-screen w-full object-cover"
          width={1600}
          height={1600}
        />
        <div className="top absolute left-0 top-0 z-10 h-screen w-screen bg-gradient-to-t from-black"></div>
      </div>
    </div>
  );
}
