import  Axios  from 'axios';
import React, {useState} from 'react';

export default function Registration() {

    const [firstNameReg, setFirstNameReg] = useState("");
    const [lastNameReg, setLastNameReg] = useState("");
    const [addressReg, setAddressReg] = useState("");
    const [billingAddressReg, setBillingAddressReg] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/register", {
          FirstName: firstNameReg,
          LastName: lastNameReg,
          Address: addressReg,
          BillingAddress: billingAddressReg,
      }).then((response) => {
        console.log(response);
        });
      };

    return <div className="registration">
    <h1>Registration</h1>
    <h4>
    <label>First Name</label>
    <input type="text"
    onChange={(e) => {
      setFirstNameReg(e.target.value);
    }} 
    />
    </h4>
    <h4>
    <label>Last Name</label>
    <input type="text"
    onChange={(e) => {
      setLastNameReg(e.target.value);
    }} 
    />
    </h4>
    <h4>
    <label>Address</label>
    <input type="text" 
    onChange={(e) => {
      setAddressReg(e.target.value);
    }} 
    />
    </h4>
    <h4>
    <label>Billing Address</label>
    <input type="text" 
    onChange={(e) => {
      setBillingAddressReg(e.target.value);
    }} 
    />
    </h4>
    <button onClick={register}> Register </button>
  </div>
}