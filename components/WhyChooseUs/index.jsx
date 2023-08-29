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
            initial={{   x: -1000, }}
            whileInView={{opacity: 1, scale:1, x:100}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src="https://i.ibb.co/WPXRzS2/lemon.png" alt="" />
          </motion.div>
        </div>
      </div>
        <div className={styles.lowerWhychooseUs}>   
            <h1>Why Choose Us?</h1>
            <p>Sharp-eyed analysis, to construct what you eye,  to elevate your brand’s success.</p>
        </div>
    </div>
  )
}

export default index
