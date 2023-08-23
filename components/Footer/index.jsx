import React from 'react';
import styles from '../../styles/Footer.module.css'
import Wrapper from '../Wrapper';
import Button from '../Button'
const index = () => {
  return (
    <>
      <div className={styles.appFooter}>
        <div className={styles.footerLeft}>
          <div className={styles.subscribe}>
            <h1>Subscribe to our newsletter.</h1>
            <p>Lorem ipsum dolor sit amet lorem.</p>
            <input type="text" name="" id="" placeholder='Your email id' />
            <div className={styles.footerBtn}>Submit</div>
          </div>
          <div className={styles.mobilesUpdate}>
            <h1>Whatsapp Updates</h1>
            <input type="text" name="" id="" placeholder='Your number' />
            <div className={styles.footerBtn}>Submit</div>
          </div>
        </div>  
        <div className={styles.footerRight}>
          
        </div>  
      </div>
    </>
  )
}

export default index