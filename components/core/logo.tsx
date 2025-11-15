import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative w-[101px] h-[46px] max-[550px]:w-16 max-[550px]:h-[29px]">
      <Image alt="logo" src={"/logo.png"} fill />
    </div>
  );
}
