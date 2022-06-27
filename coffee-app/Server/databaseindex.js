const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "admin",
    host: "selu-coffee-db.cgpvrip7vrxw.us-east-1.rds.amazonaws.com",
    password: "sunandmoon051701",
    database: "CMPS339db",
});

app.post("/register", (req, res)=> {

const FirstName = req.body.FirstName;
const LastName = req.body.LastName;
const Address = req.body.Address;

    db.query("INSERT INTO Customer (FirstName, LastName, Address) VALUES (?,?,?)",
    [FirstName, LastName, Address],
    (err, result) => {
        console.log(err);
    }
    );
});

app.post("/login", (req, res) => {

    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    
        db.query("SELECT * FROM Customer WHERE FirstName = ? AND LastName = ?",
        [FirstName, LastName],
        (err, result) => {

            if(err) {
            res.send({err: err})
            }

            if(result){
                res.send(result);
            } else {
                res.send({message: "Incorrect credentials"});
            }
        }
        );
    });

    app.post("/addProduct", (req, res)=> {

        const ProductName = req.body.ProductName;
        const ProductSize = req.body.ProductSize;
        
            db.query("INSERT INTO Product (ProductName, ProductSize) VALUES (?,?)",
            [ProductName, ProductSize],
            (err, result) => {
                console.log(err);
            }
            );
        });

        app.post("/sumbitOrders", (req, res)=> {

             const CustomerID = req.body.CustomerID;
            const ProductID = req.body.ProductID;
           const Amount = req.body.Amount;
            const ShippingAddress = req.body.ShippingAddress;
            
                db.query("INSERT INTO Orders (CustomerID, ProductID, Amount, ShippingAddress) VALUES (?,?,?,?)",
                [CustomerID, ProductID, Amount, ShippingAddress],
                (err, result) => {
                    console.log(err);
                }
                );
            });

            app.delete("/deletePartOfOrder", (req, res)=> {
                
                const OrderID = req.body.OrderID;

                db.query("DELETE FROM Orders WHERE OrderID = ?",
                [OrderID],
        (err, result) => {

            if(err) {
            res.send({err: err})
            }

            if(result){
                res.send(result);
            } else {
                res.send({message: "Incorrect credentials"});
            }
        }
                );
            });

app.listen(3001, () => {
    console.log("running server");
});