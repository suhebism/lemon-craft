import React from 'react';
import styles from '../../styles/HowWeWork.module.css'

const index = () => {
  return (
    <>
        <div className={styles.main}>
            <h1>LOREM IPSUM DOLOR SIT AMET CONSECUTEUR</h1>
        </div>
        <div className={styles.process}>
            <p style={{textTransform:'uppercase'}}>what you get while working with us</p>
            <h1 style={{textTransform:'uppercase'}}>what matters to us is your result!</h1>
            <div className={styles.stages}>
                <div className={styles.stage1}>
                    <img src="https://i.ibb.co/10StF0v/lemon-Services.png" alt="" />
                    <div className={styles.content}>
                        <h2>AN EXPERIENCED AND DEDICATED TEAM</h2>
                        <p>Lorem ipsum dolor sit amet, in consectetur adipiscing elit. In pharetra ornare viverra. </p>
                    </div>
                </div>
                <div className={styles.stage2}>
                    <div className={styles.content}>
                        <h2>AN EXPERIENCED AND DEDICATED TEAM</h2>
                        <p>Lorem ipsum dolor sit amet, in consectetur adipiscing elit. In pharetra ornare viverra. </p>
                    </div>
                    <img src="https://i.ibb.co/10StF0v/lemon-Services.png" alt="" />
                </div>
                <div className={styles.stage3}>
                    <img src="https://i.ibb.co/10StF0v/lemon-Services.png" alt="" />
                    <div className={styles.content}>
                        <h2>AN EXPERIENCED AND DEDICATED TEAM</h2>
                        <p>Lorem ipsum dolor sit amet, in consectetur adipiscing elit. In pharetra ornare viverra. </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default index