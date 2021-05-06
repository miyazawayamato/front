import { useLocation} from 'react-router-dom';
import React, { useState, useEffect } from "react";
// /商品と納品先を取ってきて
// 商品は個数(max指定)を選択、納品先は普通に一つ選択
// 確認モーダル 金額(税あり・なし)・個数・納品先
// post


const Delivery = () => {
    const [products, setProducts] = useState([{}])
    const location = useLocation()
    const result : string[] = location.search.slice(1).split( '&' );
    const id : string = result[0].replace("id=", "")
    
    useEffect(() => {
        console.log(products)
    }, [])
    
    const addProduct = (pId : string) => {
        
        setProducts([...products, {}])
        
    }
    
    return(
        <div>
            <p>{result[1].replace("customer=", "")}</p>
            <button onClick={ () => addProduct("1")}>商品を追加する</button>
            <button onClick={ () => addProduct("2")}>商品を追加する</button>
            <button onClick={ () => addProduct("3")}>商品を追加する</button>
        </div>
    );
}

export default Delivery