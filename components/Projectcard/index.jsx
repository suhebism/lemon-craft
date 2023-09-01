import React from 'react';
import styles from '../../styles/Projects.module.css';
import Link from 'next/link';

const index = (props) => {
  return (
    <Link href='/' className={styles.card}>
        <img src={props.image} alt="" />
    </Link>
  )
}

export default index