import { useLocation, useHistory} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';
// import ApiPost from "../../functions/ApiPost";

type Product = {
    id: number;
    name: string;
    stock: number;
    price: number;
}

const SelectProd = () => {
    
    const [prodArry, setProdArry] = useState<Product[]>([])
    // const [prodArry, setProdArry] = useState<Product[]>([{id:"", name : "",stock : 0, price  : ""}])
    const [products, setProducts] = useState<Product[]>([])
    const location = useLocation()
    const result : string[] = location.search.slice(1).split( '&' );
    // const id : string = result[0].replace("id=", "")
    
    useEffect(() => {
        const fetchall = async () => {
            
            const res = await axios.get("http://localhost:8080/api/product/all");
            const productsData = res.data
            setProducts(productsData);
            
            const arr : Product[] = [];
            productsData.map((pro : any) => {
                
                const obj = {id : pro.id, name : pro.name, stock: 0, price : pro.price}
                arr.push(obj)
            })
            setProdArry(arr)
        
        }
        fetchall();
    }, [])
    
    const changeStock = (e: React.ChangeEvent<HTMLInputElement>, proid : number) => {
        
        const newStock:number = Number(e.target.value)
        // console.log(prodArry)
        
        let newArr = prodArry.map((prod) => {
            if (prod.id === proid) {
                return {...prod, stock : newStock};
            } else {
                return prod;
            }
        } )
        setProdArry(newArr)
        // console.log(prodArry)
        
        
    }
    
    const history = useHistory();
    const confirm = () : void => history.push({
        pathname: '../confirm',
        state: { products :prodArry, customer : result[1].replace("customer=", "")}
    });
    
    return(
        <div>
            <p>{decodeURI(result[1].replace("customer=", ""))}</p>
            <table>
                <thead>
                    <tr>
                        <th>商品名</th>
                        <th>単価</th>
                        <th>個数</th>
                    </tr>
                </thead>
                <tbody>
                    {(products && products.map((pro) =>
                        <tr key={pro.id}>
                            <td><input type="text" defaultValue={pro.name} disabled/></td>
                            <td><input  type="number" defaultValue={pro.price} disabled/></td>
                            <td><input  type="number" max={pro.stock} defaultValue="0" onChange={e => changeStock(e, pro.id)} name={pro.name}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={confirm}>確認画面へ</button>
        </div>
    );
}

export default SelectProd