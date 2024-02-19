import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
      py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 
      md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark 
      xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.15 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full 
      bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark 
          text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Dev
        </motion.div>
        <Skill name="HTML" x="-10vw" y="-6vw" />
        <Skill name="CSS" x="-13vw" y="-16vw" />
        <Skill name="Javascript" x="0vw" y="-23vw" />
        <Skill name="Terraform" x="10vw" y="-6vw" />
        <Skill name="Git" x="13vw" y="-16vw" />
        <Skill name="Java" x="10vw" y="6vw" />
        <Skill name="C++" x="-10vw" y="6vw" />
        <Skill name="Docker" x="-13vw" y="16vw" />
        <Skill name="Kubernetes" x="13vw" y="16vw" />
        <Skill name="Flask" x="-27vw" y="-5vw" />
        <Skill name="Spring Boot" x="27vw" y="-5vw" />
        <Skill name="MongoDB" x="0vw" y="23vw" />
        <Skill name="MySQL" x="33vw" y="5vw" />
        <Skill name="Celery" x="-33vw" y="5vw" />
      </div>
    </>
  );
};

export default Skills;
