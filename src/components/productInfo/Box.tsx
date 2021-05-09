import React, { useState } from "react";
import ApiPut from "../../functions/ApiPut";

type Props = {
    id: string;
    name: string;
    stock: string;
    price: string;
    func:(id : string, name : string) => any
}


const Box:React.FC<Props> = ({id, name, stock, price,func}) => {
    
    const [values, setValues] = useState({name: name, stock : stock, price: price});
    
    
    const valuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eValue:string  = e.target.value
        const eName = e.target.name
        setValues({ ...values, [eName] : eValue });
    }
    
    const putData = () => {
        
        const postData = {
            id:id,
            name:values.name,
            stock:values.stock,
            price:values.price
        };
        
        ApiPut("http://localhost:8080/api/product/put", postData)
        
        window.location.reload();
        
    }

    
    return(
        <tr>
            <td><input type="text" defaultValue={values.name} onChange={valuesChange} name="name"/></td>
            <td><input  type="number" defaultValue={stock} onChange={valuesChange} name="stock"/></td>
            <td><input  type="number" defaultValue={price} onChange={valuesChange} name="price"/></td>
            <td><button onClick={putData}>更新</button></td>
            <td><button onClick={() => func(id,name)}>削除</button></td>
        </tr>
    );
}

export default Box