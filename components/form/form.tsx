'use client'

import AccentButton from "../button/accent-button"
import InputField from "./input"

export default function Form() {
  return (
    <form className="pt-16 max-md:pt-10 pb-[52px] px-[86px] max-md:px-[52px] max-md:pb-8 w-full max-w-[560px] max-md:max-w-[346px] flex flex-col gap-12 max-md:gap-7 items-center bg-[#D9D9D9] rounded-2xl max-md:rounded-[10px]">
      <div className="flex flex-col gap-3 max-md:gap-2 items-center">
        <h3 className="text-background text-[40px] max-md:text-2xl leading-[115.1%] tracking-[-.02em]">Оставьте заявку</h3>
        <p className="text-background font-light text-base max-md:text-[10px] leading-[115.1%] tracking-[-.02em]">И наш менеджер свяжится с Вами<br />
для обсуждения любого вопроса </p>
      </div>
      <div className="flex flex-col gap-3 max-md:gap-2 items-center w-full">
        <InputField name="name" placeholder="Имя"/>
        <InputField name="phone" placeholder="Телефон" type="tel"/>
      </div>
      <AccentButton >Отправить</AccentButton>
    </form>
  )
}