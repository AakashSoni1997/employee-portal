import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from '../component/Auth'
import EmployeeListPage from '../component/EmployeeListPage'
import AddEditEmployee from '../component/AddEditEmployee'

const Router = () => {
  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/EmployeeListPage' element={<EmployeeListPage />} />
      <Route path='/add-employee' element={<AddEditEmployee />} />
      <Route path='/update-employee' element={<AddEditEmployee />} />
    </Routes>
  )
}

export default Router
