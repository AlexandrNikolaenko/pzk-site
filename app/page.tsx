'use server'

import AccentButton from "@/components/button/accent-button";
import Form from "@/components/form/form";
import CaseImage from "@/components/main/case";
import FeedbackLent from "@/components/main/feedback-lent";
import Gallery from "@/components/main/gallery-image";
import PersonCard from "@/components/main/person-card";
import ScrollFeedbackArrow from "@/components/main/scrooll-feedback-arrow";
import ServiceCard from "@/components/main/service-card";
import StepPoint from "@/components/main/step";
import { persons } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const strokeStyle = " leading-[115.1%] tracking-[-.02em] ";

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
          <Link href={'/#form'}>
            <AccentButton >Получить расчет</AccentButton>
          </Link>
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
      <div id="gallery-lent" className="max-w-[100vw] overflow-x-scroll">
        <Gallery />
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
    <section id="achivements" className="wrapper flex flex-col items-center gap-[97px] max-lg:md:gap-[60px] pt-[140px] max-md:pt-[113px]">
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
    <section className="wrapper pt-[190px] max-lg:pt-28 max-md:pt-[95px] pb-[129px] max-lg:pb-[78px] max-md:pb-[114px] flex flex-col gap-[52px]">
      <div className="flex justify-between itmes-start">
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-medium text-[36px] max-lg:text-[32px] max-md:text-[24px] leading-[115.1%] tracking-[-.02em]">
            Разные бюджеты — один стандарт качества
          </h3>
          <p className="text-[#DADADA] text-[20px] max-md:text-base leading-[115.1%] tracking-[-.02em]">
            Мы подбираем оборудование и решения под проект, <br/>
