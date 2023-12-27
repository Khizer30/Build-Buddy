import Image from "next/image";
import { type Metadata } from "next";
//
import logo from "@images/logo_dark.webp";

// Metadata
export const metadata: Metadata =
{
  title: "Build Buddy | Loading",
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
      <div className=" w-screen h-screen flex justify-center items-center bg-black">
        <Image
          src={ logo }
          alt="Build Buddy"
          draggable="false"
          className=" w-96 h-96 scale animate-pulse"
        />
      </div>
    </>
  );
}