import axios from 'axios';

const ApiPut = (url : string, data : object) => {
    
    axios.put(url, data).then(res => {
        // console.log(res.data);
        return res;
    })
}

export default ApiPut