import React, { useState } from "react";

type Props = {
    id: string;
    name: string;
    stock: string;
    price: string;
}


const Box:React.FC<Props> = ({id, name, stock, price}) => {
    
    const [values, setValues] = useState({name: name, stock : stock, price: price});
    
    
    const valuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eValue:string  = e.target.value
        const eName = e.target.name
        setValues({ ...values, [eName] : eValue });
        // console.log(values.name);
        // console.log(values.stock);
    }
    
    const putData = () => {
        
        const postData = {
            id:id,
            name:values.name,
            email:values.stock,
            body:values.price
        };
        
        console.log(postData)
        
    }
    const deleteData = () => {
        
        
    }
    
    return(
        <tr>
            <td><input type="text" defaultValue={values.name} onChange={valuesChange} name="name"/></td>
            <td><input  type="number" defaultValue={stock} onChange={valuesChange} name="stock"/></td>
            <td><input  type="number" defaultValue={price} onChange={valuesChange} name="price"/></td>
            <td><button onClick={putData}>更新</button></td>
            <td><button onClick={deleteData}>削除</button></td>
        </tr>
    );
}

export default Box