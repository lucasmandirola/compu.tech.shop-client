import React from 'react'
import { useSelector } from 'react-redux'
import Categories from '../../Categories/Categories'
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/Navbar'
import ProductCard from '../../ProductCard/ProductCard'
import styles from './MyFavorites.module.css'
import NoFavoritesFound from './NoFavoritesFound/NoFavoritesFound'

function MyFavorites() {
    const myFavorites = useSelector((state) => state.wishlist)
  return (
    <div className={styles.myFavorites}>
        <NavBar />
        <Categories />
        <div className={styles.favTitle}>
            <h1>My favorites:</h1>
        </div>
        <div className={styles.myFavoritesContainer}>
        { 
            myFavorites.length > 0 ?    
                    <div className={styles.cardsContainer}>
                        {   myFavorites.length > 0 ?
                                myFavorites.map(e => {
                                    return(
                                        <ProductCard 
                                            key={e.id}
                                            name={e.product[0]} 
                                            price={e.price[0]} 
                                            image={e.image[0]} 
                                            calification={e.calification[0]} 
                                        />
                                )})
                            : <NoFavoritesFound />
                        }
                    </div>
            : <NoFavoritesFound />
        }
        </div>
        <Footer />
    </div>
  )
}

export default MyFavorites