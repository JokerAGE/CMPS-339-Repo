import  Axios  from 'axios';
import React, {useState} from 'react';

export default function Registration() {

    const [firstNameReg, setFirstNameReg] = useState("");
    const [lastNameReg, setLastNameReg] = useState("");
    const [addressReg, setAddressReg] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/register", {
          FirstName: firstNameReg,
          LastName: lastNameReg,
          Address: addressReg,
      }).then((response) => {
        console.log(response);
        });
      };

    return <div className="registration">
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
}