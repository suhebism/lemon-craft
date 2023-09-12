import React from 'react';
import styles from '../../styles/Blogs.module.css';
import Link from 'next/link';
import {BsArrowRight} from 'react-icons/bs'

const index = () => {
  return (
    <div className={styles.main}>
        <div className={styles.title}><img src="https://i.ibb.co/TBBmzWW/leaf.png" alt="" />OUR BLOGS</div>
        <div className={styles.blogCards}>
        <div className={styles.blogCard}>
          <img src="https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" alt="" />
          <div style={{margin:'1rem 2rem'}}>
            <h3>Blog Title</h3>
            <div style={{ display:'flex', alignItems:'center',justifyContent:'space-between'}}>
              <Link href='/'>#development</Link>
              <Link href='/' className={styles.blogEnterLink}><BsArrowRight/></Link>
            </div>
          </div>
        </div>
        <div className={styles.blogCard}>
          <img src="https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" alt="" />
          <div style={{margin:'1rem 2rem'}}>
            <h3>Blog Title</h3>
            <div style={{ display:'flex', alignItems:'center',justifyContent:'space-between'}}>
              <Link href='/'>#development</Link>
              <Link href='/' className={styles.blogEnterLink}><BsArrowRight/></Link>
            </div>
          </div>
        </div>
        <div className={styles.blogCard}>
          <img src="https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" alt="" />
          <div style={{margin:'1rem 2rem'}}>
            <h3>Blog Title</h3>
            <div style={{ display:'flex', alignItems:'center',justifyContent:'space-between'}}>
              <Link href='/'>#development</Link>
              <Link href='/' className={styles.blogEnterLink}><BsArrowRight/></Link>
            </div>
          </div>
        </div>
        <div className={styles.blogCard}>
          <img src="https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" alt="" />
          <div style={{margin:'1rem 2rem'}}>
            <h3>Blog Title</h3>
            <div style={{ display:'flex', alignItems:'center',justifyContent:'space-between'}}>
              <Link href='/'>#development</Link>
              <Link href='/' className={styles.blogEnterLink}><BsArrowRight/></Link>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default index