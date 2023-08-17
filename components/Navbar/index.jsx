import React,{useState} from 'react';
import styles from '../../styles/Navbar.module.css';
import Button from '../Button';
import {motion} from "framer-motion";
import Link from 'next/link';

const index = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className={styles.appNavbar}>
        <Link href='/' className={styles.logo}><img src="https://i.ibb.co/sQmnKJs/logo.png" alt=""/><div>Lemon Craft</div></Link>
        <div className={styles.appNavbarMenu}>
            <Button text='Request a Demo'/>
            <div onClick={()=>setToggle(true)} className={styles.menu}>ME<br/>NU</div>
            {toggle &&(
                <motion.div 
                initial={{y:"-10",opacity:0,scale:0.5}}
                animate={{ y: 0,opacity:1,scale:1 }}
                className={styles.screenMenu}>
                    <div onClick={()=>setToggle(false)} className={styles.menuClose}>Close</div>
                    <motion.div className={styles.navlinks}>
                        <Link className={styles.navlink} href='about'>Design</Link>
                        <Link className={styles.navlink} href='about'>Branding</Link>
                        <Link className={styles.navlink} href='about'>Development</Link>
                        <Link className={styles.navlink} href='about'>About Us</Link>
                        <Link className={styles.navlink} href='about'>Why Choose Us</Link>
                        <Link className={styles.navlink} href='about'>How we work</Link>
                    </motion.div>
                    
                </motion.div>
            )}
        </div>
    </div>
  )
}

export default index