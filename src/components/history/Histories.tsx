// import ApiGet from "../../functions/ApiGet";
import React, { useState, useEffect} from "react";
import axios from 'axios';
import History from "./History";

type Delivery = {
    id: number;
    customer: string;
    time:string;
    histories:History[]
}

type History = {
    name:string;
    qty:number;
    price:number;
}


const Histories = () => {
    
    const [histries, setHistries] = useState<Delivery[]>([]);
    
    useEffect(()=> {
        const fetchall = async () => {
            const res = await axios.get("http://localhost:8080/api/derivery/histories");
            const datas = res.data
            setHistries(datas)
        }
        fetchall();
        
    },[])
    
    
    return(
        <div>
            <p>納品履歴</p>
            <table>
                <tbody>
                    {(histries && histries.map((his) =>
                        <History
                            customer={his.customer}
                            time={his.time}
                            products={his.histories}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Histories