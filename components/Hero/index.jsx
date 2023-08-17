import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Button from "../Button";
import { motion } from "framer-motion";
const index = () => {
  return (
    <div className={styles.appHero}>
      <motion.div className={styles.appHeroTop}>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <h1>You Create.</h1>
        </motion.div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <h1>We Elevate.</h1>
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
