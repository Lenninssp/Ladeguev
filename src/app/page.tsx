"use client";

import "@animxyz/core";
import { page } from "./types/links";
import { Page } from "../components/page";
import { Navbar } from "@/components/navbar";
import { PageFormatProvider } from "./contexts/format";
import "./styles.css";
import Image from "next/image";

const pages: page[] = [
  {
    title: "Cosmosinfonica",
    subtitle: "DIARY OF A MUSICIAN",
    imageSrc: "./cosmosinfonica.jpeg",
    altText: "Cosmosinfonica",
    pos: "top-[0vh]",
    links: [
      {
        icon: "mdi:spotify",
        name: "Spotify",
        link: "https://open.spotify.com/album/6LpJOVEXKyLpqn4T2M0uLP",
      },
      { icon: "simple-icons:tidal", name: "Tidal", link: "" },
      {
        icon: "simple-icons:youtubemusic",
        name: "Youtube Music",
        link: "https://music.youtube.com/playlist?list=OLAK5uy_kDthP74HY_8ktpacEDz1v9i-R2hFWOcrA",
      },
      {
        icon: "mdi:youtube",
        name: "Youtube",
        link: "https://www.youtube.com/watch?v=zEbjcVbTQHs&list=OLAK5uy_lIDRflT2xh4BrMCroAxzwtTeAWTlLOHa8",
      },
      {
        icon: "simple-icons:applemusic",
        name: "Apple Music",
        link: "https://music.apple.com/nz/album/cosmosinf%C3%B3nica/1733184864",
      },
    ],
  },
  {
    title: "Punch-Bag",
    subtitle: "Dumb depression bitch",
    imageSrc: "./cat.jpeg",
    altText: "Cat",
    pos: "top-[-100vh]",
    links: [
      {
        icon: "mdi:spotify",
        name: "Spotify",
        link: "https://open.spotify.com/album/6LpJOVEXKyLpqn4T2M0uLP",
      },
      { icon: "simple-icons:tidal", name: "Tidal", link: "" },
      {
        icon: "simple-icons:youtubemusic",
        name: "Youtube Music",
        link: "https://music.youtube.com/playlist?list=OLAK5uy_kDthP74HY_8ktpacEDz1v9i-R2hFWOcrA",
      },
      {
        icon: "mdi:youtube",
        name: "Youtube",
        link: "https://www.youtube.com/watch?v=zEbjcVbTQHs&list=OLAK5uy_lIDRflT2xh4BrMCroAxzwtTeAWTlLOHa8",
      },
      {
        icon: "simple-icons:applemusic",
        name: "Apple Music",
        link: "https://music.apple.com/nz/album/cosmosinf%C3%B3nica/1733184864",
      },
    ],
  },
  {
    title: "Store",
    subtitle: "Coming soon",
    imageSrc: "./hoodieBig.jpg",
    altText: "Cat",
    pos: "top-[-200vh]",
    links: [
      {
        icon: "map:grocery-or-supermarket",
        name: "Store",
        link: "/store",
      },
    ],
  },
];

export default function Home() {
  return (
    <PageFormatProvider>
      <Navbar />
      <div>
        <div className="relative h-screen w-screen overflow-hidden ">
          <Image
            src="./cover.webp"
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 100%"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative z-10 h-full w-full p-8 flex flex-col justify-end">
            <h2 className="relative col-span-full col-start-1 max-w-[15ch] text-display-0 uppercase leading-tight text-aqua-green">
              The beginning of my legacy
            </h2>
          </div>
        </div>
        <div>
          {pages.map((page) => (
            <Page key={page.title} {...page} />
          ))}
        </div>
      </div>
    </PageFormatProvider>
  );
}
