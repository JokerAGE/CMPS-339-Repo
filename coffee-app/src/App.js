import logo from './logo.svg';
import './App.css';
import  Axios  from 'axios';
import React, {useState} from 'react';



function App() {

const [firstNameReg, setFirstNameReg] = useState("");
const [lastNameReg, setLastNameReg] = useState("");
const [addressReg, setAddressReg] = useState("");

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [address, setAddress] = useState("");

const register = () => {
  Axios.post("http://localhost:3001/register", {
    FirstName: firstNameReg,
    LastName: lastNameReg,
    Address: addressReg,
}).then((response) => {
  console.log(response);
  });
};

const login = () => {
  Axios.post("http://localhost:3001/login", {
    FirstName: firstName,
    LastName: lastName,
    Address: address,
}).then((response) => {
  console.log(response);
  });
};

  return (
    <div className="App">
      <div className="registration">
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
      <div className="logIn">
        <h1>Login</h1>
        <input 
        type="text" 
        placeholder="First Name..." 
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        />
        <input 
        type="text" 
        placeholder="Last Name..." 
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        />
        <button onClick={login}> Login </button>
      </div>
    </div>
  );
}

export default App;
