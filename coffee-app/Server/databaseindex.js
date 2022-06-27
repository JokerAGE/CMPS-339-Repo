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

app.listen(3001, () => {
    console.log("running server");
});