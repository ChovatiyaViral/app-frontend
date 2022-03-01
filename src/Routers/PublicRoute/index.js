import React from 'react'
import { Navigate, Route } from 'react-router-dom';

export default function PublicRoutes(props) {
  let auth = true;
  return (
    <>
      {
        auth ?
          props.children
          :
          <Navigate to='/login' />
      }
    </>
  )
}
