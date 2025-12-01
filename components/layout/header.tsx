'use server'

import Link from "next/link";
import Logo from "../core/logo";
import ContactLink from "./contact-link";

export default async function Header() {
  return (
    <header className="absolute w-full pt-[54px] top-0 z-50">
      <div className="wrapper flex items-center justify-between">
        <Logo />
        <ContactBlock
          title="режим работы"
          contact="пн-пт: 10:00-19:00"
          href="/#"
        />
        <ContactBlock
          title="пишите"
          contact="info@pzkgroup.ru"
          href="mailto:info@pzkgroup.ru"
        />
        <ContactBlock
          title="звоните"
          contact="8 (812) 409-30-99"
          href="tel:+78124093099"
        />
        <ContactLink />
      </div>
    </header>
  );
}

function ContactBlock({
  title,
  contact,
  href,
}: {
  title: string;
  contact: string;
  href: string;
}) {
  return (
    <div
      className={`flex flex-col gap-1.5 max-[550px]:gap-1 ${title != "звоните" && "max-md:hidden"}`}
    >
      <span className="text-[#BFBFBF] text-base max-[1100px]:text-xs max-[550px]:text-[10px] font-light">
        {title}
      </span>
      <div className="w-full h-px min-h-px bg-[#BFBFBF]"></div>
      <Link
        href={href}
        className="text-[#BFBFBF] text-base max-[1100px]:text-xs max-[550px]:text-[10px] font-semibold"
      >
        {contact}
      </Link>
    </div>
  );
}
