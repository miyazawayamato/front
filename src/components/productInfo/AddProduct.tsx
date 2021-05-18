import React, { useState } from "react";
import ApiPost from "../../functions/ApiPost";
import {host} from "../../Host"


interface Post {
    name: string;
    stock: string;
    price: string;
}

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
        
        const result = await ApiPost(host + "api/product/create", PostData);
        console.table(result)
        window.location.reload();
    }
    
    return(
        <div className="add-product">
            <table className="products-table">
                <thead>
                    <tr>
                        <th className="products-th-name">商品名</th>
                        <th>在庫</th>
                        <th>単価</th>
                        <th>追加</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" name="newName" value={newValues.newName} onChange={valuesChange}/></td>
                        <td><input type="number"  name="newStock" value={newValues.newStock} onChange={valuesChange}/></td>
                        <td><input type="number"  name="newPrice" value={newValues.newPrice} onChange={valuesChange}/></td>
                        <td><button onClick={postProduct} type="button">追加する</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    
}

export default Addproduct