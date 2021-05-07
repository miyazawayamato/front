import React, { useState } from "react";
import ApiPost from "../../functions/ApiPost";

interface Post {
    name: string;
    stock: string;
    price: string;
}

// 商品から消す

const Addproduct = () => {
    
    const [newValues, setValues] = useState({newName: "", newStock : "", newPrice: ""});
    
    const valuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const eValue:string  = e.target.value
        const eName = e.target.name
        setValues({ ...newValues, [eName] : eValue });
        
        
    }
    
    const postProduct = async () => {
        
        
        const PostData : Post = {
            
            name:newValues.newName,
            stock:newValues.newStock,
            price:newValues.newPrice
        };
        
        const result = await ApiPost("http://localhost:8080/api/product/create", PostData);
        console.table(result)
    }
    
    return(
        <div>
            <input type="text" name="newName" value={newValues.newName} onChange={valuesChange}/>
            <input type="number"  name="newStock" value={newValues.newStock} onChange={valuesChange}/>
            <input type="number"  name="newPrice" value={newValues.newPrice} onChange={valuesChange}/>
            <button onClick={postProduct} type="button">追加する</button>
        </div>
    );
    
}

export default Addproduct