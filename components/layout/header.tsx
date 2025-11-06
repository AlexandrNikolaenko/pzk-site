import Link from "next/link"
import Logo from "../core/logo"
import Image from "next/image"

export default function Header() {
  return (
    <header className="absolute w-full pt-[54px] top-0 z-50">
      <div className="wrapper flex items-center justify-between">
        <Logo />
        <ContactBlock title="режим работы" contact="пн-пт: 10:00-19:00" href="/#"/>
        <ContactBlock title="пишите" contact="info@pzkgroup.ru" href="mailto:info@pzkgroup.ru"/>
        <ContactBlock title="звоните" contact="8 (812) 409-30-99" href="tel:+78124093099"/>
        <Link href={'/#form'} className="flex items-center gap-[11px]">
        <div className="relative w-9 max-[1100px]:w-[30px] max-[550px]:w-[25px] aspect-square">
          <Image src={'/whatsapp-icon.svg'} alt="whatsapp" fill/>
        </div>
          <span className="max-w-[149px] max-[1100px]:max-w-[115px] max-[550px]:max-w-[93px] text-[#BFBFBF] text-base max-[1100px]:text-xs max-[550px]:text-[10px] font-bold">Получить каталог в WatsApp</span>
        </Link>
      </div>
    </header>
  )
}

function ContactBlock({title, contact, href}: {title: string, contact: string, href: string}) {
  return (
    <div className={`flex flex-col gap-1.5 max-[550px]:gap-1 ${title != 'звоните' && 'max-md:hidden'}`}>
      <span className="text-[#BFBFBF] text-base max-[1100px]:text-xs max-[550px]:text-[10px] font-light">{title}</span>
      <div className="w-full h-px min-h-px bg-[#BFBFBF]"></div>
      <Link href={href} className="text-[#BFBFBF] text-base max-[1100px]:text-xs max-[550px]:text-[10px] font-semibold">{contact}</Link>
    </div>
  )
}