import React from 'react'
import styles from './ProductNotFound.module.css'

function ProductNotFound() {
  return (
    <div className={styles.productNotFound}>
      <div className={styles.productNotFoundContainer}>
        <h1>Product not found</h1>
        <div className={styles.productNotFoundText}>
          <p>Check the spelling of the word</p>
          <p>Browse the categories to find a similar product</p>
        </div>
      </div>
    </div>
  )
}

export default ProductNotFound