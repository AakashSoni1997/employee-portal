import React from 'react'
import { Route, Navigate } from 'react-router-dom'

// Define your PrivateRoute component
const PrivateRoute = ({ Auth, ...rest }) => {
  // Check if the user has an access token
  const isAuthenticated = !!localStorage.getItem('accessToken') // Assuming you store the token in localStorage
  console.log(isAuthenticated, 'isAuthenticated')

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          // If authenticated, render the protected component
          <Auth />
        ) : (
          // If not authenticated, navigate to the login page
          <Navigate to='/auth' replace={true} />
        )
      }
    />
  )
}

export default PrivateRoute
