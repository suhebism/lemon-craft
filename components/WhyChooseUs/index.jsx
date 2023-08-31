import React from 'react'
import styles from "../../styles/WhyChooseUs.module.css";
import { motion } from "framer-motion";
const index = () => {
  return (
    <div className={styles.main}>
        <div className={styles.lemonSlide}>
       <div className={styles.yellowSlide}>
         <motion.div
            className={styles.lemon}
            // initial={{   x: -1000, }}
            // whileInView={{opacity: 1, scale:1, x:100}}
            // transition={{ duration: 2, ease: "easeOut" }}
          >
            <h1>Ready to give your Brand the Zest it Deserves?</h1>
            <p>
              We collaborate with Brands to Squeeze Every Drop of Potential out
              of their Business!
            </p>
          </motion.div>
          <motion.div
            className={styles.lemon}
            // initial={{   x: -1000, }}
            // whileInView={{opacity: 1, scale:1, x:100}}
            // transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src="https://i.ibb.co/WPXRzS2/lemon.png" alt="" />
          </motion.div>
        </div>
      </div>
        <div className={styles.lowerWhychooseUs}>   
            <h1>Why Choose Us?</h1>
            <p>Sharp-eyed analysis, to construct what you eye,  to elevate your brand’s success.</p>
            <div className={styles.whychooseUsContent}>
              <div className={styles.left}>
                <div className={styles.verticalLine}>
                  <p>Why?</p>
                  <img src="https://i.ibb.co/BLGT1fs/scroll-Cursor.png" alt="" />
                </div>
                <img className={styles.whychooseUsContentImg} src="https://i.ibb.co/Bft7vRd/Lemon-Slices-01.png" alt="" />
              </div>
              <div className={styles.right}>
                <p>Our dynamic three-stage framework is meticulously designed to suit the unique needs and challenges of your brand and facilitate premier digital experience for you.</p>
                <div className={styles.contentBottom}>
                  <div className={styles.verticalLine2}></div>
                  <div className={styles.contentBottomRight}>
                    <div className={styles.explore}>
                      <h3>EXPLORE</h3>
                      <p>We assign a dedicated team of specialists who deliberate and put in place the most judicious strategies to help create your brand’s market credibil1ity and value.</p>
                    </div>
                    <div className={styles.build}>
                      <h3>BUILD</h3>
                      <p>We assign a dedicated team of specialists who deliberate and put in place the most judicious strategies to help create your brand’s market credibil1ity and value.</p>
                    </div>
                    <div className={styles.grow}> 
                      <h3>GROW</h3>
                      <p>We assign a dedicated team of specialists who deliberate and put in place the most judicious strategies to help create your brand’s market credibil1ity and value.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default index
