import React, { useState, useEffect} from "react";
import axios from 'axios';
import History from "./History";
import Modal from "./Modal";
import ApiDelete from "../../functions/ApiDelete";
import {host} from "../../Host"
import { Link } from "react-router-dom";


type Delivery = {
    id: number;
    customer: string;
    time:string;
    histories:HistoryType[]
}

type HistoryType = {
    id:number
    name:string;
    qty:number;
    price:number;
}


const Histories = () => {
    
    const [histries, setHistries] = useState<Delivery[]>([]);
    const [name, changeName] = useState<string>("");
    const [time, changeTime] = useState<string>("");
    const [url, changeUrl] = useState<string>("");
    const [sendId, setSendId] = useState<number>();
    const [disp, Toggle] = useState("none");
    
    useEffect(()=> {
        const fetchall = async () => {
            const res = await axios.get(host + "api/derivery/histories");
            const datas = res.data
            setHistries(datas)
        }
        fetchall();
        
    },[])
    
    const openModal = (id : number, name : string, time : string, url : string) => {
        
        setSendId(id)
        changeName(name)
        changeTime(time)
        changeUrl(url)
        Toggle("block")
        
    }
    
    const closeModal = () => {
        Toggle("none")
    }
    
    const deleteData = () => {
        
        ApiDelete(url + sendId)
        
        window.location.reload();
    }
    
    
    return(
        <div>
            <h4>納品履歴</h4>
            <table className="history-table">
                <thead>
                    <tr>
                        <th>登録日</th>
                        <th>企業名</th>
                        <th>総額</th>
                        <th>詳しく</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    {(histries && histries.map((his) =>
                        <History
                            key={his.id}
                            dId={his.id}
                            customer={his.customer}
                            time={his.time}
                            products={his.histories}
                            func={openModal}
                        />
                    ))}
                </tbody>
            </table>
            <Modal name={name} time={time} deledata={deleteData} disp={disp} close={closeModal}/>
            <Link to="/mainmenu" className="top-to-link">top</Link>
        </div>
    );
}

export default Histories