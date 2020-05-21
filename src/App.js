import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import Booking from "./components/Booking/Booking";
import Login from "./components/login/Login";
import Footer from "./components/Layout/footer/Footer";
// import Test from "./components/Test";
// import Select from "./components/Select"
import RideCreation from "./components/Booking/RideCreation";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/Login" component={Login} />
        {/* <Route path="/booking" component={Booking} />
      <Route path="/test" component={Test} />
      <Route path="/Select" component={Select} /> */}
      <Route path="/" component={RideCreation}/>
        <Footer component={Footer}/>
      </div>
    </Router>
  );
}

export default App;