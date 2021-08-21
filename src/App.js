import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import Special from "./components/pages/Special";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/book" exact component={Book} />
        <Route path="/products" exact component={Products} />
        <Route path="/services" exact component={Services} />
        <Route path="/special" exact component={Special} />
      </Switch>
    </Router>
  );
}

export default App;
