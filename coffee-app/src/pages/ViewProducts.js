import  Axios  from 'axios';
import React, {useState, useEffect} from 'react';

export default function ViewMenu(){
    
    const [productPrice, setProductPrice] = useState("");
    const [productName, setProductName] = useState("");
    const [productSize, setProductSize] = useState("");
    const [productID, setProductID] = useState("");
    const [productList, setProductList] = useState([])

    const viewMenu = () => {
        Axios.get("http://localhost:3001/viewMenu", {
        ProductID: productID,
        ProductName: productName,
        ProductSize: productSize,
        ProductPrice: productPrice,
      }).then((response) => {
        setProductList(response.data)
        });
      };

 

    return <div className="viewCustomers">
        <h1>View our Menu!</h1>
        <small>List of All Drinks and Food</small>
        <h4>
        <small>Price shown is before 10% tax is added.</small>
        </h4>
         <h3>      
        <button onClick={viewMenu}> View </button>
        </h3>

       {productList.map((val)=> {
          return <h6> ProductID: {val.ProductID} |  Product Name: {val.ProductName} | Product Size: {val.ProductSize} | Product Price: {val.ProductPrice} </h6>
            
       })}

        </div>

       
        
        

}