import Image from "next/image"

export default function CaseImage({aspect, id}: {aspect: string, id: number}) {
  return (
    <div className={`relative`} style={{aspectRatio: aspect}}>
      <Image alt={'case'} fill src={'/case' + id + '.jpg'}/>
      <span className="absolute top-[13px] left-[17px] w-5 h-5 flex items-center justify-center text-sm text-background bg-accent rounded-full">{id}</span> 
    </div>
  )
}