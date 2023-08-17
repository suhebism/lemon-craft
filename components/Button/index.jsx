import React from 'react';
import styles from '../../styles/Home.module.css'

const index = (props) => {
  return (
    <div className={styles.customBtn}>{props.text}</div>
  )
}

export default index