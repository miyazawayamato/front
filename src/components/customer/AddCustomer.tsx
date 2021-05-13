import React, { useState } from "react";
import ApiPost from "../../functions/ApiPost";

interface Post {
    name: string;
    phone: string;
    address: string;
}

const AddCustomer = () => {
    
    const [newValues, setValues] = useState({newName: "", newPhone : "", newAddress: ""});
    
    const valuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const eValue:string  = e.target.value
        const eName = e.target.name
        console.log(eName)
        setValues({ ...newValues, [eName] : eValue });
        
        
    }
    
    const postProduct = async () => {
        
        
        const PostData : Post = {
            
            name:newValues.newName,
            phone:newValues.newPhone,
            address:newValues.newAddress
        };
        
        const result = await ApiPost("http://localhost:8080/api/customer/create", PostData);
        window.location.reload();
    }
    
    return(
        <div>
            <input type="text" name="newName" value={newValues.newName} onChange={valuesChange}/>
            <input type="tel"  name="newPhone" value={newValues.newPhone} onChange={valuesChange}/>
            <input type="text"  name="newAddress" value={newValues.newAddress} onChange={valuesChange}/>
            <button onClick={postProduct} type="button">追加する</button>
        </div>
    );
    
}

export default AddCustomer