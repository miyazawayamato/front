import { useLocation, useHistory} from 'react-router-dom';
import React, { useState, useEffect} from "react";
import ApiPost from "../../functions/ApiPost";
import {host} from "../../Host"


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
    const location = useLocation()
    const history = useHistory()
    const datas : any = location.state
    const customer : string = decodeURI(datas.customer)
    const [products, setProducts] = useState<Product[]>([])
    const [total, setTotal] = useState<number> ()
    const [withTax, setWithTax] = useState<number> ()
    const handleLink = (path: string) : void => history.push(path)
    
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
            setWithTax(Math.round(num * 1.1))
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
        ApiPost(host + "api/derivery/register", postData)
        
        handleLink("/mainmenu");
    }
    
    return(
        <div>
            <h4>????????????</h4>
            <p className="selpro-customer">????????????{customer}</p>
            <table className="confirm-table">
                <thead>
                    <tr>
                        <th className="selpro-th-name">?????????</th>
                        <th className="selpro-th-price">??????</th>
                        <th className="selpro-th-price">??????</th>
                        <th className="selpro-th-price">????????????</th>
                    </tr>
                </thead>
                <tbody>
                    {(products.map((pro) => 
                        <tr key={pro.id}>
                            <td>{pro.name}</td>
                            <td className="text-right">{pro.price}???</td>
                            <td className="text-right">{pro.stock}</td>
                            <td className="text-right">{pro.price * pro.stock}???</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="confirm-post">
                <p>??????{total}???</p>
                <p>?????????{withTax}???</p>
                <button onClick={postDeliveryData}>????????????</button>
            </div>
        </div>
    );
}

export default Confirm