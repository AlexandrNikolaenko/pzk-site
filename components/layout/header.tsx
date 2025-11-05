import Link from "next/link"
import Logo from "../core/logo"
import Image from "next/image"

export default function Header() {
  return (
    <header className="absolute w-full pt-[54px] top-0">
      <div className="wrapper flex items-center justify-between">
        <Logo />
        <ContactBlock title="режим работы" contact="пн-пт: 10:00-19:00" href="/#"/>
        <ContactBlock title="пишите" contact="info@pzkgroup.ru" href="mailto:info@pzkgroup.ru"/>
        <ContactBlock title="звоните" contact="8 (812) 409-30-99" href="tel:+78124093099"/>
        <Link href={'/#form'} className="flex items-center gap-[11px]">
          <Image src={'/whatsapp-icon.svg'} alt="whatsapp" width={36} height={36}/>
          <span className="max-w-[149px] text-[#BFBFBF] text-base font-bold">Получить каталог в WatsApp</span>
        </Link>
      </div>
    </header>
  )
}

function ContactBlock({title, contact, href}: {title: string, contact: string, href: string}) {
  return (
    <div className="flex flex-col gap-1.5 ">
      <span className="text-[#BFBFBF] text-base font-light">{title}</span>
      <div className="w-full h-px min-h-px bg-[#BFBFBF]"></div>
      <Link href={href} className="text-[#BFBFBF] text-base font-semibold">{contact}</Link>
    </div>
  )
}