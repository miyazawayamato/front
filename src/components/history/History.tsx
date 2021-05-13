import React, { useState } from "react";
import ApiDelete from "../../functions/ApiDelete";

type Props = {
    dId:number
    customer: string;
    time:string;
    products:Product[];
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
    const deleteDerivery : string = "http://localhost:8080/api/derivery/delete/" 
    const productDerivery : string = "http://localhost:8080/api/derivery/delete/products/history/" 
    
    const detailDisplay = () => {
        if (display === "none") {

            changeDisplay("")
        } else {
            changeDisplay("none")
        }
    }
    
    return(
        <React.Fragment>
            <tr>
                <td>{time}</td>
                <td>{customer}</td>
                <td>合計</td>
                <td><button onClick={detailDisplay}>詳しく</button></td>
                <td><button onClick={() => func(dId, customer, time, deleteDerivery)}>削除する</button></td>
            </tr>
            <tr className={display}>
                <th>商品名</th>
                <th>単価</th>
                <th>個数</th>
                <th>合計</th>
                <td>削除する</td>
            </tr>
            {(products.map((pro) => 
            <tr className={display} key={pro.name}>
                <td>{pro.name}</td>
                <td>{pro.price}</td>
                <td>{pro.qty}</td>
                <td>{pro.id}</td>
                <td><button onClick={() => func(pro.id, pro.name, customer, productDerivery)}>削除する</button></td>
            </tr>
            ))}
        </React.Fragment>
    );
}

export default History