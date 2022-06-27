import logo from './logo.svg';
import './App.css';
import  Axios  from 'axios';
import React, {useState} from 'react';
import {Route, Link} from "react-router-dom";





function App() {

const [firstNameReg, setFirstNameReg] = useState("");
const [lastNameReg, setLastNameReg] = useState("");
const [addressReg, setAddressReg] = useState("");

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [address, setAddress] = useState("");

const [productName, setProductName] = useState("");
const [productSize, setProductSize] = useState("");

const [amount, setAmount] = useState("");
const [shippingAddress, setShippingAddress] = useState("");
const [itemNumber, setItemNumber] = useState("");
const [customerID, setCustmerID] = useState("");

const register = () => {
  Axios.post("http://localhost:3001/register", {
    FirstName: firstNameReg,
    LastName: lastNameReg,
    Address: addressReg,
}).then((response) => {
  console.log(response);
  });
};

const login = () => {
  Axios.post("http://localhost:3001/login", {
    FirstName: firstName,
    LastName: lastName,
    Address: address,
}).then((response) => {
  console.log(response);
  });
};

const addProduct = () => {
  Axios.post("http://localhost:3001/addProduct", {
    ProductName: productName,
    ProductSize: productSize,
}).then((response) => {
  console.log(response);
  });
};

const submitOrders = () => {
  Axios.post("http://localhost:3001/sumbitOrders", {
    Amount: amount,
    ProductID: itemNumber,
    CustomerID: customerID,
    ShippingAddress: shippingAddress,
}).then((response) => {
  console.log(response);
  });
};

  return (
    <div className="App">

    
      <div className="registration">
        <h1>Registration</h1>
        <label>First Name</label>
        <input type="text"
        onChange={(e) => {
          setFirstNameReg(e.target.value);
        }} 
        />
        <label>Last Name</label>
        <input type="text"
        onChange={(e) => {
          setLastNameReg(e.target.value);
        }} 
        />
        <label>Address</label>
        <input type="text" 
        onChange={(e) => {
          setAddressReg(e.target.value);
        }} 
        />
        <button onClick={register}> Register </button>
      </div>

      <div className="logIn">
        <h1>Login</h1>
        <input 
        type="text" 
        placeholder="First Name..." 
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        />
        <input 
        type="text" 
        placeholder="Last Name..." 
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        />
        <button onClick={login}> Login </button>
      </div>

      <div className="addToOrder">
        <h1>Add Products</h1>
        <label>Product Name</label>
        <input type="text"
        onChange={(e) => {
          setProductName(e.target.value);
        }} 
        />
        <label>Product Size</label>
        <input type="text"
        onChange={(e) => {
          setProductSize(e.target.value);
        }} 
        />
        <button onClick={addProduct}> Add </button>
        </div>
        
      <div className="createOrder">
        <h1>Submit your Order</h1>
        <label>Amount</label>
        <input type="text"
        onChange={(e) => {
          setAmount(e.target.value);
        }} 
        />
        <label>Shipping Address</label>
        <input type="text"
        onChange={(e) => {
          setShippingAddress(e.target.value);
        }} 
        />
        <label>Item Number</label>
        <input type="text"
        onChange={(e) => {
          setItemNumber(e.target.value);
        }} 
        />
        <label>Customer Identification</label>
        <input type="text"
        onChange={(e) => {
          setCustmerID(e.target.value);
        }} 
        />
        <button onClick={submitOrders}> Submit </button>
      </div>
    </div>
  );
}


export default App;
