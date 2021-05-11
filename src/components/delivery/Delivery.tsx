import { useLocation} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';

type Product = {
    id: string;
    name: string;
    stock: number;
    price: string;
}

const Delivery = () => {
    
    const [prod, setProd] = useState();
    const [products, setProducts] = useState<Product[]>([])
    // let products : Product[] = []
    const location = useLocation()
    const result : string[] = location.search.slice(1).split( '&' );
    const id : string = result[0].replace("id=", "")
    
    useEffect(() => {
        const fetchall = async () => {
            
            const res = await axios.get("http://localhost:8080/api/product/all");
            // setProducts(res.data);
            const productsData = res.data
            
            const Boxs = productsData.map((pro : any) => {
                
                return(
                    <tr key={pro.id}>
                        <td><input type="text" defaultValue={pro.name} name="name" disabled/></td>
                        <td><input  type="number" maxLength={pro.stock} defaultValue="0" onChange={e => changeStock(e, pro.id)} name="stock"/></td>
                        <td><input  type="number" defaultValue={pro.price} name="price" disabled/></td>
                    </tr>
                );
                
            })
            
            const arr : Product[] = [];
            const objs = productsData.map((pro : any) => {
                
                const obj = {id : pro.id, name : pro.name, stock: 0, price : pro.price}
                arr.push(obj)
            })
            
            // console.table(arr)
            setProd(Boxs)
            setProducts(arr)
            // console.log(products)
            // products = arr
            // console.log(products)
        }
        fetchall();
    }, [])
    
    const addProduct = () => {
        
        
        let newArr = products.map((pro, i ) => {
            if (1 === i) {//ここで変更するオブジェクトを指定
                return {...pro, stock : 999};
            } else {
                return pro;
            }
        } )
        setProducts(newArr)
        console.log(products)
        
    }
    const changeStock = (e: React.ChangeEvent<HTMLInputElement>, proid : string) => {
        
        const newStock:number = Number(e.target.value)
        // console.log(newStock)
        
        let newArr = products.map((prod) => {
            if (prod.id == proid) {
                // return {...pro, stock : 999};
                return {...prod, stock : newStock};
            } else {
                return prod;
            }
        } )
        setProducts(newArr)
        // console.log(newArr)
        
        
    }
    
    return(
        <div>
            <p>{result[1].replace("customer=", "")}</p>
            <button onClick={addProduct}>lolool</button>
            <table>
                <tbody>
                    {prod}
                </tbody>
            </table>
        </div>
    );
}

export default Delivery