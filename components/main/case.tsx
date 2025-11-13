import Image from "next/image"

export default function CaseImage({aspect, id}: {aspect: string, id: number}) {
  return (
    <div className={`relative overflow-hidden`} style={{aspectRatio: aspect}}>
      <Image className="hover:scale-[107%] focus:scale-[107%] active:scale-[107%] " alt={'case'} fill src={'/case' + id + '.jpg'} objectFit="cover"/>
      <span className="absolute top-[13px] left-[17px] w-5 h-5 flex items-center justify-center text-sm text-background bg-accent rounded-full">{id}</span> 
    </div>
  )
}