import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PublicRoutes(props) {
  const auth = localStorage.getItem('token');
  return (
    <>
      {
        !auth ?
          props.children
          :
          <Navigate to='/home' />
      }
    </>
  )
}
