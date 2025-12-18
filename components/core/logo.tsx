import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'} className="relative w-[101px] h-[46px] max-[550px]:w-16 max-[550px]:h-[29px]">
      <Image alt="logo" src={"/logo.svg"} fill />
    </Link>
  );
}
