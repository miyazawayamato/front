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
                />
                <Box 
                    image="画像"
                    title="納品履歴"
                />
                <Box 
                    image="画像"
                    title="在庫管理"
                />
                <Box 
                    image="画像"
                    title="商品情報"
                />
                <Box 
                    image="画像"
                    title="納品先"
                />
                <Box 
                    image="画像"
                    title="ユーザー管理"
                />
            </div>
        </div>
    );
}

export default Menu