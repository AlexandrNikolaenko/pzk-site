"use client";

import Image from "next/image";
import { useEffect } from "react";
import ScrollArrow from "./scroll-arrow";

export default function Gallery() {
  useEffect(() => {
    const lent = document.getElementById("gallery-lent");
    lent?.scroll({ left: 6910, behavior: "instant" });
  });

  return (
    <>
      <div className="flex gap-0 flex-nowrap h-[460px] w-fit">
        <GalleryImage src={"/portfolio1.jpg"} width={542} />
        <GalleryImage src={"/portfolio2.jpg"} width={345} />
        <GalleryImage src={"/portfolio3.jpg"} width={463} />
        <GalleryImage src={"/portfolio4.jpg"} width={570} />
        <GalleryImage src={"/portfolio5.jpg"} width={360} />
        <GalleryImage src={"/portfolio6.jpg"} width={544} />
        <GalleryImage src={"/portfolio7.jpg"} width={631} />

        <GalleryImage src={"/portfolio1.jpg"} width={542} />
        <GalleryImage src={"/portfolio2.jpg"} width={345} />
        <GalleryImage src={"/portfolio3.jpg"} width={463} />
        <GalleryImage src={"/portfolio4.jpg"} width={570} />
        <GalleryImage src={"/portfolio5.jpg"} width={360} />
        <GalleryImage src={"/portfolio6.jpg"} width={544} />
        <GalleryImage src={"/portfolio7.jpg"} width={631} />

        <GalleryImage src={"/portfolio1.jpg"} width={542} />
        <GalleryImage src={"/portfolio2.jpg"} width={345} />
        <GalleryImage src={"/portfolio3.jpg"} width={463} />
        <GalleryImage src={"/portfolio4.jpg"} width={570} />
        <GalleryImage src={"/portfolio5.jpg"} width={360} />
        <GalleryImage src={"/portfolio6.jpg"} width={544} />
        <GalleryImage src={"/portfolio7.jpg"} width={631} />

        <GalleryImage src={"/portfolio1.jpg"} width={542} />
        <GalleryImage src={"/portfolio2.jpg"} width={345} />
        <GalleryImage src={"/portfolio3.jpg"} width={463} />
        <GalleryImage src={"/portfolio4.jpg"} width={570} />
        <GalleryImage src={"/portfolio5.jpg"} width={360} />
        <GalleryImage src={"/portfolio6.jpg"} width={544} />
        <GalleryImage src={"/portfolio7.jpg"} width={631} />

        <GalleryImage src={"/portfolio1.jpg"} width={542} />
        <GalleryImage src={"/portfolio2.jpg"} width={345} />
        <GalleryImage src={"/portfolio3.jpg"} width={463} />
        <GalleryImage src={"/portfolio4.jpg"} width={570} />
        <GalleryImage src={"/portfolio5.jpg"} width={360} />
        <GalleryImage src={"/portfolio6.jpg"} width={544} />
        <GalleryImage src={"/portfolio7.jpg"} width={631} />
      </div>
      <ScrollArrow dir={-1} elemId="gallery-lent" />
      <ScrollArrow dir={1} elemId="gallery-lent" />
    </>
  );
}

function GalleryImage({ width, src }: { width: number; src: string }) {
  return (
    <div className={`relative h-[460px]`} style={{ width: width + "px" }}>
      <Image alt="project" src={src} fill />
    </div>
  );
}
