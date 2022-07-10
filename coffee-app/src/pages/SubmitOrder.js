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
    <h4>
      <label>Amount</label>
    <input type="text"
    onChange={(e) => {
      setAmount(e.target.value);
    }} 
    />
    </h4>
    <h4>
    <label>Shipping Address</label>
    <input type="text"
    onChange={(e) => {
      setShippingAddress(e.target.value);
    }} 
    />
    </h4>
    <h4>
    <label>Item Number</label>
    <input type="text"
    onChange={(e) => {
      setItemNumber(e.target.value);
    }} 
    />
    </h4>
    <h4>
    <label>Customer Identification</label>
    <input type="text"
    onChange={(e) => {
      setCustmerID(e.target.value);
    }} 
    />
    </h4>
    <button onClick={submitOrders}> Submit </button>
  </div>
}