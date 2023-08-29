import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import  { ScrollRotate } from 'react-scroll-rotate';
const index = () => {
  return (
    <div className={styles.servicesTab}>
    <div className={styles.services}>
      <div className={styles.verticalLine}>
        <p>Design</p>
        <img src="https://i.ibb.co/BLGT1fs/scroll-Cursor.png" alt="" />
      </div>
      <div className={styles.servicesContent}>
        <div>
        <h3>
          Crafting custom websites and apps that perfectly align with your
          vision. From expert development to seamless integrations, we've got
          you covered.
        </h3>
        <p>
          In the first step, our Lemon Craft designers will sit with you to get
          an understanding of your vision for the brand, the plausible
          challenges, and the associated timelines. Post considering these
          factors, we attempt to study and learn more about your brand, project
          objectives, target market and the competitive front, to give you the
          design you desire.
        </p>
        </div>
        {/* <div>
        <h3>
          Crafting custom websites and apps that perfectly align with your
          vision. From expert development to seamless integrations, we've got
          you covered.
        </h3>
        <p>
          In the first step, our Lemon Craft designers will sit with you to get
          an understanding of your vision for the brand, the plausible
          challenges, and the associated timelines. Post considering these
          factors, we attempt to study and learn more about your brand, project
          objectives, target market and the competitive front, to give you the
          design you desire.
        </p>
        </div> */}
        <Link href='/'>See more</Link>
      </div>
      <img className={styles.lemonServices} src="https://i.ibb.co/44VTZQd/lemon-Services.png" alt="" />
    </div>
    </div>
  );
};

export default index;
