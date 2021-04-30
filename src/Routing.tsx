import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import TopPage from './components/top/TopPage';
import Menu from './components/menu/Menu';
import Customer from './components/customer/Customer';
import Delivery from './components/delivery/Delivery';
import History from './components/history/History';
import Products from './components/productInfo/Products';
import User from './components/user/User';

const Routing = () => {
    return(
        <div className="main">
            <Router >
            <Switch>
                <Route exact path="/" component={TopPage}></Route>
                <Route path="/mainmenu" component={Menu}></Route>
                <Route path="/customers" component={Customer }></Route>
                <Route path="/derivery" component={Delivery}></Route>
                <Route path="/history" component={History}></Route>
                <Route path="/products" component={Products}></Route>
                <Route path="/users" component={User}></Route>
            </Switch>
            </Router>
        </div>
    );
}

export default Routing