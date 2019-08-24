import React from "react";
import "./App.css";
import "./pages/homepage/homepage.styles.scss";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>Hello Hats</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
