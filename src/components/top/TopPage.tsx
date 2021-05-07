import Intro from './Intro';
import { useHistory } from 'react-router-dom';
//デザイン
const TopPage = () => {
    
    const history = useHistory();
    const handleLink = (path: string) : void => history.push(path);
    
    return(
        <div>
            <div className="top-title">
                <h2>在庫管理アプリ</h2>
            </div>
            <div>
                <button onClick={() => handleLink('/')}>新規登録</button>
                <button onClick={() => handleLink('/mainmenu')}>ログイン</button>
                <button onClick={() => handleLink('/mainmenu')}>テストユーザー</button>
            </div>
            <div>
                <h4>紹介文</h4>
                <div className="intros">
                    <Intro 
                        text="商品情報の管理"
                        title="在庫の個数から単価・名前等の変更を簡単に行うことができます"
                    />
                    <Intro 
                        text="pdfファイルの生成"
                        title="納品書をpdfファイルで書き出し利用する事ができます"
                    />
                    <Intro 
                        text="ログイン機能"
                        title="アカウントと管理も楽にできます。テストユーザーがあるのでそちらをご利用ください"
                    />
                    <Intro 
                        text="SPAのサイトです"
                        title="ページ遷移をストレスなく行うことが可能です"
                    />
                </div>
            </div>
        </div>
    );
}

export default TopPage