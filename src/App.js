import React from 'react'
import Router from './Routes/Route'
// import { Route, Routes } from 'react-router'
// import Auth from './component/Auth'
// import EmployeeListPage from './component/EmployeeListPage'
// import PrivateRoute from './Routes/PrivateRoute'

function App () {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/EmployeeListPage' element={<EmployeeListPage />} />
      </Routes> */}

      <Router />
      {/* <PrivateRoute props={props} /> */}
    </div>
  )
}

export default App
