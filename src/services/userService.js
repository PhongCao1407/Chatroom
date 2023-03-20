import axios from 'axios'

const baseURL = 'http://localhost:3001/api/users'

const signUp = async (userData) => {
    const response = await axios.post(baseURL, userData)
    return response.data
}


export default { signUp }