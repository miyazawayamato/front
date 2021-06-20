import axios from 'axios';

const ApiPut = (url : string, data : object) => {
    
    axios.put(url, data).then(res => {
        return res;
    })
}

export default ApiPut