import Image from "next/image";
import { type Metadata } from "next";

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
      </div>
    </>
  );
}