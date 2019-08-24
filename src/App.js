import React from "react";
import "./App.css";
import "./pages/homepage/homepage.styles.scss";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shope.component";

import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
