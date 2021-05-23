import React, { useEffect, useState} from "react";
import axios from 'axios';
import Box from "./Box";
import Modal from "../productInfo/Modal";
import ApiDelete from "../../functions/ApiDelete";
import AddCustomer from "./AddCustomer";
import {host} from "../../Host"
import { Link } from "react-router-dom";


type CustomerType = {
    id: string;
    name: string;
    address: string;
    phone:number;
}

const Customer = () => {
    
    const [customers, setCustomers] = useState<CustomerType[]>([]);
    const [name, changeName] = useState<string>("");
    const [disp, Toggle] = useState("none");
    const [sendId, setSendId] = useState<string>("");
    
    useEffect(()=> {
        const fetchall = async () => {
            
            const res = await axios.get(host + "api/customers");
            setCustomers(res.data)
        }
        fetchall();
        
    },[])
    
    const openModal = (id : string, name : string) => {
        
        // //送る用のidにセット
        setSendId(id)
        // // モーダルに表示される名前をセット
        changeName(name)
        // //モーダルを開く、クラスの変更
        Toggle("block")
    }
    const closeModal = () => {
        Toggle("none")
    }
    
    const deleteData = () => {
        
        ApiDelete(host + "api/customer/delete/" + sendId)
        
        window.location.reload();
    }
    
    
    return (
        <div>
            <h4>納品先管理・編集</h4>
            <AddCustomer />
            <table className="products-table">
                <thead>
                    <tr>
                        <th className="customer-th-35">納品先</th>
                        <th className="customer-th-tell">電話番号</th>
                        <th className="customer-th-35">住所</th>
                        <th>更新</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((cust ) => 
                        <Box 
                            id={cust.id}
                            name={cust.name}
                            address={cust.address}
                            phone={cust.phone}
                            func={openModal}
                        />
                    )}
                </tbody>
            </table>
            <Modal name={name} deledata={deleteData} disp={disp} close={closeModal}/>
            <Link to="/mainmenu" className="top-to-link">top</Link>
        </div>
    );
}

export default Customer