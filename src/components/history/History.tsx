import React, { useState } from "react";

type Product = {
    name:string;
    qty:number;
    price:number;
}
type Props = {
    customer: string;
    time:string;
    products:Product[];
}

const History:React.FC<Props> = ({customer, time, products}) => {
    
    const [display, changeDisplay] = useState<string>("none");
    
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
            </tr>
            <tr className={display}>
                <th>商品名</th>
                <th>単価</th>
                <th>個数</th>
                <th>合計</th>
            </tr>
            {(products.map((pro) => 
            <tr className={display} key={pro.name}>
                <td>{pro.name}</td>
                <td>{pro.price}</td>
                <td>{pro.qty}</td>
                <td>1245</td>
            </tr>
            ))}
        </React.Fragment>
    );
}

export default History