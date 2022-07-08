import  Axios  from 'axios';
import React, {useState} from 'react';

export default function SubmitOrder() {

    const [amount, setAmount] = useState("");
const [shippingAddress, setShippingAddress] = useState("");
const [itemNumber, setItemNumber] = useState("");
const [customerID, setCustmerID] = useState("");

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

    return <div className="createOrder">
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
}