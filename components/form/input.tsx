import { ComponentProps } from "react";


export default function InputField(props: ComponentProps<'input'>) {
  return (
    <input {...props} autoComplete='on' className="py-[18px] px-[30px] max-md:py-[11px] max-md:px-[19px] bg-[#B6B6B6] placeholder:text-[#7A7A7A] placeholder:text-xl placeholder:max-md:text-xs placeholder:leading-[115.1%] placeholder:tracking-[-.02em] rounded-full w-full" />
  )
}