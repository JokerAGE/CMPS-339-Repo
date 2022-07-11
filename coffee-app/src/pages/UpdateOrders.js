import  Axios  from 'axios';
import React, {useState} from 'react';

export default function SubmitOrder() {

    const [amount, setAmount] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [productID, setProductID] = useState("");
    const [customerID, setCustmerID] = useState("");
    const [orderID, setOrderID] = useState("");

const editOrders = () => {
    Axios.put("http://localhost:3001/updateCustomerOrders", {
      OrderID: orderID,  
      Amount: amount,
      ProductID: productID,
      CustomerID: customerID,
      ShippingAddress: shippingAddress,
  }).then(() => {
    console.log('success');
  });
};

    return <div className="createOrder">
    <h1>Edit your Order</h1>
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
    <label>Menu Item</label>
    <input type="text"
    onChange={(e) => {
      setProductID(e.target.value);
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
    <h4>
    <label>Order Queue Number</label>
    <input type="text"
    onChange={(e) => {
      setOrderID(e.target.value);
    }} 
    />
    </h4>
    <button onClick={editOrders}> Edit </button>
  </div>
}
