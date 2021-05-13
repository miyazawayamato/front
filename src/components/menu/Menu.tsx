import { Link } from 'react-router-dom';
import Box from './Box';

const Menu = () => {
    return(
        <div>
            <h5 className="menu-title">メニュー</h5>
            <Link to="/">top</Link>
            <div className="menus">
                <Box 
                    title="納品"
                    link="/select/customer"
                />
                <Box 
                    
                    title="納品履歴"
                    link="/history"
                />
                <Box 
                    
                    title="在庫管理"
                    link="/products"
                />
                <Box 
                    
                    title="納品先"
                    link="/customers"
                />
                <Box 
                    
                    title="ユーザー管理"
                    link="/users"
                />
                {/* <Box 
                    
                    title="商品情報"
                    link=""
                /> */}
            </div>
        </div>
    );
}

export default Menu