сохраняя эстетику, безопасность и долговечность. <br/>
Делаем подсветку, которая безупречна при любом бюджете.
          </p>
        </div>
        <Image className="max-lg:hidden" src={'/quality-mark-icon.svg'} alt="quality" width={73} height={73}/>
      </div>
      <div className="flex flex-col max-md:flex-row gap-[52px] max-lg:gap-[30px]">
        <ul className="flex gap-4 max-lg:gap-2.5 max-md:gap-6 max-md:flex-col w-full ">
          <div className="aspect-4/3 w-full relative">
            <Image src={'/quality-image-1.jpg'} fill alt="image"/>
          </div>
          <div className="aspect-4/3 w-full relative">
            <Image src={'/quality-image-2.jpg'} fill alt="image"/>
          </div>
          <div className="aspect-4/3 w-full relative">
            <Image src={'/quality-image-3.jpg'} fill alt="image"/>
          </div>
        </ul>
        <div className="flex gap-[46px] max-lg:gap-[34px] items-center max-md:py-20 max-md:flex-col">
          <span className="text-nowrap text-[32px] max-lg:text-[18px] text-[#DADADA] leading-[115.1%] tracking-[-.02em]">100.000 руб</span>
          <div className="relative w-full bg-[#BFBFBF] h-px max-md:h-full max-md:w-px">
            <svg className="absolute top-0 max-md:bottom-0 max-md:top-auto right-0 translate-y-[-50%] max-md:rotate-90 max-md:translate-x-[50%] max-md:translate-y-0" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 0.5L15.5 8.75806L0.5 16.5" stroke="#BFBFBF" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-nowrap text-[32px] max-lg:text-[18px] text-[#DADADA] leading-[115.1%] tracking-[-.02em]">1.100.000 руб</span>
        </div>
      </div>
    </section>
    <section className="wrapper">
      <div className="relative rounded-2xl bg-[#D9D9D9] pt-14 max-lg:pt-34px max-md:pt-[126px] pb-9 max-lg:pb-5 max-md:pb-9 px-[119px] max-lg:px-[70px] max-md:px-[30px] flex flex-col items-center gap-24 max-lg:gap-14">
        <Image className="absolute top-[-30px]" src={'/step-point-icon.svg'} alt="point" width={60} height={60}/>
        <div className="flex flex-col gap-3 max-lg:md:gap-1.5">
          <h4 className={"text-center font-bold text-[32px] max-lg:md:text-xl text-background" + strokeStyle}>Этапы работы</h4>
          <p className="text-center max-w-[777px] text-background text-xl max-lg:text-xs max-md:text-base">Наша цель не только разработать индивидуальный дизайн-проект и произвести качественный монтаж иллюминации, но и подарить своим клиентам незабываемую атмосферу праздника.</p>
        </div>
        <ul className="flex flex-col gap-[98px] max-lg:gap-[57px] max-md:gap-8 w-full">
          <div className="flex max-md:flex-col max-md:gap-8 justify-between max-md:justify-center items-center flex-nowrap w-full">
            <StepPoint id={1} body="Вы оставляете заявку или звоните нам"/>
            <div className="relative w-[99px] max-lg:w-[59px] max-md:w-[66px] h-[47px] max-lg:h-7 max-md:h-[31px] max-md:rotate-90">
              <Image src={'/step-arrow-icon.svg'} alt="next" fill/> 
            </div>
            <StepPoint id={2} body="С вами связывается наш менеджер"/>
            <div className="relative w-[99px] max-lg:w-[59px] max-md:w-[66px] h-[47px] max-lg:h-7 max-md:h-[31px] max-md:rotate-90">
              <Image src={'/step-arrow-icon.svg'} alt="next" fill/> 
            </div>
            <StepPoint id={3} body="Выезжаем на замер с образцами гирлянд"/>
            <div className="relative md:hidden w-[99px] max-lg:w-[59px] max-md:w-[66px] h-[47px] max-lg:h-7 max-md:h-[31px] max-md:rotate-90">
              <Image src={'/step-arrow-icon.svg'} alt="next" fill/> 
            </div>
          </div>
          <div className="flex max-md:flex-col max-md:gap-8 justify-between max-md:justify-center items-center flex-nowrap w-full">
            <StepPoint id={4} body="Вы оставляете заявку или звоните нам"/>
            <div className="relative w-[99px] max-lg:w-[59px] max-md:w-[66px] h-[47px] max-lg:h-7 max-md:h-[31px] max-md:rotate-90">
              <Image src={'/step-arrow-icon.svg'} alt="next" fill/> 
            </div>
            <StepPoint id={5} body="С вами связывается наш менеджер"/>
            <div className="relative w-[99px] max-lg:w-[59px] max-md:w-[66px] h-[47px] max-lg:h-7 max-md:h-[31px] max-md:rotate-90">
              <Image src={'/step-arrow-icon.svg'} alt="next" fill/> 
            </div>
            <StepPoint id={6} body="Выезжаем на замер с образцами гирлянд"/>
          </div>
        </ul>
        <p className={"text-center font-extralight italic text-xl max-lg:text-xs max-md:text-base" + strokeStyle}>
          *работаем быстро и четко, поэтому не заставим Вас долго ждать
        </p>
      </div>
    </section>
    <section id="garanty" className="wrapper py-[106px] max-lg:pt-[97px] max-lg:pb-32 max-md:pt-[90px] max-md:pb-[113px] flex flex-col items-center gap-8 max-lg:md:gap-10">
      <div className="flex flex-col gap-8 max-ld:gap-4 items-center">
        <h3 className={"text-white text-[38px] text-center max-lg:text-[32px] max-md:text-2xl font-medium" + strokeStyle}>Безусловная гарантия 12 месяцев — на работы и материалы</h3>
        <p className={"text-[#DADADA] text-2xl max-lg:text-xl max-md:text-base max-w-[779px] max-md:max-w-[643px] max-sm:max-w-[301px] w-full text-center" + strokeStyle}>Монтаж, электрика и комплектующие — под нашей защитой. Все условия зафиксированы в договоре: сроки реакции, замена при браке и полная ответственность за результат.</p>
      </div>
      <Link href={'/#form'}>
        <AccentButton >Перейти к оформлению</AccentButton>
      </Link>
    </section>
    <section id="portfolio" className="wrapper flex flex-col gap-[90px] max-lg:gap-[101px max-md:gap-[113px] items-center">
      <p className="text-center text-white text-xl max-lg:text-base leading-[140%] tracking-[-.02em] max-w-[927px] max-lg:max-w-[583px] max-md:max-w-none">Мы оформили уже огромное количество домов и знаем, как сделать красиво именно у Вас! Каждый наш проект — это уют, свет и немного волшебства, которое хочется повторять!</p>
      <div className="flex flex-col w-full gap-4 max-lg:md:gap-2.5">
        <div className="grid grid-cols-[816fr_400fr] max-sm:grid-cols-1 gap-4 max-lg:md:gap-2.5 aspect-1232/504">
          <CaseImage id={1} aspect="816/504"/>
          <CaseImage id={2} aspect="400/504"/>
        </div>
        <div className="grid grid-cols-[623fr_593fr] max-sm:grid-cols-1 gap-4 max-lg:md:gap-2.5 aspect-1232/452">
          <CaseImage id={3} aspect="623/452"/>
          <CaseImage id={4} aspect="593/452"/>
        </div>
        <div className="grid grid-cols-[600fr_616fr] max-sm:grid-cols-1 gap-4 max-lg:md:gap-2.5 aspect-1232/560">
          <CaseImage id={5} aspect="600/560"/>
          <CaseImage id={6} aspect="616/560"/>
        </div>
      </div>
    </section>
    <section id="feedback" className="wrapper pt-40 max-lg:pt-[60px] pb-[129px] max-lg:pb-[100px] max-md:pb-[105px]">
      <div className="flex flex-col gap-3">
        <h3 className={"text-white font-medium text-[32px] max-lg:text-2xl max-md:text-xl" + strokeStyle}>Что говорят о нас те, чей дом мы уже наполнили праздником:</h3>
        <p className={"text-[#DADADA] text-2xl max-lg:text-base" + strokeStyle}>
          Каждый дом для нас — особенный, и мы искренне радуемся, <br/>
