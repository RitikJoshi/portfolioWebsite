import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className=" flex flex-col rounded-lg items-center space-y-3 flex-shrink-0
    w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
    overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 
    scrollbar-thumb-[#41B3C4]/80 ">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover
        object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10 width-[640px]">
        <div className=" md:flex md:justify-between items-center">
          <div>
            <h4 className="text-2xl md:text-3xl font-light mr-3">
              {experience?.jobTitle}
            </h4>
            <p className="font-bold text-3xl md:text-2xl  mt-1 text-[#41B3C4]">
              {experience?.company}
            </p>
            <div className="flex space-x-2 my-2">
              {experience?.technologies.map((technology) => (
                <img
                  key={technology._id}
                  className="h-10 w-10 rounded-full object-cover"
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              ))}
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-28 md:w-28  rounded-full mb-0 object-cover object-center"
            src={urlFor(experience?.companyImage).url()}
            alt=""
          />
        </div>
        <p className="uppercase py-2 md:py-5 text-gray-500 text-sm md:text-lg">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
      
      <ul className="px-0 md:px-10 list-disc  text-white space-y-2 pr-5 text-justify ml-0 text-sm md:text-lg pl-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-darkGreen/80">
        {experience?.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      </div>
    </article>
  );
}
