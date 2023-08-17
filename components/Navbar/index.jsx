import React,{useState} from 'react';
import styles from '../../styles/Navbar.module.css';
import Button from '../Button';
import { motion } from "framer-motion"

const index = () => {
    const [toggle, setToggle] = useState(false)
    
  return (
    <div className={styles.appNavbar}>
        <div className={styles.logo}><img src="https://i.ibb.co/sQmnKJs/logo.png" alt="" /></div>
        <div className={styles.appNavbarMenu}>
            <Button text='Request a Demo'/>
            <div onClick={()=>setToggle(true)} className={styles.menu}>ME<br/>NU</div>
            {toggle &&(
                <motion.div 
                animate={{ x: 100 }} transition={{ delay: 1 }} 
                className={styles.screenMenu}>
                    
                </motion.div>
            )}
        </div>
    </div>
  )
}

export default index