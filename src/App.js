import React from 'react'
import Router from './Routes/Route'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <div>
      <ToastContainer />
      <Router />
    </div>
  )
}

export default App
