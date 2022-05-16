import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import styles from './AdminNav2.module.css'
import { useSelector } from 'react-redux'

function AdminNav2() {
  const authenticated = useSelector((state) => state.authenticated)
  const isAdminPro = authenticated.is_admin_pro

  return (
    <div className={styles.adminNavBar}>
        <div className={styles.adminButtons}>
          <Link to='/admin/products/Allproducts'>
            <Button variant="outlined" style={{margin: '0 10px'}}>Products</Button>
          </Link>
          <Link to='/admin/categories'>
            <Button variant="outlined" style={{margin: '0 10px'}}>Categories</Button>
          </Link>
          <Link to='/admin/allorders'>
            <Button variant="outlined" style={{margin: '0 10px'}}>Orders</Button>
          </Link>
          <Link to='/admin/users'>
            <Button variant="outlined" style={{margin: '0 10px'}}>Users</Button>
          </Link>
          {
          isAdminPro ? 
            <Link to='/admin/manager'>
              <Button variant="outlined" style={{margin: '0 10px', color:'green', borderColor: 'green'}}>Admin manager</Button>
            </Link>
          : null
          }
        </div>
    </div>
  )
}

export default AdminNav2