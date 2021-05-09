import React, { useState } from "react";

type Props = {
    
    name: string;
    stock: string;
    price: string;
}


const Box:React.FC<Props> = ({name, stock, price}) => {
    
    const [values, setValues] = useState({name: name, stock : stock, price: price});
    
    
    const valuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eValue:string  = e.target.value
        const eName = e.target.name
        setValues({ ...values, [eName] : eValue });
    }
    
    return(
        <tr>
            <td><input type="text" defaultValue={values.name} name="name"/></td>
            <td><input  type="number" defaultValue={stock} onChange={valuesChange} name="stock"/></td>
            <td><input  type="number" defaultValue={price} onChange={valuesChange} name="price"/></td>
        </tr>
    );
}

export default Box