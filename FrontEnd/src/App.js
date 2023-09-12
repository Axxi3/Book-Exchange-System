import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Screen/Home";
import Login from "./Screen/Login";
import CreateUser from "./Screen/CreateUser";
import Choose from "./Screen/Choose";
import Addproduct from "./Screen/Addproduct";
import Category from "./Screen/Category";
import Aboutus from "./Screen/Aboutus";
import Account from "./Screen/Account";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/newuser" element={<CreateUser />} />
          <Route exact path="/choose" element={<Choose />} />
          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/account" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
