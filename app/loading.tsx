import Image from "next/image";
//
import logo from "@images/logo_dark.webp";

// Loading
export default function Loading(): JSX.Element
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