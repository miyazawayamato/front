import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <div>
            <Link to="/">top</Link>
            <p>メニューがじゃいります</p>
            <div>
                <div>納品</div>
                <div>納品履歴</div>
                <div>在庫管理</div>
                <div>商品情報の管理</div>
                <div>納品先</div>
                <div>ユーザー管理</div>
            </div>
        </div>
    );
}

export default Menu