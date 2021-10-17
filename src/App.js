import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
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
