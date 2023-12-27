import Image from "next/image";
import { type Metadata } from "next";
//
import Hero from "@components/Hero";
import logo from "@images/logo_dark.webp";
import profileImg1 from "@images/profile_1.webp";
import profileImg2 from "@images/profile_2.webp";
import profileImg3 from "@images/profile_3.webp";

// Metadata
export const metadata: Metadata =
{
  title: "Build Buddy",
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

        <div className=" h-[12vh] p-4 flex justify-start items-center">
          <Image
            src={ logo }
            alt="Build Buddy"
            draggable="false"
            className=" w-20 h-20 scale"
          />
        </div>

        <div className=" h-[87vh] p-4 flex flex-col justify-center items-center">
          <h1 className=" font-secondary text-2xl md:text-3xl text-white"> Select an Account </h1>
          <div className=" my-4 grid grid-cols-2 md:grid-cols-3">

            <Hero title="Beginner's Account" link="" image={ profileImg1 } />
            <Hero title="Intermediate's Account" link="" image={ profileImg2 } />
            <Hero title="Professional's Account" link="" image={ profileImg3 } />

          </div>
        </div>

      </div>
    </>
  );
}