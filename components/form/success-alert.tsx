'use client'

export default function SuccessAlert({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
  if (isOpen) {
    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  }

  return (
    <div className={`success-alert fixed z-100 p-6 bg-background text-white border-2 border-accent rounded-[20px] shadow-md max-w-sm mx-auto max-sm:max-w-[calc(100vw-2rem)] my-4 text-center flex flex-col gap-2 ${isOpen ? 'top-5' : '-top-full'}`} style={{transition: 'top .5s'}}>
      <h3 className="success-alert__title">Спасибо!</h3>
      <p className="success-alert__text">Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.</p>
    </div>
  );
}