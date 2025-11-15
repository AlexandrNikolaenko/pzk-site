"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type Person = {
  id: number;
  image: string;
  name: string;
  position: string;
  interest: string;
};

export default function PersonCard({
  id,
  image,
  name,
  position,
  interest,
}: Person) {
  const link = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (link.current) {
      link.current
        .querySelectorAll("p, h1, h2, h3, h4, h5, h6")
        .forEach((el) => {
          el.innerHTML = el.innerHTML.replace(
            /(\s|^)(в|и|к|с|у|о|а|я|но|на|по|из|от|до|за|без|при|об)\s/gi,
            "$1$2\u00A0",
          );
        });
    }
  });

  return (
    <li ref={link} className={"number-" + (id % 10)}>
      <div className="w-full aspect-296/400 relative rounded-2xl overflow-hidden">
        <Image src={image} alt="name" fill />
      </div>
      <p className="mt-[22px] max-lg:mt-[13px] max-md:mt-3 text-2xl max-lg:text-sm max-md:text-base font-bold text-[#DADADA] leading-[115.1%] tracking-[-.02em]">
        {name}
      </p>
      <p className="mt-2 max-lg:mt-1.5 max-md:mt-1 text-base max-lg:text-[10px] max-md:text-xs font-light text-[#DADADA] leading-[115.1%] tracking-[-.02em]">
        — {position}
      </p>
      <p className="mt-10 max-lg:mt-[23px] max-md:mt-4 text-base max-lg:text-[10px] max-md:text-xs italic font-light text-[#7D7D7D] leading-[115.1%] tracking-[-.02em]">
        {interest}
      </p>
    </li>
  );
}
