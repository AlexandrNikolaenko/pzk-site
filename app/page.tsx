import AccentButton from "@/components/button/accent-button";
import Gallery from "@/components/main/gallery-image";
import ScrollArrow from "@/components/main/scroll-arrow";
import ServiceCard from "@/components/main/service-card";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <section className="h-screen w-full relative z-0">
      <div className="wrapper pt-[217px] max-[1100px]:pt-[178px] max-[550px]:pt-[155px]">
        <div className="flex flex-col gap-5">
          <h1 className="max-w-[977px] text-[44px] max-[1100px]:text-[36px] max-[550px]:text-[28px] text-white font-light leading-[115.1%] tracking-[-.02em]">Мы превращаем дома в сияющие пространства, где живёт праздник</h1>
          <p className="max-w-[550px] text-2xl max-[550px]:text-base text-[#DADADA] font-light leading-[115.1%] tracking-[-.02em]">
            Профессиональная праздничная и контурная подсветка загородных домов <br/>
— без хлопот и суеты
          </p>
          <AccentButton >Заказать</AccentButton>
        </div>
      </div>
      <div className="absolute h-[234px] w-full bottom-0 bg-linear-to-b from-transparent to-background">
      </div>
    </section>
    <section id="service" className="wrapper flex flex-col gap-[61px] pt-[81px] pb-28 max-[1100px]:pb-[76px] max-md:pb-[34px]">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-5 w-full max-w-[868px]">
          <h2 className="text-[36px] text-white font-light leading-[115.1%] tracking-[-.02em]">Подсветим все!</h2>
          <p className="text-2xl text-[#DADADA] font-normal leading-[115.1%] tracking-[-.02em]">Мы создаём освещение для домов, террас, деревьев, беседок и фасадов — любой сложности и архитектуры.</p>
        </div>
        <Image src={'/lamp-icon.svg'} alt="light" width={41} height={41}/>
      </div>
      <div className="flex flex-nowrap max-md:flex-col gap-4 max-md:gap-5 items-center">
        <ServiceCard title="Коммерческие объекты" body="Рестораны, кафе и кофейни, отели и бутик-гостиницы, загородные клубы, глэмпинги, базы отдыха и коттеджные посёлки"/>
        <ServiceCard title="Частные дома" body="Классические загородные коттеджи, современные дома, таунхаусы, дачи и небольшие загородные дома"/>
        <ServiceCard title="Экстерьер" body="Веранды, беседки, бани, деревья, фасады, входные зоны и прочее"/>
      </div>
    </section>
    <section id="gallery" className="relative">
      <div id="gallery-lent" className=" max-w-[100vw] overflow-x-scroll">
        <Gallery />
        
        <ScrollArrow dir={-1} />
        <ScrollArrow dir={1} />
      </div>
    </section>
   </main>
  );
}
