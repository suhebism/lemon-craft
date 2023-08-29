import React from 'react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const index = () => {
  return (
    <div className={styles.aboutUs}>
        <div className={styles.aboutUsTitle}><img src="https://i.ibb.co/TBBmzWW/leaf.png" alt="" />WE ARE LEMONCRAFT</div>
        <h1>A digital agency that <br/>fortifies your brand online</h1>
        <div className={styles.aboutUsDetails}>
            <div style={{display:'flex', alignItems:'flex-start',justifyContent:'center', flexDirection:'column'}}>
                <p>Welcome to Lemon Craft, a zesty digital nub that was born out of the passion of two individuals. After completing their Masters in Business....</p>
                <Link href='/'>See more</Link>
            </div>
            <img src="https://i.ibb.co/Bft7vRd/Lemon-Slices-01.png" alt="" />
        </div>
    </div>
  )
}

export default index