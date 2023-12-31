import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ritik.joshi329@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
  };

  return (
    <div className="h-screen flex relative space-y-5 flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 xl:top-10 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-3 ">
        <h4 className="text-xl md:text-2xl lg:text-2xl 2xl:text-3xl font-semibold text-center">
          If I have got just what you need.{" "}
          <span className="decoration-[#41B3C4]/50 underline">Lets talk.</span>
        </h4>

        <div className="space-y-2 md:space-y-2 lg:space-y-3 xl:space-y-3 2xl:space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#41B3C4] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">+91 9458381142</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#41B3C4] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              ritik.joshi329@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#41B3C4] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              Dehradun, Uttarakhand
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-80 md:w-auto"
              type="text"
            />{" "}
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-80 md:w-auto"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput "
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#41B3C4] py-3 md:py-5 px-10 rounded-lg text-white font-bold text-lg">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
