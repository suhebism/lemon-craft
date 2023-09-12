import React from 'react'
import styles from '../../styles/Testimonials.module.css';
import TestimonialCard from '../TestimonialCard';
import TestimonialCard2 from '../TestimonialCard/TestimonialCard';

const index = () => {
  return (
    <div className={styles.main}>
        <TestimonialCard/>
        <TestimonialCard2/>
        <TestimonialCard/>
    </div>
  )
}

export default index;