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
        {Letter === " " ? "\u00A0" : Letter }
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = () => <h2>Title Text</h2>;
