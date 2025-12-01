'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactLink() {
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (path != window.location.host) setPath(window.location.host)
  }, [path]);

  if (path == 'pzkgroup.ru') {
    return (
      <Link
        href={
          "https://wa.me/79315831722?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D1%80%D0%B8%D1%88%D0%BB%D0%B8%D1%82%D0%B5%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0%20%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3%20%D0%BF%D0%BE%D0%B4%D1%81%D0%B2%D0%B5%D1%82%D0%BA%D0%B8"
        }
        className="flex items-center gap-[11px]"
      >
        <div className="relative w-9 max-[1100px]:w-[30px] max-[550px]:w-[25px] aspect-square">
          <Image src={"/whatsapp-icon.svg"} alt="whatsapp" fill />
        </div>
        <span className="max-w-[149px] max-[1100px]:max-w-[115px] max-[550px]:max-w-[93px] text-[#BFBFBF] text-base max-[1100px]:text-xs max-[550px]:text-[10px] font-bold">
          Получить каталог в WatsApp
        </span>
      </Link>
    )
  }
  else {
    return (
      <Link
        href={
          "https://t.me/m/eIAw9FIUZmZi"
        }
        className="flex items-center gap-[11px]"
      >
        <div className="relative w-[31px] max-[1100px]:w-[25px] max-[550px]:w-5 aspect-square">
          <Image src={"/telegram-icon.svg"} alt="whatsapp" fill />
        </div>
        <span className="max-w-[149px] max-[1100px]:max-w-[115px] max-[550px]:max-w-[93px] text-[#BFBFBF] text-base max-[1100px]:text-xs max-[550px]:text-[10px] font-bold">
          Получить каталог в Telegram
        </span>
      </Link>
    )
  }
}