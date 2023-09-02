import axios from 'axios'
import { toast } from 'react-toastify'

export const getWithBearerToken = async (url, bearerToken) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    })

    if (response.status === 200) {
      return response.data.data
    } else {
      console.error(`Request failed with status ${response.status}`)
      return null
    }
  } catch (error) {
    console.error('An error occurred:', error)
    return null
  }
}

export const authEmployee = async (url, body) => {
  try {
    const response = await axios.post(url, body)

    if (response.status === 200) {
      return response.data.data
    } else {
      console.error(`Request failed with status ${response.status}`)
      return null
    }
  } catch (error) {
    console.error('An error occurred:', error)
    return null
  }
}

export const postWithBearerToken = async (url, body) => {
  try {
    const token = localStorage.getItem('token')

    if (!token) {
      throw new Error('Token not found in localStorage')
    }

    const response = await axios.post(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      toast.success(response.data.message)
      return response.data.data
    }

    throw new Error(`Request failed with status ${response.status}`)
  } catch (error) {
    toast.error(error.message)
    return null
  }
}

export const deleteWithBearerToken = async (url, body) => {
  try {
    const token = localStorage.getItem('token')

    if (!token) {
      throw new Error('Token not found in localStorage')
    }

    const response = await axios.delete(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      toast.success(response.data.message)
      return response.data.data
    }

    throw new Error(`Request failed with status ${response.status}`)
  } catch (error) {
    toast.error(error.message)
    return null
  }
}
