import axios from 'axios';

const ApiDelete = (url : string, sendId : string) => {
    
    // return axios.delete(url, data);
    
    axios.delete(url, { data : sendId}).then(res => {
        console.log(res.data);
        return res;
    })
}

export default ApiDelete