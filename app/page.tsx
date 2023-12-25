import { type Metadata } from "next";

// Metadata
export const metadata: Metadata =
{
  title: "Build Buddy",
  keywords: [""],
  description: "",
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
      type: "image/webp",
      sizes: "32x32",
      url: "/images/favicon.webp"
    }
  }
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
    </>
  );
}