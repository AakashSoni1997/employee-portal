import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from '../component/Auth'
import EmployeeListPage from '../component/EmployeeListPage'
import AddEditEmployee from '../component/AddEditEmployee/AddEditEmployee'
import { usePrivateRoute } from './usePrivateRoute' // Import the custom hook

const Router = () => {
  const { isAuthenticated, privateNavigate } = usePrivateRoute() // Use the custom hook

  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route
        path='/employee-list'
        element={
          isAuthenticated() ? <EmployeeListPage /> : privateNavigate('/')
        }
      />
      <Route
        path='/add-employee'
        element={isAuthenticated() ? <AddEditEmployee /> : privateNavigate('/')}
      />
      <Route
        path='/update-employee/:id'
        element={isAuthenticated() ? <AddEditEmployee /> : privateNavigate('/')}
      />
    </Routes>
  )
}

export default Router
