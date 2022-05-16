import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import CartItem from './CartItem';
import { useAuth0 } from '@auth0/auth0-react';
import { getPayment, getUser } from '../../Redux/Actions/index';
import styles from "./PurchaseSummary.module.css"
import { Button } from '@mui/material';
import { TYPES } from "../../Redux/Actions/shoppingCartActions";
import { Link } from 'react-router-dom';
import Profile from '../Auth0/Profile';
export const PurchaseResult = () => {

  const usuarios = useSelector(state => state.users2)
  const dispatch = useDispatch();
  const { user } = useAuth0()
  const navigate = useNavigate()
  const obj = {}
  let { search } = useLocation()
  let query = new URLSearchParams(search)
  let payment = query.get("payment_id")
  let status = query.get("collection_status")
  let mensaje = ""
  obj.payment = payment

  if (user) {
    obj.email = user.email
  }
  const postUserActive = (userActive) => {

    dispatch({ type: TYPES.USER_ACTIVE, payload: userActive });
  };
  localStorage.removeItem("carrito")
  function handleClick(e) {
    e.preventDefault()
    if (user) {
      postUserActive(user)
      dispatch(getPayment(obj))
      // navigate("/")
    }
  }

  switch (status) {
    case "approved":
      mensaje = "Your payment is approved, Thank you for shopping on our website."
      break;
    case "in_process":
      mensaje = "Your payment is pending, we will inform you by mail. Thank you for shopping on our website."
      break;
    case "rejected":
      mensaje = "Your payment is rejected, you can try making the purchase again with another card"
      break;
    default:
      break;
  }


  return (
    <div className={styles.purchaseResult}>
      <div className={styles.productNotFound}>
        <div className={styles.productNotFoundContainer}>

          <h1>{mensaje}</h1>
          <div className={styles.productNotFoundText}>
          </div>
        </div>
        <div className={styles.hideProduct}>
          <Profile />
        </div>
      </div>
      <Link to="/">
        <Button variant="contained" className={styles.backToSite} onClick={{ handleClick }}> Back to Site</Button>
      </Link>
    </div>


  )
}
