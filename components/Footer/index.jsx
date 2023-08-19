import React from 'react';
import styles from '../../styles/Footer.module.css'
import Wrapper from '../Wrapper'
const index = () => {
  return (
    <>
    <Wrapper>
      <div className={styles.appFooter}>
        <div className={styles.footerLeft}>
          <div className={styles.subscribe}></div>
          <div className={styles.mobilesUpdate}></div>
        </div>  
        <div className={styles.footerRight}></div>  
      </div> 
      </Wrapper>
    </>
  )
}

export default index