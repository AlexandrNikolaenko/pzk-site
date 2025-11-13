'use client'

import AccentButton from "../button/accent-button"
import InputField from "./input"
import addLead, { ErrorLead } from "@/api/add-lead"
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const signupSchema = z.object({
  name: z.string(),
  phone: z.string(),
});

export default function Form() {
  const [formError, setFormError] = useState<{fields: {name: boolean, phone: boolean}, message: string}>({fields: {name: false, phone: false}, message: ""});
  const [queryState, setQueryState] = useState<'INIT' | 'PENDING' | 'SUCCESS'>('INIT');
  const [buttonMessage, setButtonMessage] = useState<'Отправляем...' | 'Отправлено' | 'Отправить'>('Отправить');

  function handleSuccess() {
    setQueryState('SUCCESS');
    setButtonMessage("Отправлено")
    setFormError({fields: {name: false, phone: false}, message: ""});
    setTimeout(() => {
      setButtonMessage("Отправить");
    }, 2000)
  }

  function handleError(error: ErrorLead) {
    console.log(error);
    setFormError(error);
    setButtonMessage("Отправить");
    setQueryState('INIT');
  }

  function onSubmit(values: {
    name: string,
    phone: string,
  }) {
    setQueryState('PENDING');
    setButtonMessage('Отправляем...')
    addLead({body: values, onSuccess: handleSuccess, onError: handleError});
  }

  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      phone: ''
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-16 max-md:pt-10 pb-[52px] px-[86px] max-md:px-[52px] max-md:pb-8 w-full max-w-[560px] max-md:max-w-[346px] flex flex-col gap-12 max-md:gap-7 items-center bg-[#D9D9D9] rounded-2xl max-md:rounded-[10px]">
      <div className="flex flex-col gap-3 max-md:gap-2 items-center">
        <h3 className="text-background text-[40px] max-md:text-2xl leading-[115.1%] tracking-[-.02em]">Оставьте заявку</h3>
        <p className="text-background font-light text-base max-md:text-[10px] leading-[115.1%] tracking-[-.02em]">И&nbsp;наш менеджер свяжится с&nbsp;Вами<br />
для&nbsp;обсуждения любого вопроса </p>
      </div>
      <div className="flex flex-col gap-3 max-md:gap-2 items-center w-full">
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <InputField {...field} isError={Boolean(errors.name) || formError.fields.name} placeholder="Имя"/>
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <InputField {...field} isError={Boolean(errors.name) || formError.fields.phone} placeholder="Телефон" type="tel"/>
          )}
        />
      </div>
      {
        formError.message == ''
        ? <></>
        : 
        <span className="text-[#69491F] my-[-27px] max-md:-my-2.5 text-xl max-md:text-xs leading-[95%] tracking-[-.04em] text-center text-nowrap">
          *{formError.message}
        </span>
      }
      <AccentButton disabled={queryState == "PENDING"}>{buttonMessage}</AccentButton>
    </form>
  )
}