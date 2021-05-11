import axios from 'axios';

const ApiPost = (url : string, data : object) => {
    
    console.table(data);
    return axios.post(url, data);
    // console.log(url);
}

export default ApiPost