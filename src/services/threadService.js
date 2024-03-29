import axios from 'axios'

const baseURL = 'http://localhost:3001/api/threads'

let token = null

const getAllThreads = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const getThread = async (threadName) => {
    const response = await axios.get(baseURL + '/threadName/' + threadName)
    return response.data
}

const setThreadToken = newToken => {  
    token = `Bearer ${newToken}`
}

const createNewThread = async (data) => {
    const config = {    
        headers: { Authorization: token },  
    }

    const response = await axios.post(baseURL, data, config)
    return response.data
}


export default { createNewThread, setThreadToken, getThread, getAllThreads }