import Box from "./Box";
//カウント機能(スピナー機能)
//商品名と金額と個数
//保存ボタン(失敗のメッセージ)と削除ボタン(モーダル)

const Products = () => {
    return(
        <div>
            <table>
                <tbody>
                    <Box 
                        id="1"
                        name="商品A"
                        stock="23"
                        price="324"
                    />
                    <Box 
                        id="2"
                        name="商品B"
                        stock="2334"
                        price="994"
                    />
                    <Box 
                        id="3"
                        name="商品C"
                        stock="7"
                        price="300"
                    />
                </tbody>
            </table>
        </div>
    );
}

export default Products