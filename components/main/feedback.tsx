import Image from "next/image";

export default function Feedback({
  image,
  aspect,
}: {
  image: string;
  aspect: string;
}) {
  return (
    <li
      className="relative w-[439px] min-w-[439px] max-md:w-[277.38px] max-md:min-w-[277.38px] rounded-xl overflow-hidden"
      style={{ aspectRatio: aspect }}
    >
      <Image src={image} alt="feedback" fill />
    </li>
  );
}
