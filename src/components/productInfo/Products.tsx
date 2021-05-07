import Box from "./Box";
import Modal from "./Modal";
import React, { useState} from "react";
import ApiGet from "../../functions/ApiGet";
import AddProduct from "./AddProduct";
//カウント機能(スピナー機能)
//商品名と金額と個数
//保存ボタン(失敗のメッセージ)と削除ボタン(モーダル)



const Products = () => {
    
    const [name, changeName] = useState<string>("")
    //idと名前も 
    const openModal = (id : string, name : string) => {
        
        console.log(id)
        changeName(name)
        
    }
    
    const deleteData = () => {
        
        const deleteData = {
            
            name:name,
            body:"duhf"
            
        }
        console.log(deleteData)
    }
    
    // ApiGet("http://localhost:8080/api/product/all");
    
    return(
        <div>
            <AddProduct />
            <table>
                <tbody>
                    <Box 
                        id="1"
                        name="商品A"
                        stock="23"
                        price="324"
                        func={openModal}
                        />
                    <Box 
                        id="2"
                        name="商品B"
                        stock="2334"
                        price="994"
                        func={openModal}
                        />
                    <Box 
                        id="3"
                        name="商品C"
                        stock="7"
                        price="300"
                        func={openModal}
                    />
                </tbody>
            </table>
            <Modal name={name} deledata={deleteData} />
        </div>
    );
}

export default Products