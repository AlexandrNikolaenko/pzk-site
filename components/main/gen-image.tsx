'use client'

import { useRef, useState } from "react"
import Image from "next/image";
import useGenImage, { GenImage } from "@/api/gen-image";

export default function GenImageCard() {
  const [isFile, setIsFile] = useState(false);
  const [fileName, setFileName] = useState<string | undefined>();
  const [src, setSrc] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);
  const {data, generator} = useGenImage({onSuccess, onError});

  console.log(error);
  console.log(src);

  function onSuccess(result: GenImage) {
    setError(false);
    setSrc(result.image.toString());
  }

  function onError(error: object) {
    console.log(error);
    setError(true);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleClickButton(e: any) {
    e.preventDefault();
    if (form.current && isFile) {
      const formData = new FormData(form.current);

      generator(formData);
      
    } else if (!isFile) {
      input.current?.click();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleDropFile(e: any) {
    const files = e.dataTransfer.files;
    if (input.current && files.length){
      input.current.files = files;

      handleChange();
    }
  }

  function handleChange() {
    if (input.current?.value) {
      setIsFile(true);
      setFileName(input.current?.files?.item(0)?.name)
      if (id.current) {
        id.current.value = btoa(Date.now().toString());
      }
    } else {
      setFileName(undefined);
      setIsFile(false);
    }
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
    <div onDrop={handleDropFile} className="w-full max-w-[764px] max-lg:max-w-[601px] grid grid-cols-2 max-md:flex max-md:flex-col-reverse gap-[30px] max-lg:gap-6 max-md:gap-5 py-[42px] max-lg:py-[33px] max-md:py-[31px] px-10 max-lg:px-[31px] max-md:px-[35px] bg-[#D9D9D9] rounded-2xl max-lg:rounded-[14px] max-md:rounded-xl">
      <form ref={form} className="w-full relative flex justify-end flex-col gap-[148px] max-lg:gap-[117px] px-[22px] py-[21px] max-lg:p-[17px] max-md:p-0 items-center rounded-2xl max-lg:rounded-[14px] max-md:rounded-xl bg-[#B6B6B6] max-md:bg-transparent">
        <input ref={id} name="imageId" id="imageId" className="hidden absolute" defaultValue={''}/>
        <input ref={input} onChange={handleChange} className="absolute w-full h-full z-0 opacity-0" type="file" id="file" name={'file'} accept="image/jpeg"/>
        <div className="flex flex-col gap-[13px] max-lg:gap-2.5 items-center max-md:hidden">
          <div className="relative aspect-square w-[35px] max-lg:w-[27px]">
            <Image alt="choose photo" src={'/choose-image-icon.svg'} fill/>
          </div>
          <span className="text-xs leading-[115.1%] tracking-[-.02em] text-[#747474]">{fileName ? fileName : 'Перетащите или загрузите фото'}</span>
        </div>
        <button disabled={data.isPending} onClick={handleClickButton} className="w-full py-3.5 relative text-[#D9D9D9] text-base leading-[115.1%] tracking-[-.02em] bg-background disabled:opacity-50 rounded-full">
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

  if (src) {
    return (
      <div className="w-full aspect-344/420 max-md:aspect-310/333 relative overflow-hidden rounded-2xl max-lg:rounded-[14px] max-md:rounded-xl">
        <Image src={src} alt="Your light house" fill objectFit="cover"/>
      </div>
    )
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