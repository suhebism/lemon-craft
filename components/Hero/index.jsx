import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Button from "../Button";
import { motion } from "framer-motion";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
const index = () => {
  const { text } = useTypewriter({
    words: ["Develop.", "Design.", "Elevate."],
    loop: {},
  });
  return (
    <div className={styles.appHero}>
      <motion.div className={styles.appHeroTop}>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}>
          <h1>You Create.</h1>
        </motion.div>
        <motion.div
          className={styles.textAnimate}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <h1>
            We <span>{text}</span>
            <span>
              <Typewriter
                words={
                  ["Automate", "Situate", "Elevate","Calculate","Integrate","Compose"]
                }
                loop={500}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1><span className={styles.cursor}><Cursor
              className={styles.cursor}
              style={{ fontWeight: "400", color: "white" }}
              cursorStyle="<"/></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1.6 }}
        >
          <p>A creative digital agency focused on growing brands online.</p>
        </motion.div>
      </motion.div>
      <div className={styles.appHeroBottom}>
        <Link href="about">our Projects</Link>
        <Button text="Demo"></Button>
      </div>
    </div>
  );
};

export default index;
