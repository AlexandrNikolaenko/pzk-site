export default function StepPoint({id, body}: {id: number, body: string}) {
  return (
    <li className="flex flex-col gap-3.5 items-center max-w-[164px] max-lg:md:max-w-[100px]">
      <span className="font-extralight text-[32px] max-lg:md:text-xl leading-[115.1%] tracking-[-.02em]">0{id}</span>
      <p className="text-center text-xl max-lg:md:text-sm leading-[115.1%] tracking-[-.02em]">
        {body}
      </p>
    </li>
  )
}