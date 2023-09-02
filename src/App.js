import React from 'react'
import Router from './Routes/Route'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { Route, Routes } from 'react-router'
// import Auth from './component/Auth'
// import EmployeeListPage from './component/EmployeeListPage'
// import PrivateRoute from './Routes/PrivateRoute'

function App () {
  return (
    <div>
      <ToastContainer />
      <Router />
    </div>
  )
}

export default App
