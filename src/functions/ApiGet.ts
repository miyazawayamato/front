import axios from 'axios';

const ApiGet : any = (url : string) => {
    axios
        .get(url)
        .then((results) => {
            // console.log(results.data);
            return results;
        })
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
            return false;
        });
}

export default ApiGet