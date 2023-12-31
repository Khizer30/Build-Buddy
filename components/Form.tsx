"use client";
import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ChangeEvent } from "react";

const detailsDefaults =
{
  "architect": "i.e. I have a plot of land and I want to hire an architect...",
  "information": "i.e. I want to get information about...",
  "cement": "i.e. I would like to request a formal quotation for 30 tonnes of Fauji cement...",
  "metal": "i.e. I'd like to get a quote for purchasing aluminum sheets..."
};

// Props
interface Props
{
  type: string;
}

// Form
export default function Form({ type }: Props): JSX.Element
{
  const [inputs, setInputs] = useState({ name: "", email: "", phone: "", details: "" });
  const router = useRouter();

  // Handle Submit
  function handleSubmit(e: FormEvent<HTMLFormElement>): void
  {
    e.preventDefault();
  }

  // Handle Change
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
  {
    setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));
  }

  // Reset
  function reset(): void
  {
    setInputs({ name: "", email: "", phone: "", details: "" });
    alert("Thanks for reaching out! We've received your request and will be in touch with you soon.");
    router.push("/menu");
  }

  return (
    <>
      <form
        method="post"
        target="_self"
        autoComplete="off"
        encType="application/x-www-form-urlencoded"
        noValidate
        onSubmit={ handleSubmit }
        className=" w-9/12 flex flex-col justify-center items-center"
      >

        <div className=" w-full my-4">
          <h3 className=" my-1 font-primary text-white"> Name </h3>
          <input
            name="name"
            type="text"
            placeholder="i.e. Muhammad Khizer"
            required
            maxLength={ 100 }
            value={ inputs.name || "" }
            onChange={ handleChange }
            className=" w-full h-10 p-2 font-medium font-secondary text-white rounded border-2 border-white bg-black"
          />
        </div>

        <div className=" w-full my-4">
          <h3 className=" my-1 font-primary text-white"> Email </h3>
          <input
            name="email"
            type="email"
            placeholder="i.e. syed.khizer@gmail.com"
            required
            maxLength={ 100 }
            value={ inputs.email || "" }
            onChange={ handleChange }
            className=" w-full h-10 p-2 font-medium font-secondary text-white rounded border-2 border-white bg-black"
          />
        </div>

        <div className=" w-full my-4">
          <h3 className=" my-1 font-primary text-white"> Phone NO. </h3>
          <input
            name="phone"
            type="tel"
            placeholder="i.e. 03335962985"
            required
            maxLength={ 11 }
            value={ inputs.phone || "" }
            onChange={ handleChange }
            className=" w-full h-10 p-2 font-medium font-secondary text-white rounded border-2 border-white bg-black"
          />
        </div>

        <div className=" w-full my-4">
          <h3 className=" my-1 font-primary text-white"> Details </h3>
          <textarea
            name="details"
            placeholder={ detailsDefaults[type] }
            required
            maxLength={ 100 }
            value={ inputs.details || "" }
            onChange={ handleChange }
            className=" w-full h-28 p-2 flex font-medium font-secondary text-white rounded border-2 border-white bg-black"
          />
        </div>

        <button onClick={ reset } className=" w-28 md:w-40 h-12 my-4 flex justify-center items-center font-primary font-semibold text-sm md:text-base text-white hover:text-black border-2 rounded-md hover:bg-white transition-all duration-500">
          Submit
        </button>

      </form>
    </>
  );
}