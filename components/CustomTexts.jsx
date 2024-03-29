"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((Letter, index) => (
      <motion.span key={index} variants={textVariant2}>
        {Letter === " " ? "\u00A0" : Letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyles} mt-[8px] font-bold md:text-[64px] text-[40px] text-white`}
  >
    {title}
  </motion.h2>
);
