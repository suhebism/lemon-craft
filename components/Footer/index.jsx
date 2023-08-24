import React from 'react';
import styles from '../../styles/Footer.module.css'
import Wrapper from '../Wrapper';
import Button from '../Button';
import Link from 'next/link';
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
          <p className={styles.rights}>Lemon Craft. All Rights Reserved.</p>
        </div>  
        <div className={styles.footerRight}>
          <Link href="/" className={styles.logo}>
            <img src="https://i.ibb.co/sQmnKJs/logo.png" alt="" />
            <h1>Lemon Craft</h1>
          </Link>
          <div className={styles.impLinks}>
            <Link href='/about'>About</Link>
            <Link href='/about'>Why Choose Us</Link>
            <Link href='/about'>How we work</Link>
          </div>
          <div className={styles.industries}>
            <h1>INDUSTRIES</h1>
            <div>
              <Link href='/about'>Healthcare</Link>
              <Link href='/about'>Edtech</Link>
              <Link href='/about'>Food Delivery</Link>
              <Link href='/about'>Travel</Link>
              <Link href='/about'>Real Estate</Link>
              <Link href='/about'>Fitness</Link>
              <Link href='/about'>Sports</Link>
              <Link href='/about'>E-commerce</Link>
              <Link href='/about'>Home Services</Link>
              <Link href='/about'>Pickup & Delivery</Link>
            </div>
          </div>
          <div className={styles.services}>
            <h1>SERVICES</h1>
            <div>
              <Link href='/about'>Strategy</Link>
              <Link href='/about'>Development</Link>
              <Link href='/about'>Design</Link>
              <Link href='/about'>Digital</Link>
              <Link href='/about'>Branding</Link>
            </div>
          </div>
          <div className={styles.tandc}>
              <Link href='/about'>Privacy Policy</Link>
              <Link href='/about'>Refund Policy</Link>
              <Link href='/about'>Terms & Conditions</Link>
          </div>
        </div>  
      </div>
    </>
  )
}

export default index