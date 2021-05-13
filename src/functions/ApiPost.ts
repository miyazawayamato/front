import axios from 'axios';

const ApiPost = (url : string, data : object) => {
    
    return axios.post(url, data);
    
}

export default ApiPost