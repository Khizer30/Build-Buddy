"use client";
import Image from "next/image";
//
import img1 from "@images/architecture.webp";
import img2 from "@images/supplier.webp";
import img3 from "@images/information.webp";

// Options
export default function Options(): JSX.Element
{
  return (
    <>
      <div className=" my-4 grid grid-cols-2 md:grid-cols-4">

        <div className=" p-4 col-span-1 flex flex-col justify-center items-center">
          <button onClick={ () => console.log("Hello World!") }>
            <Image
              src={ img1 }
              alt="Architect"
              draggable="false"
              className=" w-32 md:w-48 h-32 md:h-48 rounded cursor-pointer scale"
            />
          </button>
          <h6 className=" my-4 md:my-6 font-secondary text-center text-sm md:text-base text-white"> Architect </h6>
        </div>

        <div className=" p-4 col-span-2 order-3 md:order-2 flex flex-col justify-center items-center">
          <div>
            <Image
              src={ img3 }
              alt="Information"
              draggable="false"
              className=" w-64 md:w-96 h-32 md:h-48 rounded cursor-pointer scale"
            />
          </div>
          <h6 className=" my-4 md:my-6 font-secondary text-center text-sm md:text-base text-white"> Information </h6>
        </div>

        <div className=" p-4 col-span-1 order-2 md:order-4 flex flex-col justify-center items-center">
          <div>
            <Image
              src={ img2 }
              alt="Suppliers"
              draggable="false"
              className=" w-32 md:w-48 h-32 md:h-48 rounded cursor-pointer scale"
            />
          </div>
          <h6 className=" my-4 md:my-6 font-secondary text-center text-sm md:text-base text-white"> Suppliers </h6>
        </div>

      </div>
    </>
  );
}