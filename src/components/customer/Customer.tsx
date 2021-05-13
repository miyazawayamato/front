import React, { useEffect, useState} from "react";
import axios from 'axios';
import Box from "./Box";
import Modal from "../productInfo/Modal";
import ApiDelete from "../../functions/ApiDelete";
import AddCustomer from "./AddCustomer";

type Customer = {
    id: string;
    name: string;
    address: string;
    phone:number;
}

const Customer = () => {
    
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [name, changeName] = useState<string>("");
    const [disp, Toggle] = useState("none");
    const [sendId, setSendId] = useState<string>("");
    
    useEffect(()=> {
        const fetchall = async () => {
            
            const res = await axios.get("http://localhost:8080/api/customers");
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
        
        ApiDelete("http://localhost:8080/api/customer/delete/" + sendId)
        
        window.location.reload();
    }
    
    
    return (
        <div>
            <p>納品先</p>
            <table>
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
            <AddCustomer />
            <Modal name={name} deledata={deleteData} disp={disp} close={closeModal}/>
        </div>
    );
}

export default Customer