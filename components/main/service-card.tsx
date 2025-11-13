export default function ServiceCard({title, body}: {title: string, body:string}) {
  return (
    <div className="relative h-[200px] min-h-[125px] max-[1200px]:h-[125px] max-md:h-auto max-md:px-4 w-full rounded-2xl bg-secondapy py-[37px] max-[1200px]:p-[22px] max-md:py-11 flex flex-col gap-3 max-[1200px]:md:gap-1.5 items-center">
      <h4 className="text-center text-nowrap max-[440px]:text-wrap text-[#DADADA] text-[28px] max-[1200px]:text-base max-md:text-2xl font-semibold max-md:font-normal leading-[115%] tracking-[-.02em]">{title}</h4>
      <p className="max-w-[306px] text-center text-[#DADADA] text-[18px] max-[1200px]:md:text-xs font-extralight  leading-[115%] tracking-[-.02em]">{body}</p>
      <svg className="absolute -bottom-5 left-[50%] translate-x-[-50%]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#E3B54B"/>
      </svg>
    </div>
  )
}