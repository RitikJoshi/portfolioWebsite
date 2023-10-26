import React from "react";
import { motion } from "framer-motion";
import { Skill as mySkill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: mySkill;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border-2 border-[#41B3C4]/80 object-cover w-16 h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-lg md:text-lg font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
