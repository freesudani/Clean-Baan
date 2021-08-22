import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import Special from "./components/pages/Special";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Home} />
          <Route path="/book" exact component={Book} />
          <Route path="/products" exact component={Products} />
          <Route path="/services" exact component={Services} />
          <Route path="/special" exact component={Special} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
