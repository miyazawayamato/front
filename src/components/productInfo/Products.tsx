import React, { useState, useEffect} from "react";
import axios from 'axios';
import Box from "./Box";
import Modal from "./Modal";
import AddProduct from "./AddProduct";
import ApiDelete from "../../functions/ApiDelete";

//カウント機能(スピナー機能)
//商品名と金額と個数
//保存ボタン(失敗のメッセージ)と削除ボタン(モーダル)



const Products = () => {
    
    const [name, changeName] = useState<string>("")
    const [sendId, setSendId] = useState<string>("");
    const [prod, setProd] = useState();
    const [disp, Toggle] = useState("none");
    
    useEffect(()=> {
        const fetchall = async () => {
            
            const res = await axios.get("http://localhost:8080/api/product/all");
            // setProducts(res.data);
            const productsData = res.data
            
            const Boxs = productsData.map((pro : any) => {
                // console.log(pro.name)
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
        
        ApiDelete("http://localhost:8080/api/product/delete", sendId)
        
        // window.location.reload();
    }
    return(
        <div>
            {/* {console.table(products)} */}
            <AddProduct />
            <table>
                <tbody>
                    {prod}
                    {/* <Box 
                        id="1"
                        name="商品A"
                        stock="23"
                        price="324"
                        func={openModal}
                    /> */}
                </tbody>
            </table>
            <Modal name={name} deledata={deleteData} disp={disp} close={closeModal}/>
        </div>
    );
}

export default Products