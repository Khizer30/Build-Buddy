import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
//
import logo from "@images/logo_dark.webp";
import img1 from "@images/cement.webp";
import img2 from "@images/metal.webp";
import img3 from "@images/appliances.webp";
import img4 from "@images/furniture.webp";
import img5 from "@images/wiring.webp";

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

          <Link href="/menu" className=" w-20 md:w-28 h-10 flex justify-center items-center font-primary font-semibold text-sm md:text-base text-white hover:text-black border-2 rounded-md hover:bg-white transition-all duration-500">
            Go Back
          </Link>
        </div>

        <div className=" h-[87vh] p-4 flex flex-col justify-center items-center">
          <h1 className=" font-primary text-2xl md:text-3xl text-white"> What are you looking for? </h1>

          <div className=" my-4 grid grid-cols-2 md:grid-cols-5">

            <div className=" p-4 col-span-1 flex flex-col justify-center items-center">
              <Link href="/menu/suppliers/cement">
                <Image
                  src={ img1 }
                  alt="Cement"
                  draggable="false"
                  className=" w-32 md:w-48 h-32 md:h-48 rounded cursor-pointer scale"
                />
              </Link>
              <h6 className=" my-4 md:my-6 font-primary text-center text-sm md:text-base text-white"> Cement </h6>
            </div>

            <div className=" p-4 col-span-1 flex flex-col justify-center items-center">
              <Link href="/menu/suppliers/metal">
                <Image
                  src={ img2 }
                  alt="Metal"
                  draggable="false"
                  className=" w-32 md:w-48 h-32 md:h-48 rounded cursor-pointer scale"
                />
              </Link>
              <h6 className=" my-4 md:my-6 font-primary text-center text-sm md:text-base text-white"> Metal </h6>
            </div >

            <div className=" p-4 col-span-1 flex flex-col justify-center items-center">
              <Link href="/menu/suppliers/appliances">
                <Image
                  src={ img3 }
                  alt="Appliances"
                  draggable="false"
                  className=" w-32 md:w-48 h-32 md:h-48 rounded cursor-pointer scale"
                />
              </Link>
              <h6 className=" my-4 md:my-6 font-primary text-center text-sm md:text-base text-white"> Appliances </h6>
            </div >

            <div className=" p-4 col-span-1 flex flex-col justify-center items-center">
              <Link href="/menu/suppliers/furniture">
                <Image
                  src={ img4 }
                  alt="Furniture"
                  draggable="false"
                  className=" w-32 md:w-48 h-32 md:h-48 rounded cursor-pointer scale"
                />
              </Link>
              <h6 className=" my-4 md:my-6 font-primary text-center text-sm md:text-base text-white"> Furniture </h6>
            </div >

            <div className=" p-4 col-span-1 flex flex-col justify-center items-center">
              <Link href="/menu/suppliers/wiring">
                <Image
                  src={ img5 }
                  alt="Wiring"
                  draggable="false"
                  className=" w-32 md:w-48 h-32 md:h-48 rounded cursor-pointer scale"
                />
              </Link>
              <h6 className=" my-4 md:my-6 font-primary text-center text-sm md:text-base text-white"> Wiring </h6>
            </div >

          </div >

        </div>

      </div>
    </>
  );
};