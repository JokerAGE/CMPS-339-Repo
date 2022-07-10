import logo from './logo.svg';
import './App.css';
import  Axios  from 'axios';
import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Registration from './pages/Registration';
import Login from './pages/Login';
import AddProduct from './pages/AddProduct';
import SubmitOrder from './pages/SubmitOrder';
import DeleteOrder from './pages/DeleteOrder';
import ViewOrders from './pages/ViewOrders';
import ViewCustomers from './pages/ViewCustomers';

function App() {

  return (

    <div className="App">

    <Navbar />

    <div className= "container">
      <Routes>
       <Route path="/" element={ <Home />} />
       <Route path="/registration" element={ <Registration />} />
       <Route path="/logins" element={ <Login />} />
       <Route path="/add" element={ <AddProduct />} />
       <Route path="/sumbit" element={ <SubmitOrder />} />
       <Route path="/delete" element={ <DeleteOrder />} />  
       <Route path="/viewOrders" element={ <ViewOrders />} />
       <Route path="/viewCustomers" element={ <ViewCustomers />} />  
      </Routes>

    </div>
        
    </div>
  );
}


export default App;
