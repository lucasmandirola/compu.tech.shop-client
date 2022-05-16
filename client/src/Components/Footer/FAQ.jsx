import React from 'react'
import {Link} from 'react-router-dom'
import styles from './FAQ.module.css'
import NavBar from '../NavBar/Navbar.jsx';

export default function About() {
  return (
    <div className={styles.productDetail}>
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
