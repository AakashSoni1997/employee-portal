import axios from 'axios'

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
