import axios from 'axios'
import { toast } from 'react-toastify'
import { GET_EMPLOYEE_DETAILS } from './constant'

const getToken = () => {
  const token = localStorage.getItem('token')
  if (!token) {
    throw new Error('Token not found in localStorage')
  }
  return token
}

const handleResponse = response => {
  if (response.status === 200) {
    // toast.success(response.data.message)
    return response.data.data
  }
  throw new Error(`Request failed with status ${response.status}`)
}

const handleError = error => {
  toast.error(error.message)
  return null
}

const axiosInstance = axios.create({
  baseURL: 'http://drivequote-dev.webmyneproduct.com/api/' // Set the common base URL here
})

axiosInstance.interceptors.request.use(config => {
  const token = getToken()
  config.headers.Authorization = `Bearer ${token}`
  config.headers['Content-Type'] = 'application/json'
  return config
})

export const getWithBearerToken = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params })
    return handleResponse(response)
  } catch (error) {
    return handleError(error)
  }
}

export const authEmployee = async (url, body) => {
  try {
    const response = await axiosInstance.post(url, body)
    const data = handleResponse(response)

    if (data?.accessToken) {
      localStorage.setItem('token', data.accessToken)
    }

    return data
  } catch (error) {
    return handleError(error)
  }
}

export const postWithBearerToken = async (url, body) => {
  try {
    const response = await axiosInstance.post(url, body)
    return handleResponse(response)
  } catch (error) {
    return handleError(error)
  }
}

export const deleteWithBearerToken = async (url, body) => {
  try {
    const response = await axiosInstance.delete(url, body)
    return handleResponse(response)
  } catch (error) {
    return handleError(error)
  }
}

export const getEmployeeDetailsWithBearerToken = async id => {
  const url = `${GET_EMPLOYEE_DETAILS}${id}`
  try {
    const response = await axiosInstance.get(url)
    return handleResponse(response)
  } catch (error) {
    return handleError(error)
  }
}
