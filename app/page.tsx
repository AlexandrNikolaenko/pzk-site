import AccentButton from "@/components/button/accent-button";
import Gallery from "@/components/main/gallery-image";
import ScrollArrow from "@/components/main/scroll-arrow";
import ServiceCard from "@/components/main/service-card";
import Image from "next/image";
import Link from "next/link";

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
    <section id="gallery" className="relative pb-0 max-xl:pb-[113px]">
      <div id="gallery-lent" className=" max-w-[100vw] overflow-x-scroll">
        <Gallery />
        
        <ScrollArrow dir={-1} />
        <ScrollArrow dir={1} />
      </div>
    </section>
    <section id="goal" className="wrapper flex justify-center py-[53px]">
      <h2 className="text-[#DADADA] text-[24px] text-center leading-[115.1%] tracking-[-.02em] max-lg:max-w-[459px]">
        Наша цель —  подарить своим клиентам незабываемую атмосферу праздника.
      </h2>
    </section>
    <section id="advantages" className="relative w-full">
      <div className="wrapper max-[1100px]:relative flex max-md:flex-col gap-[60px]">
        <div className="relative min-w-[544px] max-w-[544px] max-xl:w-full max-xl:min-w-0 max-xl:max-w-none h-[620px] max-xl:h-auto max-md:aspect-380/430">
          <Image src={'/advantages-fon.jpg'} alt="fon" fill objectFit="cover"/>  
        </div>
        <div className="pt-[89px] max-xl:pt-0 grid grid-cols-2 w-full max-xl:grid-cols-1 gap-[70px] max-[1440px]:gap-9">
          <div className="flex flex-col max-md:items-center gap-[18px] h-fit">
            <span className="flex items-center gap-5 text-[#545454] text-[28px] leading-[115.1%] tracking-[-.02em]">
              <Image src={'/quality-icon.svg'} width={36} height={36} alt="quality"/>
              Качество
            </span>
            <p className="text-[#DADADA] text-xl leading-[115.1%] tracking-[-.02em] max-xl:text-base max-md:text-center">
              Все используемое светодиодное оборудование влагозащищено <br/>
и имеет соответствующие <Link href={'/#'} className="underline">сертификаты</Link>.
            </p>
          </div>
          <div className="flex flex-col max-md:items-center gap-[18px] h-fit">
            <span className="flex items-center gap-5 text-[#545454] text-[28px] leading-[115.1%] tracking-[-.02em]">
              <Image src={'/timeout-icon.svg'} width={36} height={36} alt="timeout"/>
              Сроки
            </span>
            <p className="text-[#DADADA] text-xl leading-[115.1%] tracking-[-.02em] max-xl:text-base max-md:text-center">
              Выезд на монтаж возможен <br/>
на следующий день после подписания договора. В среднем один дом украшается за 1 день.
            </p>
          </div>
          <div className="flex flex-col max-md:items-center gap-[18px] h-fit">
            <span className="flex items-center gap-5 text-[#545454] text-[28px] leading-[115.1%] tracking-[-.02em]">
              <Image src={'/price-icon.svg'} width={43} height={43} alt="price"/>
              Цена
            </span>
            <p className="text-[#DADADA] text-xl leading-[115.1%] tracking-[-.02em] max-xl:text-base max-md:text-center">
              Мы никогда не гонимся <br/>
за низкой ценой в ущерб качеству и безопасности. Если мы можем сделать более экономичным решение без потери качества - всегда говорим об этом нашим клиентам.
            </p>
          </div>
          <div className="flex flex-col max-md:items-center gap-[18px] h-fit">
            <span className="flex items-center gap-5 text-[#545454] text-[28px] leading-[115.1%] tracking-[-.02em]">
              <Image src={'/prof-icon.svg'} width={41} height={41} alt="proffecional"/>
              Профессионализм
            </span>
            <p className="text-[#DADADA] text-xl leading-[115.1%] tracking-[-.02em] max-xl:text-base max-md:text-center">
              У вас будут работать квалифицированные электромонтажники с опытом электрофикации загородных домов без холодных скруток<br/> 
