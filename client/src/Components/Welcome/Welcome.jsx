import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUser, authenticate } from "../../Redux/Actions/index.js";
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './Welcome.module.css'
import logo3 from '../../Images/logo3.png'

function Welcome() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users)
  const auth0Email = user?.email
  const userLogged = users?.length > 0 ? users?.find(e => (e.email === auth0Email)) : false;

  useEffect(()  => {
    dispatch(getUser())
    dispatch(authenticate(userLogged))

  }, [dispatch])
  return (
    <div className={styles.welcome}>
        <div className={styles.welcomeContainer}>
            <h1>Welcome to CompuTechShop!</h1>
            <img src={logo3} alt="logo"/>
            <Link to='/'>
                <Button variant='outlined'>Go Shopping</Button>
            </Link>
        </div>
    </div>
  )
}

export default Welcome