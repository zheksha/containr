import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const Protected = ({ children }) => {
  const user = useSelector((state) => state.user)
  const location = useLocation()

  if (user?.isLoggedIn) {
    // User is logged in, check if we were redirected from somewhere
    const from = location.state?.from?.pathname || '/'
    if (location.state?.from) {
      // Redirect to the previous location
      return <Navigate to={from} replace={true} />
    } else {
      // No previous location, show children as usual
      return children
    }
  }

  // User is not logged in, redirect to login with current location as state
  return <Navigate to={'/login'} state={{ from: location }} />
}
