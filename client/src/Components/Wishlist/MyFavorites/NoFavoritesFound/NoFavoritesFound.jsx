import React from 'react'
import styles from './NoFavoritesFound.module.css'
import noFavorites from '../../../../Images/noFavorites.png'


function NoFavoritesFound() {
  return (
    <div className={styles.noFavoritesFound}>
        <h1>Nothing found 😭</h1>
        <img src={noFavorites} />
    </div>
  )
}

export default NoFavoritesFound