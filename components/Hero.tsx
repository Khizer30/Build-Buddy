import Link from "next/link";
import Image from "next/image";
import { type StaticImageData } from "next/image";

// Props
interface Props
{
  title: string;
  link: string;
  image: StaticImageData;
}

// Hero
export default function Hero({ title, link, image }: Props): JSX.Element
{
  return (
    <>
      <div className=" p-4 col-span-1 flex flex-col justify-center items-center">
        <Link href={ link }>
          <Image
            src={ image }
            alt={ title }
            draggable="false"
            className=" w-32 md:w-48 h-32 md:h-48 rounded cursor-pointer scale"
          />
        </Link>
        <h6 className=" my-4 md:my-6 font-secondary text-center text-sm md:text-base text-white"> { title } </h6>
      </div>
    </>
  );
}