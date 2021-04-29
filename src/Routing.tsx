import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import TopPage from './components/top/TopPage';
import Menu from './components/menu/Menu';

const Routing = () => {
    return(
        <div className="main">
            <Router >
            <Switch>
                <Route exact path="/" component={TopPage}></Route>
                <Route path="/mainmenu" component={Menu}></Route>
            </Switch>
            </Router>
        </div>
    );
}

export default Routing