const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { response } = require("express");

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
        const ProductPrice = req.body.ProductPrice;
        
            db.query("INSERT INTO Product (ProductName, ProductSize, ProductPrice) VALUES (?,?,?)",
            [ProductName, ProductSize, ProductPrice],
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
            
                db.query("INSERT INTO CoffeeOrders (CustomerID, ProductID, Amount, ShippingAddress) VALUES (?,?,?,?)",
                [CustomerID, ProductID, Amount, ShippingAddress],
                (err, result) => {
                    console.log(err);
                }
                );

            });

            app.delete("/deleteAllOrder", (req, res)=> {

                const CustomerID = req.body.CustomerID;

                db.query("DELETE FROM CoffeeOrders WHERE CustomerID = ?",
                [CustomerID],
                (err, result) => {
                    console.log(err);
                }
                );
                
            });

            app.get("/viewAllCustomerOrders", (req, res)=>{
                const sqlSelect = "SELECT * FROM CoffeeOrders";
                db.query(sqlSelect, (err, result) => {
                    res.send(result.data);
                });
            });

            app.get("/viewCustomers", (req, res)=>{
                const sqlSelect = "SELECT * FROM Customer";
                db.query(sqlSelect, (err, result) => {
                    res.send(result);
                });
            });

            app.get("/viewMenu", (req, res)=>{
                const sqlSelect = "SELECT * FROM Product";
                db.query(sqlSelect, (err, result) => {
                    res.send(result);
                });
            });

            app.put("/updateCustomerOrders", (req, res)=> {
                const OrderID = req.body.OrderID;
                const CustomerID = req.body.CustomerID;
                const ProductID = req.body.ProductID;
                const Amount = req.body.Amount;
                const ShippingAddress = req.body.ShippingAddress;

                db.query("Update CoffeeOrders set ProductID = ?, Amount = ?, ShippingAddress = '?'  where CustomerID = ? AND OrderID = ?",
                [CustomerID, ProductID, Amount, ShippingAddress, OrderID],
                (err, result) => {
                    if (err){
                      console.log(err);
                    }else{
                      res.send(result);
                    }
                  }
                );
            });

            app.get("/viewCarts", (req, res)=>{
                const CustomerID = req.body.CustomerID;

                db.query("SELECT * FROM CoffeeOrders WHERE CustomerID = ?",
                [CustomerID],
                (err, result) => {
                    res.send(result);
                });
            });

            

app.listen(3001, () => {
    console.log("running server");
});