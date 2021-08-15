import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path="/shop">
            <Header></Header>
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Header></Header>
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Header></Header>
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <Header></Header>
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
