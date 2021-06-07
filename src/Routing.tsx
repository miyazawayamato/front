import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Customer from './components/customer/Customer';
import SelectProd from './components/delivery/SelectProd';
import SelectCusto from './components/delivery/SelectCusto';
import Confirm from './components/delivery/Confirm';
import Histories from './components/history/Histories';
import Products from './components/productInfo/Products';

const Routing = () => {
    return(
        <div className="main">
            <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Menu}></Route>
                <Route path="/mainmenu" component={Menu}></Route>
                <Route path="/customers" component={Customer }></Route>
                <Route path="/select/products" component={SelectProd}></Route>
                <Route path="/select/customer" component={SelectCusto}></Route>
                <Route path="/confirm" component={Confirm}></Route>
                <Route path="/history" component={Histories}></Route>
                <Route path="/products" component={Products}></Route>
            </Switch>
            </Router>
        </div>
    );
}

export default Routing