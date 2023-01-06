import axios from 'axios';

const testCreatePostButton = () => {
    const promise = axios
    .get('http://localhost:3001/api/notes')
    .then(response => {        
        console.log('promise fulfilled')
        console.log(response.data)    
    })
}



export default {testCreatePostButton};