import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const H1 = ({ id, text }: HeaderProps) => (
  <h1 id={id} className="text-3xl font-bold my-6 text-white">
    {text}
  </h1>
);

export const H2 = ({ id, text }: HeaderProps) => (
  <h2 id={id} className="text-2xl font-semibold text-white">
    {text}
  </h2>
);

export const CustomImage = ({ src, alt }: ImageProps) => (
  <Image
    className="object-contain"
    width={800}
    height={800}
    src={`https://raw.githubusercontent.com/sangeeth-Chejerla/Blogposts/master/images/${src}`}
    alt={alt}
  />
);

export const InfoBlock = ({ children, type }: InfoBlockProps) => {
  let typeName;
  let icon;
  switch (type) {
    case "danger":
      typeName = "bg-red-700";
      icon = "☢️";
      break;
    case "info":
      typeName = "bg-sky-950";
      icon = "ℹ";
      break;
    case "warning":
      typeName = "bg-yellow-600 ";
      icon = "⚠";
      break;
  }

  return (
    <div className={`text-white bg-opacity-70 ${typeName}`}>
      <div className="flex items-center space-x-2 p-3 pb-0">
        <div className="p-2 border btn-circle flex justify-center items-center">
          {icon}
        </div>
        <p className="uppercase">{type}</p>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export const BlueLink = ({ href, text }: { href: string; text: string }) => (
  <Link
    className="text-sky-400 hover:underline relative"
    href={href}
    title={href}
  >
    {text}
  </Link>
);

export const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <span className="italic text-amber-300 p-0.5 bg-gray-900 leading">
    {children}
  </span>
);

export const BulletList = ({ list }: { list: string[] }) => (
  <ul className="p-4">
    {list.map((val) => (
      <li key={val} className="list-disc">
        {val}
      </li>
    ))}
  </ul>
);

export const Example = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-black text-white border p-4 border-zinc-400 rounded-lg text-sm">
    <span>Example:</span>
    <Separator className="my-2" />
    <div>{children}</div>
  </div>
);

type InfoBlockProps = {
  children: React.ReactNode;
  type: "info" | "warning" | "danger";
};

export const Code = ({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) => {
  return (
    <div className="relative">
      <div className=" bg-slate-950 border border-b-0 border-zinc-400 text-center rounded-lg w-24 text-primary p-3">
        {lang}
      </div>
      <div>{children}</div>
    </div>
  );
};

type HeaderProps = { id?: string; text: string };

type ImageProps = { src: string; alt: string };