import React from 'react';
import styles from '../../styles/Wework.module.css'
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
const index = () => {
  return (
    <>
    <div className={styles.main}>
        <div className={styles.verticalLine}>
            <p>USP</p>
            <img src="https://i.ibb.co/BLGT1fs/scroll-Cursor.png" alt="" />
        </div> 
        <div className={styles.titleSection}>
            <div className={styles.title}><img src="https://i.ibb.co/PF8XCtG/leafy.png" alt="" />HOW WE WORK</div>
            <h1>HAVE A PLAN? <br/>WE HAVE A PLAN <br/>FOR YOU.</h1>
        </div>
    </div>
    <div className={styles.main2}>
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1692871480784-4fd78f25459f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80" alt="" />
                <div className={styles.cardContent}>
                    <h2>1 Backgrounding</h2>
                    <p>1- To prepare the ground for a favourable collaboration, we acquaint ourselves with your mission and vision for the brand. </p>
                    <p>2- Our team of experts then briefs you about the various pathways that can help you capture the market as you envisaged</p>
                    <p>3- Being on the same page then allows us to further pursue your preferred pathway comprehensively.</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1692871480784-4fd78f25459f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80" alt="" />
                <div className={styles.cardContent}>
                    <h2>1 Backgrounding</h2>
                    <p>1- To prepare the ground for a favourable collaboration, we acquaint ourselves with your mission and vision for the brand. </p>
                    <p>2- Our team of experts then briefs you about the various pathways that can help you capture the market as you envisaged</p>
                    <p>3- Being on the same page then allows us to further pursue your preferred pathway comprehensively.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default index