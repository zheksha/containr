import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const Protected = ({ children }) => {
  const user = useSelector((state) => state.user)

  if (user?.isLoggedIn) {
    return children
  }
  return <Navigate to={'/login'} />
}
