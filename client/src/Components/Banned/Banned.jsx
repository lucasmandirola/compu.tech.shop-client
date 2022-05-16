import React from 'react'
import styles from './Banned.module.css'
import banned from '../../Images/banned.png'

function Banned() {
  return (
    <div className={styles.banned}>
    <div className={styles.bannedContainer}>
        <h1>You has been banned!</h1>
        <img src={banned} alt="banned"/>
    </div>
</div>
  )
}

export default Banned