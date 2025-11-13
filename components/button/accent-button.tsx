'use client'

import { ReactNode } from "react";

export default function AccentButton({onClick=() => {}, children}: {onClick?: () => void, children: ReactNode}) {
  return (
    <button onClick={onClick} className="py-4 px-[30px] max-md:py-[9px] max-md:px-5 rounded-full bg-accent text-background w-fit text-xl max-md:text-base leading-[115.1%] tracking-[.02em]">
      {children}
    </button>
  )
}