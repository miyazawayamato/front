import { Link } from 'react-router-dom';
import Box from './Box';

const Menu = () => {
    return(
        <div>
            <Link to="/">top</Link>
            <p>メニューがじゃいります</p>
            <div>
                <Box 
                    image="画像"
                    title="納品"
                    link="/select/customer"
                />
                <Box 
                    image="画像"
                    title="納品履歴"
                    link="/history"
                />
                <Box 
                    image="画像"
                    title="在庫管理"
                    link="/products"
                />
                <Box 
                    image="画像"
                    title="納品先"
                    link="/customers"
                />
                <Box 
                    image="画像"
                    title="ユーザー管理"
                    link="/users"
                />
                <Box 
                    image="画像"
                    title="商品情報"
                    link=""
                />
            </div>
        </div>
    );
}

export default Menu