import  Axios  from 'axios';
import React, {useState} from 'react';

export default function Login() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");

    const[LogInStatus, setLoginStatus] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/login", {
          FirstName: firstName,
          LastName: lastName,
          Address: address,
      }).then((response) => {

        if(response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].FirstName + " is logged in.");
        }
        
        });
      };

    return <div className="logIn">
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

        <h1>{LogInStatus}</h1>
      </div>
}