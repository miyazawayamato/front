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
    
    const postCustomer = async () => {
        
        
        const PostData : Post = {
            
            name:newValues.newName,
            phone:newValues.newPhone,
            address:newValues.newAddress
        };
        
        await ApiPost("http://localhost:8080/api/customer/create", PostData);
        window.location.reload();
    }
    
    return(
        <div className="add-product">
            <table className="products-table">
                <thead>
                    <tr>
                        <th className="customer-th-35">納品先</th>
                        <th className="customer-th-tell">電話番号</th>
                        <th className="customer-th-35">住所</th>
                        <th>追加</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" name="newName" value={newValues.newName} onChange={valuesChange}/></td>
                        <td><input type="tel"  name="newPhone" value={newValues.newPhone} onChange={valuesChange}/></td>
                        <td><input type="text"  name="newAddress" value={newValues.newAddress} onChange={valuesChange}/></td>
                        <td><button onClick={postCustomer} type="button">追加する</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    
}

export default AddCustomer