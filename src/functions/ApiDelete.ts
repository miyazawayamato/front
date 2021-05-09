import axios from 'axios';

const ApiDelete = (url : string) => {
    
    // return axios.delete(url, data);
    
    axios.delete(url).then(res => {
        console.log(res.data);
        return res;
    })
}

export default ApiDelete