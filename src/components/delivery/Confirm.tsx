import { useLocation} from 'react-router-dom';
import React, { useState, useEffect} from "react";
import ApiPost from "../../functions/ApiPost";

type Product = {
    id: number;
    name: string;
    stock: number;
    price: number;
}

type PostData = {
    customer : string;
    histories : PostHistories[]
    products : postProducts[]
}

type PostHistories = {
    name:string;
    qty:number;
    price:number;
}

type postProducts = {
    id : number;
    stock : number;
}

const Confirm = () => {
    const location = useLocation();
    const datas : any = location.state
    const customer : string = decodeURI(datas.customer)
    const [products, setProducts] = useState<Product[]>([])
    const [total, setTotal] = useState<number> ()
    
    useEffect(() => {
        const fetchall = () => {
            const newProducts : Product[]  = []
            let num : number = 0
            datas.products.map((pro : any) => {
                num += pro.price * pro.stock
                
                if (pro.stock > 0) {
                    newProducts.push(pro)
                }
            })
            // console.log(newProducts)
            setProducts(newProducts)
            setTotal(num)
        }
        
        fetchall();
    }, [])
    
    const postDeliveryData = () => {
        
        const histories : PostHistories[] = []
        const postProducts : postProducts[] = []
        products.map((pro) => {
            let obj1 = {name : pro.name, qty : pro.stock, price : pro.price}
            histories.push(obj1)
            let obj2 = {id : pro.id, stock : pro.stock}
            postProducts.push(obj2)
        })
        
        const postData : PostData = {
            customer: customer,
            histories: histories,
            products: postProducts
        }
        // console.log(postData)
        ApiPost("test", postData)
    }
    
    return(
        <div>
            <p>確認画面</p>
            <p>企業名:{customer}</p>
            <table>
                <thead>
                    <tr>
                        <th>商品名</th>
                        <th>単価</th>
                        <th>個数</th>
                        <th>商品合計</th>
                    </tr>
                </thead>
                <tbody>
                    {(products.map((pro) => 
                        <tr key={pro.id}>
                            <td>{pro.name}</td>
                            <td>{pro.price}</td>
                            <td>{pro.stock}</td>
                            <td>{pro.price * pro.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <span>{total}</span>
            <button onClick={postDeliveryData}>登録する</button>
        </div>
    );
}

export default Confirm