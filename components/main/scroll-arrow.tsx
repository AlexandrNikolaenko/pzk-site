"use client";

import Image from "next/image";

export default function ScrollArrow({
  dir,
  elemId,
}: {
  dir: 1 | -1;
  elemId: string;
}) {
  function handleScrollGallery() {
    const lent = document.getElementById(elemId);

    if (lent && lent.scrollLeft > 3455 * 3) {
      lent?.scroll({ left: lent.scrollLeft - 3455, behavior: "instant" });
    } else if (lent && lent.scrollLeft < 3455 * 2) {
      lent?.scroll({ left: lent.scrollLeft + 3455, behavior: "instant" });
    }
    lent?.scroll({ left: lent.scrollLeft + dir * 400, behavior: "smooth" });
  }

  return (
    <button
      onClick={handleScrollGallery}
      className={`${dir == -1 ? "rotate-180 left-[104px] max-[1350px]:left-[46px] max-[550px]:left-[30px]" : "right-[104px] max-[1350px]:right-[46px] max-[550px]:right-[30px]"} top-[203px] max-xl:top-[520px] absolute w-[53px] aspect-square flex items-center justify-center rounded-full border border-white bg-background`}
    >
      <Image
        src={"/arrow-scroll-icon.svg"}
        alt="arrow"
        width={26}
        height={11}
      />
    </button>
  );
}
