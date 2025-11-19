'use client'

import { useRef, useState } from "react"
import Image from "next/image";
import useGenImage, { GenImage } from "@/api/gen-image";

export default function GenImageCard() {
  const [isFile, setIsFile] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const {data, generator} = useGenImage({onSuccess, onError});

  console.log(error);

  function onSuccess(result: GenImage) {
    setError(false);
    setSrc(result.image)
  }

  function onError(error: object) {
    console.log(error);
    setError(true);
  }

  function handleClickButton() {
    if (form.current && isFile) {
      const formData = new FormData(form.current);
      formData.append('imageId', btoa(Date.now().toString()));

      generator(formData);
      
    } else if (!isFile) {
      input.current?.click();
    }
  }

  function handleChange() {
    if (!isFile && input.current?.value) setIsFile(true);
  }

  function buttonMessage() {
    if (data.isPending) {
      return 'Генерация...'
    } else if (isFile) {
      return 'Отправить'
    } else {
      return 'Выбрать фото'
    }
  }

  return (
    <div className="w-full max-w-[764px] max-lg:max-w-[601px] grid grid-cols-2 max-md:flex max-md:flex-col-reverse gap-[30px] max-lg:gap-6 max-md:gap-5 py-[42px] max-lg:py-[33px] max-md:py-[31px] px-10 max-lg:px-[31px] max-md:px-[35px] bg-[#D9D9D9] rounded-2xl max-lg:rounded-[14px] max-md:rounded-xl">
      <form ref={form} className="w-full relative flex justify-end flex-col gap-[148px] max-lg:gap-[117px] px-[22px] py-[21px] max-lg:p-[17px] max-md:p-0 items-center rounded-2xl max-lg:rounded-[14px] max-md:rounded-xl bg-[#B6B6B6] max-md:bg-transparent">
        <input ref={input} onChange={handleChange} className="absolute w-full h-full" type="file" id="file" name={'file'} accept="image/jpeg"/>
        <div className="flex flex-col gap-[13px] max-lg:gap-2.5 items-center max-md:hidden">
          <div className="relative aspect-square w-[35px] max-lg:w-[27px]">
            <Image alt="choose photo" src={'/choose-image-icon.svg'} fill/>
          </div>
          <span className="text-xs leading-[115.1%] tracking-[-.02em] text-[#747474]">Перетащите или загрузите фото</span>
        </div>
        <button disabled={data.isPending} onClick={handleClickButton} className="w-full py-3.5 realtive text-[#D9D9D9] text-base leading-[115.1%] tracking-[-.02em] bg-background disabled:opacity-50 rounded-full">
          {
            buttonMessage()
          }
        </button>
      </form>
      <ChangerPic src={src}/>
    </div>
  )
}

function ChangerPic({src}: {src: string | null}) {
  const [chooseItem, setChooseItem] = useState<number>(1);

  function handleChooseNewItem(id: number) {
    setChooseItem(id);
  }

  const items = Array.from({length: 4}, (_, i) => i + 1);
  console.log(items);

  if (src) {
    <div className="w-full relative ">

    </div>
  }

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="aspect-310/333 w-full relative rounded-2xl max-lg:rounded-xl max-md:rounded-2xl overflow-hidden">
        <Image src={'/choose-image' + chooseItem + '.jpg'} alt="" fill/>
      </div>
      <div className="flex gap-2 max-md:hidden">
        {
          items.map((item) => (
            <button key={item} onClick={() => handleChooseNewItem(item)} className={`aspect-square w-16 max-lg:w-[50px] relative overflow-hidden rounded-lg ${chooseItem == item && 'outline-2 outline-background outline-offset-1'}`}>
              <Image src={'/choose-image' + item + '.jpg'} alt="" fill/>
            </button>
          ))
        }
      </div>
    </div>
  )
}