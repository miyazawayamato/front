import React, { useState, useEffect } from "react";
import {host} from "../../Host"
import {TimeStampFormat}  from "./TimeFormat"


type Props = {
    dId:number
    customer: string;
    time:string;
    products:Product[];
    key:number;
    func:(id : number, name : string, time : string, url : string) => any
}
type Product = {
    id:number
    name:string;
    qty:number;
    price:number;
}

const History:React.FC<Props> = ({dId, customer, time, products , func}) => {
    
    const [display, changeDisplay] = useState<string>("none");
    const [total, setTotal] = useState<number>();
    const deleteDerivery : string = host + "api/derivery/delete/" 
    const productDerivery : string = host + "api/derivery/delete/products/history/" 
    
    useEffect(()=> {
        
        const totalCul  = () => {
            
            let total = 0
            products.map((pro) => {
                total += pro.qty * pro.price
            })
            setTotal(total)
        }
        totalCul();
    },[])
    
    const detailDisplay = () => {
        if (display === "none") {
            changeDisplay("")
        } else {
            changeDisplay("none")
        }
    }
    
    
    return(
        <React.Fragment>
            <tr className="history-tr-bold">
                <td>{TimeStampFormat(time)}</td>
                <td>{customer}</td>
                <td>{total}</td>
                <td><button onClick={detailDisplay}>詳しく</button></td>
                <td><button onClick={() => func(dId, customer, time, deleteDerivery)}>削除する</button></td>
            </tr>
            <tr className={display} >
                <th>商品名</th>
                <th>単価</th>
                <th>個数</th>
                <th>合計</th>
                <th>削除する</th>
            </tr>
            {(products.map((pro) => 
            <tr className={display} key={pro.name}>
                <td>{pro.name}</td>
                <td>{pro.price}</td>
                <td>{pro.qty}</td>
                <td>{pro.price * pro.qty}</td>
                <td><button onClick={() => func(pro.id, pro.name, customer, productDerivery)}>削除する</button></td>
            </tr>
            ))}
        </React.Fragment>
    );
}

export default History