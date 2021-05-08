import Box from "./Box";
import Modal from "./Modal";
import React, { useState, useEffect} from "react";
import ApiGet from "../../functions/ApiGet";
import AddProduct from "./AddProduct";
import axios from 'axios';

//カウント機能(スピナー機能)
//商品名と金額と個数
//保存ボタン(失敗のメッセージ)と削除ボタン(モーダル)



const Products = () => {
    
    const [name, changeName] = useState<string>("")
    // const [products, setProducts] = useState<any>();
    const [prod, setProd] = useState();
    const [disp, Toggle] = useState("none");
    
    useEffect(()=> {
        const fetchall = async () => {
            
            const res = await axios.get("http://localhost:8080/api/product/all");
            // setProducts(res.data);
            const productsData = res.data
            
            const Boxs = productsData.map((pro : any) => {
                console.log(pro.name)
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
    
    
    //idと名前も 
    const openModal = (id : string, name : string) => {
        
        console.log(id)
        
        Toggle("block")
        // cssの調整
        changeName(name)
        
    }
    
    const closeModal = () => {
        Toggle("none")
    }
    
    const deleteData = () => {
        
        const deleteData = {
            
            name:name,
            body:"duhf"
            
        }
        console.log(deleteData)
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