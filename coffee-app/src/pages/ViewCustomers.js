import  Axios  from 'axios';
import React, {useState, useEffect} from 'react';

export default function ViewCustomers(){
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [customerID, setCustomerID] = useState("");
    const [customerList, setCustomerList] = useState([])

    const viewAllCustomers = () => {
        Axios.get("http://localhost:3001/viewCustomers", {
        CustomerID: customerID,
        FirstName: firstName,
        LastName: lastName,
        Address: address,
      }).then((response) => {
        setCustomerList(response.data)
        });
      };

 

    return <div className="viewCustomers">
        <h1>View Customers</h1>
        <small>List of All Customers</small>
         <h3>      
        <button onClick={viewAllCustomers}> View </button>
        </h3>

       {customerList.map((val)=> {
          return <h6> First Name: {val.FirstName} |  Last Name: {val.LastName} | Address: {val.Address}</h6>
            
       })}

        </div>

       
        
        

}