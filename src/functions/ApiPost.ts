import axios from 'axios';

const ApiPost = (url : string, data : object) => {
    
    return axios.post(url, data);
    // console.log(url);
    // console.table(data);
}

export default ApiPost