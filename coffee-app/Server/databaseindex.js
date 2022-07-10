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
const BillingAddress = req.body.BillingAddress;

    db.query("INSERT INTO Customer (FirstName, LastName, Address, BillingAddress) VALUES (?,?,?,?)",
    [FirstName, LastName, Address, BillingAddress],
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

            if(result.length > 0){
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

            app.delete("/deleteAllOrder", (req, res)=> {

                const CustomerID = req.body.CustomerID;

                db.query("DELETE FROM Orders WHERE CustomerID='?'",
                [CustomerID],
                (err, result) => {
                    console.log(err);
                }
                );
                
            });

            app.get("/api/viewAllOrders", (req, res)=>{
                const sqlSelect = "SELECT * FROM Orders";
                db.query(sqlSelect, (err, result) => {
                    res.send(result);
                });
            });

            app.get("/viewCustomers", (req, res)=>{
                const sqlSelect = "SELECT * FROM Customer";
                db.query(sqlSelect, (err, result) => {
                    res.send(result);
                });
            });

            

app.listen(3001, () => {
    console.log("running server");
});