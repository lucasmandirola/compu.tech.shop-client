import React from 'react'
import styles from './About.module.css'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/Navbar'

export default function About() {
  return (
    <div className={styles.letter}>
    <NavBar/>
    <div className={styles.productDetailContainer}>
    <div className={styles.productDetailInfo}>

        <h1> 
            We are a young company made by young people who are passionate about technology. 
            Our mission is to bring options to those who seek it and to provide them with the best possible experience.
        </h1>
        <Link to='/'>
        <button>Back</button>
        </Link>


    </div>
   </div> 



</div>


  )
}