import React, { useEffect, useState } from 'react'
import {
  BRANCH_API,
  DEPARTMENT_API,
  DESIGNATION_API,
  POST_ADD_EMPLOYEE,
  REGION_API,
  SALES_OFFICE_API
} from '../../utils/constant'
import { getWithBearerToken, postWithBearerToken } from '../../utils/method'

const useAddEditEmployee = () => {
  const [regionData, setRegionData] = useState([])
  const [branchData, setBranchData] = useState([])
  const [salesData, setSalesData] = useState([])
  const [departmentData, setDepartmentData] = useState([])
  const [designationData, setDesignationData] = useState([])
  const onSubmit = data => {
    postWithBearerToken(POST_ADD_EMPLOYEE, data)
  }

  useEffect(() => {
    getWithBearerToken(REGION_API).then(res => {
      setRegionData(res)
    })
    getWithBearerToken(BRANCH_API).then(res => {
      setBranchData(res)
    })
    getWithBearerToken(SALES_OFFICE_API).then(res => {
      setSalesData(res)
    })
    getWithBearerToken(DEPARTMENT_API).then(res => {
      setDepartmentData(res)
    })
    getWithBearerToken(DESIGNATION_API).then(res => {
      setDesignationData(res)
    })
  }, [])

  return {
    onSubmit,
    regionData,
    branchData,
    salesData,
    departmentData,
    designationData
  }
}

export default useAddEditEmployee
