import React from 'react';
import styles from '../../styles/Projects.module.css';
import ProjectCard from '../Projectcard';

const index = () => {
  return (
    <div className={styles.main}>
        <div className={styles.title}><img src="https://i.ibb.co/PF8XCtG/leafy.png" alt="" />Our Projects</div>
        <div className={styles.projects}>
            <ProjectCard image='https://images.unsplash.com/photo-1692578824279-bbda6ca0bf34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' />
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',gap:'2rem',color:'#333333'}}>
                <h1>Name of Project</h1>
                <h5>Industry Name</h5>
                <p>Short description: Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
            </div>
            <ProjectCard image='https://images.unsplash.com/photo-1692578824279-bbda6ca0bf34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' />
            <ProjectCard image='https://images.unsplash.com/photo-1692578824279-bbda6ca0bf34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' />
            <ProjectCard image='https://images.unsplash.com/photo-1692578824279-bbda6ca0bf34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' />
            <ProjectCard image='https://images.unsplash.com/photo-1692578824279-bbda6ca0bf34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' />
        </div>
    </div>
  )
}

export default index