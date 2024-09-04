"use client";

import "@animxyz/core";
import { page } from "./types/links";
import { Page } from "../components/page";
import { Navbar } from "@/components/navbar";
import { PageFormatProvider } from "./contexts/format";

const pages: page[] = [
  {
    title: "Cosmosinfonica",
    subtitle: "DIARY OF A MUSICIAN",
    imageSrc: "/cosmosinfonica.jpeg",
    altText: "Cosmosinfonica",
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
    imageSrc: "/cat.jpeg",
    altText: "Cat",
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
];

export default function Home() {
  return (
    <PageFormatProvider>
      <div>
        <Navbar />
        {pages.map((page, index) => (
          <Page key={index} {...page} />
        ))}
      </div>
    </PageFormatProvider>
  );
}
