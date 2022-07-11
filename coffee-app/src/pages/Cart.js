import  Axios  from 'axios';
import React, {useState, useEffect} from 'react';

export default function Cart(){

    const [orderID, setOrderID] = useState("");
    const [customerID, setCustomerID] = useState("");
    const [amount, setAmount] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [productID, setProductID] = useState("");
    const [cartList, setCartList] = useState([]);

    const viewCart = () => {
        Axios.get("http://localhost:3001/viewCarts", {
          OrderID: orderID,
         CustomerID: customerID,
         Amount: amount,
         ProductID: productID,
         ShippingAddress: shippingAddress,
      }).then((response) => {
        setCartList(response.data);
        });
      };

 
    return <div className="viewCOrders">
        <h1>View Orders</h1>
        <small>View Orders in your Cart.</small>
        <h4>
    <label>Customer Identification</label>
    <input type="text"
    onChange={(e) => {
      setCustomerID(e.target.value);
    }} 
    />
    </h4>
         <h3>
        <button onClick={viewCart}> View </button>
        </h3>

        {cartList.map((val)=> {
          return <h6> Order ID: {val.OrderID} | Customer ID: {val.CustomerID} |  Product ID: {val.ProductID} | Amount: {val.Amount} | ShippingAddress: {val.ShippingAddress} </h6>
            
       })}

        </div>

}