import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import Special from "./components/pages/Special";
import { AnimatePresence } from "framer-motion";
import Booking from "./components/Booking";

function App() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
      <Navbar setShowModal={setShowModal} />
      <Booking showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Home} />
          <Route path="/book" exact component={Book} />
          <Route path="/products" exact component={Products} />
          <Route path="/services" exact component={Services} />
          <Route path="/special" exact component={Special} />
        </Switch>
      </AnimatePresence>
    </AnimatePresence>
  );
}

export default App;
