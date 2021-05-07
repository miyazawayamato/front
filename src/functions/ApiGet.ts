import axios from 'axios';

const ApiGet = (url : string) => {
    axios
        .get(url)
        .then((results) => {
            console.log(results.data);
            return results.data;
        })
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
            return 
        });
}

export default ApiGet