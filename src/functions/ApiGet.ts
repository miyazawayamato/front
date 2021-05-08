import axios from 'axios';

const ApiGet : any = (url : string, callback : any) => {
    axios
        .get(url)
        .then(response => (callback(response)))
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
            return false;
        });
}

export default ApiGet