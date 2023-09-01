import React from 'react'
import styles from '../../styles/Usp.module.css';

const index = () => {
  return (
    <>
        <div className={styles.main}>
            <div style={{display:'flex'}}>
            <div className={styles.verticalLine}>
                <p>USP</p>
                <img src="https://i.ibb.co/BLGT1fs/scroll-Cursor.png" alt="" />
            </div>
            <div className={styles.mainContent}>
                <h3>USP AND DELIVERY FRAMEWORK</h3>
                <h1>I G N I T E</h1>
                <div className={styles.uspMainButton}>Digital Solutions: Infinite; Mantra: IGNITE</div>
                <p>When we collaborate, we commit to cradling your brand with you. We commit to giving it the same affection and devotion as you. We commit to building it with you.  And we commit to watching it grow with you and for you. </p>
            </div>
            </div>
            <div className={styles.mainLower}>
            <img src="https://i.ibb.co/sK0qVDb/usp-Circle.png" alt="" />
            <div style={{display:'flex',gap:'2rem', position:'relative', left:'-250px', alignItems:'center', width:'100%'}}>
                <h1>INNOVATIONS</h1>
                <p>We undertake a great deal of industry research and draw up for you, the most market-savvy and ingenious digital strategies to tap into.</p>
                </div>
        </div>
        </div>
        
    </>
  )
}

export default index