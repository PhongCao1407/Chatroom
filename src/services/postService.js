import axios from 'axios'

const baseURL = 'http://localhost:3001/api/posts'

let token = null

const getAllPosts = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const getAllPostsFromThread = async (threadName) => {
    const response = await axios.get(baseURL + '/threadName/' + threadName)
    return response.data
}


const setPostToken = newToken => {  
    token = `Bearer ${newToken}`
}

const createNewPost = async (data) => {
    console.log(data)

    const config = {    
        headers: { Authorization: token },  
    }

    const response = await axios.post(baseURL, data, config)
    return response.data
}


export default { createNewPost, setPostToken, getAllPosts, getAllPostsFromThread }