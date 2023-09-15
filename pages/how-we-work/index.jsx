import React from 'react';
import styles from '../../styles/HowWeWork.module.css';
import {BsArrowRight} from 'react-icons/bs'

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
        <div className={styles.workPrecess}>
            <p style={{textTransform:'uppercase',color:'white'}}>OUR WORK PROCESS</p>
            <h1 style={{textTransform:'uppercase',color:'white'}}>LOREM IPSUM DOLOR SIT AMET</h1>
            <p style={{width:'60%',textAlign:'center'}}>When we collaborate, we commit to cradling your brand with you. We commit to giving it the same affection and devotion as you. We commit to building it with you.</p>
            <div className={styles.workPrecessStaged}>
                <div>
                    <div className={styles.box1}>1</div>
                    <h2>Backgrounding</h2>
                </div>
                <BsArrowRight/>
                <div>
                    <div className={styles.box2}>2</div>
                    <h2>Analyzing</h2>
                </div>
                <BsArrowRight/>
                <div>
                    <div className={styles.box1}>3</div>
                    <h2>Constructing</h2>
                </div>
                <BsArrowRight/>
                <div>
                    <div className={styles.box2}>4</div>
                    <h2>Reviewing</h2>
                </div>
            </div>
        </div>
        <div style={{margin:'5% 0 0 5%',display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column'}}>
            <div className={styles.box1}>1</div>
            <h2>Backgrounding</h2>
        </div>
        <div className={styles.cycle}>
            
            {/* <img src="https://i.ibb.co/x3MPzXw/line.png" alt="" /> */}
        </div>
    </>
  )
}

export default index