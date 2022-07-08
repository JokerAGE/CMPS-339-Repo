import  Axios  from 'axios';
import React, {useState} from 'react';

export default function AddProduct() {

    const [productName, setProductName] = useState("");
const [productSize, setProductSize] = useState("");

const addProduct = () => {
    Axios.post("http://localhost:3001/addProduct", {
      ProductName: productName,
      ProductSize: productSize,
  }).then((response) => {
    console.log(response);
    });
  };


    return <div className="addToOrder">
    <h1>Add Products</h1>
    <label>Product Name</label>
    <input type="text"
    onChange={(e) => {
      setProductName(e.target.value);
    }} 
    />
    <label>Product Size</label>
    <input type="text"
    onChange={(e) => {
      setProductSize(e.target.value);
    }} 
    />
    <button onClick={addProduct}> Add </button>
    </div>
}