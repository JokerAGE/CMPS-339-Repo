import  Axios  from 'axios';
import React, {useState, useEffect} from 'react';

export default function ViewOrders(){

    const [orderID, setOrderID] = useState("");
    const [customerID, setCustomerID] = useState("");
    const [amount, setAmount] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [productID, setProductID] = useState("");
    const [orderPrice, setOrderPrice] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [orderList, setOrderList] = useState([]);

    const viewAllOrders = () => {
        Axios.get("http://localhost:3001/viewAllCustomerOrders", {
        OrderID: orderID,
         CustomerID: customerID,
         Amount: amount,
         ProductID: productID,
         ShippingAddress: shippingAddress,
         ProductPrice: productPrice,
         OrderPrice: orderPrice,
      }).then((response) => {
        setOrderList(response.data);
        });
      };

 
    return <div className="viewOrders">
        <h1>View Orders</h1>
        <small>View Orders from all Customers.</small>
         <h3>
        <button onClick={viewAllOrders}> View </button>
        </h3>

        {orderList.map((val)=> {
          return <h6> Order ID: {val.OrderID} | Customer ID: {val.CustomerID} |  Product ID: {val.ProductID} | Amount: {val.Amount} | ShippingAddress: {val.ShippingAddress} | Order Price: {val.OrderPrice}</h6>
            
       })}

        </div>

}