когда результат вызывает улыбку.
        </p>
      </div>
      <div className="mt-32 w-full flex flex-col gap-8">
        <div id={'feedback-lent'} className="overflow-x-scroll w-full">
          <FeedbackLent />
        </div>
        <div className="flex justify-between">
          <ScrollFeedbackArrow dir={-1} elemId="feedback-lent"/>
          <ScrollFeedbackArrow dir={1} elemId="feedback-lent"/>
        </div>
      </div>
      <div className="mt-[102px] items-center w-full flex flex-col gap-5">
        <span className={"text-[#DADADA] text-2xl" + strokeStyle}>Ищите нас на ЯндексКартах!</span>
        <Link href={'https://yandex.ru/maps/-/CLC2VI~0'}>
          <AccentButton>Искать</AccentButton>
        </Link>
      </div>
    </section>
    <section id="form" className="flex items-center justify-center h-screen bg-[url(/form-fon.jpg)] bg-no-repeat bg-cover bg-center">
      <Form />
    </section>
    <section id="team" className="pt-40 max-md:pt-[62px] pb-[116px] max-lg:pb-10 max-md:pb-11 wrapper flex flex-col gap-[92px] max-lg:gap-[53px] max-md:gap-[62px] ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h3 className={"text-white text-[32px] max-lg:text-2xl font-medium" + strokeStyle}>Наша команда</h3>
          <p className={"text-[#DADADA] text-2xl max-lg:text-base max-md:text-xs max-w-[739px] max-lg:max-w-[602px] max-md:max-w-none" + strokeStyle}>
            За каждой красивой подсветкой стоят не просто гирлянды, а люди, которые любят своё дело. Познакомьтесь с нашей командой — теми, кто делает праздник уютным, тёплым и светлым.
          </p>
        </div>
        <div className="relative h-[66px] max-md:h-[39px] w-[31px] max-md:w-[19px] max-md:hidden">
          <Image src={'/arrow-persons.svg'} alt="next" fill/> 
        </div>
      </div>
      <ul className="grid grid-cols-4 max-md:grid-cols-2 gap-x-4 max-lg:gap-2.5 max-md:gap-x-5 gap-y-[76px] max-lg:gap-y-[34px] max-md:gap-y-[52px]">
        {
          persons.map(person => <PersonCard key={person.id} {...person}/>)
        }
      </ul>
    </section>
   </main>
  );
}
