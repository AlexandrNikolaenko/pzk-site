'use client'

import { ComponentProps } from "react";

export default function AccentButton(props: ComponentProps<'button'>) {
  return (
    <button {...props} className="py-4 px-[30px] max-md:py-[9px] max-md:px-5 rounded-full bg-accent text-[#020405] w-fit text-xl max-md:text-base leading-[115.1%] tracking-[.02em] disabled:text-[#797979] disabled:bg-[#000A1F] disabled:outline-none hover:bg-[#E7E7E7] active:bg-accent outline-accent outline-[3px] outline-offset-[-3px]">
      {props.children}
    </button>
  )
}