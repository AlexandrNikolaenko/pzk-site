import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00030B]">
      <div className="wrapper grid grid-cols-2 max-sm:flex justify-between gap-5">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3 max-md:gap-1.5">
            <span>Контакты</span>
            <div><Link href={'tel:+78124093099'}>8 (812) 409-30-99</Link><br /><Link href={'mailto:info@pzkgroup.ru'}>info@pzkgroup.ru</Link></div>
          </div>
          <div className="flex flex-col gap-3 max-md:gap-1.5">
            <span>Ищите нас по&nbsp;адресу</span>
            <Link href={'https://yandex.ru/maps/-/CLC2VI~0'}>Санкт-Петербург, Выборгское шоссе, д. 234</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-md:gap-1.5">
          <span>Навигация</span>
          <Link href={'/#service'}>Спектр услуг</Link>
          <Link href={'/#portfolio'}>Наши работы</Link>
          <Link href={'/#advantages'}>Наши преимущества</Link>
          <Link href={'/#achives'}>Наши успехи</Link>
          <Link href={'/#prices'}>Диапазон стоимости</Link>
          <Link href={'/#steps'}>Этапы работы</Link>
          <Link href={'/#feedback'}>Отзывы</Link>
          <Link href={'/#callback'}>Оставить заявку</Link>
        </div>
      </div>
    </footer>
  )
}