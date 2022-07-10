import  Axios  from 'axios';
import React, {useState} from 'react';

export default function DeleteOrder() {

    const [customerID, setCustomerID] = useState("");

    const deleteAllOfOrders = () => {
        Axios.delete("http://localhost:3001/deleteAllOrder", {
         CustomerID: customerID,
      }).then((response) => {
        console.log(response);
        });
      };


    return <div className="deleteAllOrders">
        <h1>Delete all of your Orders</h1>
        <small>This will delete part of your order based on your customer ID.</small>
         <h3>
           <label>Customer ID Number</label>
        <input type="text"
        onChange={(e) => {
          setCustomerID(e.target.value);
        }} 
        />
        <button onClick={deleteAllOfOrders}> Delete </button>
        </h3>
        </div> 
}