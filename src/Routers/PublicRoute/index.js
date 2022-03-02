import React from 'react'
import { Navigate } from 'react-router-dom';
import { auth } from '../../helper';

export default function PublicRoutes(props) {
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