и других некачественных соединений.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="achivements" className="wrapper flex flex-col items-center gap-[97px] max-md:md:gap-[60px] pt-[140px]">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-white text-[48px] max-md:text-[32px] leading-[115.1%] tracking-[-.02em] ">С 2016 года </span>
        <p className="text-[#DADADA] text-[24px] max-md:text-base leading-[115.1%] tracking-[-.02em] ">Мы создаем новогоднее настроение семьям и их гостям!</p>
      </div>
      <div className="flex flex-col gap-8 max-md:gap-10 w-full max-md:max-w-md max-md:border-2 border-l-white">
        <div className="flex relative">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute md:hidden top-[54px] max-md:top-0 -left-2.5 z-0" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#E3B54B"/>
          </svg>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute top-[54px] max-md:hidden -right-2.5 z-0" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#E3B54B"/>
          </svg>

          <div className="absolute top-[63px] w-full h-0.5 bg-white z-0 max-md:hidden">
          </div>

          <div className="flex flex-col gap-6 max-md:gap-3 max-w-[436px] max-md:max-w-[447px] px-[15px] max-md:pl-[50px] bg-background max-md:bg-transparent relative z-20">
            <h5 className="text-white font-medium text-[36px] max-md:text-[24px] leading-[115.1%] tracking-[-.02em]">
              &gt; 12 лет 
на строительном рынке
            </h5>
            <p className="text-[#DADADA] text-xl max-md:text-base leading-[115.1%] tracking-[-.02em] max-w-[367px]">
              Мы накопили большой опыт 
и поэтому можем предлагать Вам проекты под ключ
            </p>
          </div>
        </div>
        <div className="flex relative justify-center max-md:justify-start">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute top-[54px] max-md:top-0 -left-2.5 z-0" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#E3B54B"/>
          </svg>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute top-[54px] max-md:hidden -right-2.5 z-0" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#E3B54B"/>
          </svg>

          <div className="absolute top-[63px] w-full h-0.5 bg-white z-0 max-md:hidden">
          </div>

          <div className="flex flex-col gap-6 max-md:gap-3 max-w-[320px] max-md:max-w-[447px] px-[15px] max-md:pl-[50px] bg-background max-md:bg-transparent relative z-20">
            <h5 className="text-white font-medium text-[36px] max-md:text-[24px] leading-[115.1%] tracking-[-.02em] ">
              &gt; 834 объектов
украшено нами
            </h5>
            <p className="text-[#DADADA] text-xl max-md:text-base leading-[115.1%] tracking-[-.02em] max-w-[367px]">
              Ценим клиентов и всегда оправдываем их доверие
            </p>
          </div>
        </div>
        <div className="flex relative justify-end max-md:justify-start">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute top-[54px] max-md:top-0 -left-2.5 z-0" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#E3B54B"/>
          </svg>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute hidden top-[54px] -right-2.5 z-0" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#E3B54B"/>
          </svg>

          <div className="absolute top-[63px] w-full h-0.5 bg-white z-0 max-md:hidden">
          </div>

          <div className="flex flex-col gap-6 max-md:gap-3 max-w-[436px] max-md:max-w-[447px] px-[15px] max-md:pl-[50px] bg-background max-md:bg-transparent relative z-20">
            <h5 className="text-white font-medium text-[36px] max-md:text-[24px] leading-[115.1%] tracking-[-.02em]">
              &gt; 8 лет занимаемся
            </h5>
            <p className="text-[#DADADA] text-xl max-md:text-base leading-[115.1%] tracking-[-.02em] max-w-[367px]">
              Светодиодными украшениями загородных домов, участков
и деревьев
            </p>
          </div>
        </div>
      </div>
    </section>
   </main>
  );
}
