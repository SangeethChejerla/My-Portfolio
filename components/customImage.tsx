import Image from "next/image";

type Props = { src: string; alt: string; priority?: string };
export default function CustomImage({ src, alt, priority }: Props) {
  const prio = priority ? true : false;

  return (
    <div className="w-full h-full">
      <Image src={src} alt={alt} width={500} height={500} priority={prio} />
    </div>
  );
}