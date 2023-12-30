import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
//
import Options from "@components/Options";
import logo from "@images/logo_dark.webp";

// Metadata
export const metadata: Metadata =
{
  title: "Build Buddy | Menu",
  keywords: ["Build Buddy. We Build It!"],
  description: "Build Buddy. We Build It!",
  authors:
  {
    name: "Syed Muhammad Khizer",
    url: "https://syedmuhammadkhizer.vercel.app"
  },
  icons:
  {
    icon:
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/favicon.png"
    }
  }
};


// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <div className=" w-screen min-h-screen bg-black">

        <div className=" h-[12vh] p-4 flex justify-between items-center">
          <Image
            src={ logo }
            alt="Build Buddy"
            draggable="false"
            className=" w-20 h-20"
          />

          <Link href="/" className=" w-20 md:w-28 h-10 flex justify-center items-center font-secondary font-semibold text-sm md:text-base text-white hover:text-black border-2 rounded-md hover:bg-white transition-all duration-500">
            Go Back
          </Link>
        </div>

        <div className=" h-[87vh] p-4 flex flex-col justify-center items-center">
          <h1 className=" font-secondary text-2xl md:text-3xl text-white"> What are you looking for? </h1>
          <Options />
        </div>

      </div>
    </>
  );
};