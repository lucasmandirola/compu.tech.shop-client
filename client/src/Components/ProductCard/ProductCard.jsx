import React from "react";
import styles from "./ProductCard.module.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import add from '../../Images/add.png'
import Wishlist from "../Wishlist/WishlistIcon/WishlistIcon";

function ProductCard({
  name,
  price,
  image,
  id,
  calification,
  addToCart,
}) {
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCard}>
        <div className={styles.productCardImgContainer}>
          <Link to={"/" + name.split("/").join("-")}>
            <img src={image} alt="" className={styles.productImg} />
          </Link>
        </div>
        <div className={styles.productCardInfo}>
          <Link to={"/" + name.split("/").join("-")}>
            <h3 className={styles.productCardName}>{name}</h3>
          </Link>
          <h3 className={styles.productCardPrice}>${price.toLocaleString('en-US')}</h3>
          <Rating
            name="half-rating"
            size="small"
            defaultValue={Number(calification)}
            precision={0.5}
            readOnly
            className={styles.productCardCalification}
          />
          <button className={styles.addBtn} onClick={() => addToCart(id)}><img src={add} alt="" /></button>
          <Wishlist id={id} name={name} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
