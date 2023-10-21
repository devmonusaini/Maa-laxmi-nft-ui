import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Profile from "./Component/Profile";
import CreateNew from "./Component/CreateNew";
import Auction from "./Component/Auction";
import Home  from "./Component/Home";
import Sell from "./Component/Sell";
import Products from "./Component/Products";
import Marketplace from "./Component/Marketplace";
import { Route, Routes } from "react-router-dom";

const App=()=>{
  return(
    <>
    
    <Navbar/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/createNew" Component={CreateNew}/>
      <Route path="/auction" Component={Auction}/>
      <Route path="/profile" Component={Profile}/>
      <Route path="/sell" Component={Sell}/>
      <Route path="/products" Component={Products}/>
    
      <Route path="/marketplace" Component={Marketplace}/>

    </Routes>

    <Footer/>

    </>
  );
}

export default App;
