'use client'

import { ReactNode } from "react";

export default function AccentButton({onClick=() => {}, children}: {onClick?: () => void, children: ReactNode}) {
  return (
    <button onClick={onClick} className="py-4 px-[60px] rounded-full bg-accent text-background w-fit text-2xl leading-[115.1%] tracking-[.02em]">
      {children}
    </button>
  )
}