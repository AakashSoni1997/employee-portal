// usePrivateRoute.js
import { Navigate } from 'react-router-dom'

export function usePrivateRoute () {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token')
    return !!token
  }

  const privateNavigate = path => {
    if (!isAuthenticated()) {
      return <Navigate to='/' />
    }

    return <Navigate to={path} />
  }

  return { isAuthenticated, privateNavigate }
}
