import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
