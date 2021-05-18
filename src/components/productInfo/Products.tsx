import React, { useState, useEffect} from "react";
import axios from 'axios';
import Box from "./Box";
import Modal from "./Modal";
import AddProduct from "./AddProduct";
import ApiDelete from "../../functions/ApiDelete";
import {host} from "../../Host"

const Products = () => {
    
    const [name, changeName] = useState<string>("")
    const [sendId, setSendId] = useState<string>("");
    const [disp, Toggle] = useState("none");
    const [prod, setProd] = useState();
    
    useEffect(()=> {
        const fetchall = async () => {
            
            const res = await axios.get(host + "api/product/all");
            const productsData = res.data
            
            const Boxs = productsData.map((pro : any) => {
                
                return(
                    <Box 
                        key={pro.id}
                        id={pro.id}
                        name={pro.name}
                        stock={pro.stock}
                        price={pro.price}
                        func={openModal}
                    />
                );
                
            })
            setProd(Boxs)
            
        }
        fetchall();
        
    },[])
    
    
    const openModal = (id : string, name : string) => {
        
        //送る用のidにセット
        setSendId(id)
        // モーダルに表示される名前をセット
        changeName(name)
        //モーダルを開く、クラスの変更
        Toggle("block")
    }
    
    const closeModal = () => {
        Toggle("none")
    }
    
    const deleteData = () => {
        
        ApiDelete(host + "api/product/delete/" + sendId)
        
        window.location.reload();
    }
    return(
        <div>
            <h4>在庫管理・編集</h4>
            <AddProduct />
            <table className="products-table">
                <thead>
                    <tr>
                        <th className="products-th-name">商品名</th>
                        <th>在庫</th>
                        <th>単価</th>
                        <th>更新</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    {prod}
                </tbody>
            </table>
            <Modal name={name} deledata={deleteData} disp={disp} close={closeModal}/>
        </div>
    );
}

export default Products