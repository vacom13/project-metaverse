"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people-01" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people-02" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people-03" className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 left-[20%] rounded-3xl bg-[#5d6680] p-[6px] hidden lg:block">
          <img src="/card-01.png" alt="card-01" className="" />
          <img
            src="people-04.png"
            alt="people-04"
            className="absolute bottom-[50px] left-[20px] z-30"
          />
          <img
            src="people-05.png"
            alt="people-04"
            className="absolute bottom-[50px] left-[32px] z-20"
          />
          <img
            src="people-06.png"
            alt="people-04"
            className="absolute bottom-[50px] left-[44px] z-10"
          />
          <p className="absolute bottom-[52px] left-[75px] text-white text-xs">+ 264 has joined</p>
          <div className="absolute bottom-[20px] left-[20px] text-white text-[20px]">
            The Upside Down
          </div>
        </div>
        <div className="absolute top-[10%] left-[65%] rounded-3xl bg-[#5d6680] p-[6px] hidden lg:block">
          <img src="/card-02.png" alt="card-02" className="" />
          <img
            src="people-04.png"
            alt="people-04"
            className="absolute bottom-[50px] left-[20px] z-30"
          />
          <img
            src="people-05.png"
            alt="people-04"
            className="absolute bottom-[50px] left-[32px] z-20"
          />
          <img
            src="people-06.png"
            alt="people-04"
            className="absolute bottom-[50px] left-[44px] z-10"
          />
          <p className="absolute bottom-[52px] left-[75px] text-white text-xs">+ 264 has joined</p>
          <div className="absolute bottom-[20px] left-[20px] text-white text-[20px]">
            Hawkins Labs
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
