"use client";

import LoaderComponent from "@/components/loader";



export default function Loading() {
  return (
    <div className="flex h-screen w-screen flex-1 flex-col items-center justify-center gap-4">
      <LoaderComponent />
    </div>
  );
}
