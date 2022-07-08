import  Axios  from 'axios';
import React, {useState} from 'react';

export default function DeleteOrder() {

    const [orderID, setOrderID] = useState("");

    const deletePartOfOrder = () => {
        Axios.delete("http://localhost:3001/deletePartOfOrder", {
         OrderID: orderID,
      }).then((response) => {
        console.log(response);
        });
      };


    return <div className="deletePartOfOrder">
        <h1>Delete Your Order Identifer</h1>
        <small>This will delete part of your order based on the ID of your order.</small>
         <h3>
           <label>Order ID Number</label>
        <input type="text"
        onChange={(e) => {
          setOrderID(e.target.value);
        }} 
        />
        <button onClick={deletePartOfOrder}> Delete </button>
        </h3>
        </div> 
}