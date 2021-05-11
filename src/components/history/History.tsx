// import ApiGet from "../../functions/ApiGet";
import React, { useState, useEffect} from "react";
import axios from 'axios';

// productsやcustoerと同じ容量


const History = () => {
    
    const [histo, setHisto] = useState();
    
    useEffect(()=> {
        const fetchall = async () => {
            const res = await axios.get("http://localhost:8080/api/derivery/histories");
            const histories = res.data
            
            const Boxs = histories.map((history : any) => {
                
                return(
                    <div key={history.id}>{history.id}</div>
                );
                
            })
            setHisto(Boxs)
            
        }
        fetchall();
        
    },[])
    
    
    return(
        <div>
            <p>納品履歴</p>
            {histo}
        </div>
    );
}

export default History