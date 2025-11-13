'use client'

import Image from "next/image";

export default function ScrollFeedbackArrow({dir, elemId}: {dir: 1 | -1, elemId: string}) {
  function handleScrollGallery() {
    const lent = document.getElementById(elemId);
    lent?.scroll({left: lent.scrollLeft + (dir * 400), behavior: 'smooth'});
  }


  return (
    <button onClick={handleScrollGallery} className={`${dir == -1 && 'rotate-180'} w-[53px] aspect-square flex items-center justify-center rounded-full border border-white bg-background`}>
      <Image src={'/arrow-scroll-icon.svg'} alt="arrow" width={26} height={11}/>
    </button>
  )
}