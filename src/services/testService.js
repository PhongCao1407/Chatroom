import axios from 'axios';

const testCreatePostButton = () => {
    const promise = axios
    .get('http://localhost:3001/api/notes/63bdca8b994a9da4b71c61e4')
    .then(response => {        
        console.log('promise fulfilled')
        console.log(response.data)    
    })
}



export default {testCreatePostButton};