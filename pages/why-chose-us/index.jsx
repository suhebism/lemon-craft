import React from 'react'
import styles from '../../styles/Why.module.css'
const index = () => {
  return (
    <>
        <div className={styles.main}>
            <h1>ANIMATION/VIDEO OF OUR USP</h1>
        </div>
        <div className={styles.goal}>
            <p className={styles.title}>Our Goal</p>
            <h1>what matters to us is <br/> your result!</h1>
            <div className={styles.cards}>
                <div className={styles.card1}>
                    <h1>Flexibility</h1>
                    <p>Lorem ipsum dolor sit amet, in consectetur adipiscing elit. In pharetra ornare viverra. </p>
                </div>
                <div className={styles.card2}>
                    <h1>Cost Effective</h1>
                    <p>Lorem ipsum dolor sit amet, in consectetur adipiscing elit. In pharetra ornare viverra. </p>
                </div>
                <div className={styles.card3}>
                    <h1>Quick Turn around</h1>
                    <p>Lorem ipsum dolor sit amet, in consectetur adipiscing elit. In pharetra ornare viverra. </p>
                </div>
                <div className={styles.card4}>
                    <h1>Maximum Support</h1>
                    <p>Lorem ipsum dolor sit amet, in consectetur adipiscing elit. In pharetra ornare viverra. </p>
                </div>
            </div>
        </div>
        <div className={styles.solutions}>
            <div className={styles.part1} >
                <div className={styles.solutionTitle}>
                    <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                        <div className={styles.leaf}></div>
                        <h1>CUSTOM SOLUTIONS</h1>
                    </div>
                    <ul>
                        <li>Choice to tailor the look & feel of your app</li>
                        <li>Give your customers a personalized experience</li>
                    </ul>
                </div>
                <img src="https://i.ibb.co/hfJNPVR/pic.png" alt="" />
            </div>
            <div className={styles.part2}>
                <h1>TELL US WHAT YOU LIKE</h1>
            </div>
            <div className={styles.part3}>
                <h1>TELL US WHAT YOU LIKE</h1>
            </div>
            <div className={styles.part4} >
                <div className={styles.solutionTitle}>
                    <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                        <div className={styles.leaf}></div>
                        <h1>CUSTOM SOLUTIONS</h1>
                    </div>
                    <ul>
                        <li>Choice to tailor the look & feel of your app</li>
                        <li>Give your customers a personalized experience</li>
                    </ul>
                </div>
                <img src="https://i.ibb.co/hfJNPVR/pic.png" alt="" />
            </div>
            <div className={styles.part1} >
                <div className={styles.solutionTitle}>
                    <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                        <div className={styles.leaf}></div>
                        <h1>CUSTOM SOLUTIONS</h1>
                    </div>
                    <ul>
                        <li>Choice to tailor the look & feel of your app</li>
                        <li>Give your customers a personalized experience</li>
                    </ul>
                </div>
                <img src="https://i.ibb.co/hfJNPVR/pic.png" alt="" />
            </div>
            <div className={styles.part2}>
                <h1>TELL US WHAT YOU LIKE</h1>
            </div>
            <div className={styles.main2}>
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
        </div>
    </>
  )
}

export default index