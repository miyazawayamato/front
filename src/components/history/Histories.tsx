import React, { useState, useEffect} from "react";
import axios from 'axios';
import History from "./History";
import Modal from "./Modal";
import ApiDelete from "../../functions/ApiDelete";

type Delivery = {
    id: number;
    customer: string;
    time:string;
    histories:History[]
}

type History = {
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
            const res = await axios.get("http://localhost:8080/api/derivery/histories");
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
       console.log(url) 
       console.log(sendId) 
        
        // ApiDelete(url + sendId)
        
        // window.location.reload();
    }
    
    
    return(
        <div>
            <p>納品履歴</p>
            <table>
                <tbody>
                    {(histries && histries.map((his) =>
                        <History
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
        </div>
    );
}

export default Histories