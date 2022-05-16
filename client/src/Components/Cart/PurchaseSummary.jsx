import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBuyCart } from "../../Redux/Actions";
import CartItem from "./CartItem";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";
import ProductCard from "../ProductCard/ProductCard";
import NavBar from "../NavBar/Navbar";
import { Link, useNavigate } from "react-router-dom"
import styles from "./PurchaseSummary.module.css"

const PurchaseSummary = () => {
  const obj = {};
  const dispatch = useDispatch();
  const productsFilter = useSelector((state) => state.cart);
  const userActive = useSelector(state => state.userActive)
  const arregloPrice = productsFilter.map((el) => el.price * el.quantity);
  const reducir = (accumulator, curr) => accumulator + curr;
  let arregloTotal
  const navigate = useNavigate()
  // console.log(userActive.email)
  if (arregloPrice.length > 0) { arregloTotal = arregloPrice.reduce(reducir) }

  const handleBuyCart = (e) => {
    e.preventDefault();
    const nuevoPost = productsFilter.map((el) => {
      return {
        picture_url: el.image,
        name: el.name,
        price: el.price,
        quantity: el.quantity,
      };
    });
    obj.name = nuevoPost.map((el) => el.name);
    obj.picture_url = nuevoPost.map((el) => el.picture_url);
    obj.price = nuevoPost.map((el) => Number(el.price));
    obj.quantity = nuevoPost.map((el) => el.quantity);
    JSON.stringify(obj);
    dispatch(postBuyCart(obj));
    setTimeout(function () {
      navigate("/purchaseConfirm")
    }, 2000)
  };
  const delFromCart = (id, all = false) => {
    all
      ? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };
  const addToCart = (id) => {
    // console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };


  return (

    <div >
      <NavBar />
      <div className={styles.summaryContainer} >

        <div>
          {
            productsFilter.length > 0 && arregloTotal.length !== 0 ?
              productsFilter.map((el) => (
                <ProductCard
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  key={el.id}
                  id={el.id}
                  brand={el.brand}
                  description={el.description}
                  calification={el.calification}
                  quantity={el.quantity}
                  addToCart={addToCart}
                  delFromCart={delFromCart}
                />

              )) : (<div className={styles.productNotFound}>
                <div className={styles.productNotFoundContainer}>
                  <h1>Cart Empty</h1>
                  <div className={styles.productNotFoundText}>
                    <p>Check all products</p>
                    <p>Browse the categories to find a product</p>
                  </div>
                  <button onClick={() => navigate("/")}>Back to Products</button>
                </div>
              </div>)
          }</div>
        {(arregloPrice.length !== 0 ?
          <div className={styles.containerImgBtn}>
            <label className={styles.text}>Total Price:  $ {arregloTotal}</label>
            <button className={styles.btn} onClick={handleBuyCart}>Comprar</button>
          </div>
          : null)}

      </div>
      <br />
    </div >
  );
};

export default PurchaseSummary;
