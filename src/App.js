import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/login/Home";
import Login from "./components/login/Login";
import Footer from "./components/Layout/footer/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/Login" component={Login} />
        <Route path="/home" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
