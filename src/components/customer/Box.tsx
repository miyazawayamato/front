import React, { useState } from "react";
import ApiPut from "../../functions/ApiPut";
import {host} from "../../Host"


type Props = {
    id: string;
    name: string;
    address: string;
    phone:number;
    func:(id : string, name : string) => any
}


const Box:React.FC<Props> = ({id, name, phone, address,func}) => {
    
    const [values, setValues] = useState({name: name, phone : phone, address: address});
    
    
    const valuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eValue:string  = e.target.value
        const eName = e.target.name
        setValues({ ...values, [eName] : eValue });
    }
    
    const putData = () => {
        
        const postData = {
            id:id,
            name:values.name,
            phone:values.phone,
            address:values.address
        };
        
        
        ApiPut(host + "api/customer/put", postData)
        
        window.location.reload();
        
    }

    
    return(
        <tr>
            <td><input type="text" defaultValue={name} onChange={valuesChange} name="name"/></td>
            <td><input  type="number" defaultValue={phone} onChange={valuesChange} name="phone"/></td>
            <td><input  type="text" defaultValue={address} onChange={valuesChange} name="address"/></td>
            <td><button onClick={putData}>更新</button></td>
            <td><button onClick={() => func(id,name)}>削除</button></td>
        </tr>
    );
}

export default Box