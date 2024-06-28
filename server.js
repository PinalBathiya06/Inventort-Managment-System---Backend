//import mysql from 'mysql'
// import express from 'express'
// import cors from 'cors'
 const express =require('express')
 const cors = require('cors')
 const session = require('express-session')
// const mysql = require('mysql')
const jwtKey = 'invoicer'


const app = express();

var corOptions = {
    origin : 'http://localhost:3000'
}
app.use(cors(corOptions));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: jwtKey,
    resave: false,
    saveUninitialized: true,
    name: 'connect.sid',
    cookie: {
        secure: false
    }
}));

const userRoute = require('./routes/userRoute.js')
const productRoute = require('./routes/productRoute.js')
const invoiceRoute = require('./routes/invoiceRoute.js');
const db = require('./models/index.js');
//const product  = require('./models/index.js');
//const Product = require('./models/product.js');
// const dbconn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '<PASSWORD>',
//     database: 'invoicer'
// });

app.use('/api/users' , userRoute)
app.use('/api/products' , productRoute)
app.use('/api/invoices' , invoiceRoute)

// POST /api/invoices/create
app.post("/api/invoices/create", (req, res) => {
    const invoiceData = req.body;
    // Here you would handle the creation of the invoice using the invoiceData
    // Example: Save the invoice data to a database
    // Example: Generate a PDF invoice and store it
    // Example: Send the invoice data to an external billing service
    // Respond with a success message or error message based on the result of invoice creation
    res.status(200).json({ message: "Invoice created successfully", data: invoiceData });
});



// app.get('/read/:id', (req, res) => {
//     const sql = "SELECT * FROM products WHERE id = ?";
//     const id = req.params.id;

//     dbconn.query(sql,[id], (err, result) => {
//         if (err) return res.json({Message: "Error"});
//         return res.json(result);
//     })
// })

// app.put('/update/:id',  (req, res) => {
//     const sql = "UPDATE products SET description =?, qty =?, price =? WHERE id =?";
//     const id = req.params.id;
//      dbconn.query(sql, [req.body.description, req.body.qty, price = req.body.price, id], (err, result) => {
//         if (err) return res.json({Message: "Error"});
//         return res.json(result);
//     })
// }) 
// //Create a route to handle PUT requests
// app.put('/products/:id', async (req, res) => {
//     // Get the user ID from the request parameters
//     const id = req.params.id;
//  // Define the Product model instance
//  const Product = {
//     findById: function(id) {
//         // Implement the logic to find a product by its id
//         // For example:
//         // return { id: id, description: 'Sample description', qty: 10, price: 10.00 };
//         return null;
//     }
// };
//     // Find the user in the database
//     const product = await Product.findById(id);
   
    
//     if (!product) {
//         // If the product is not found, send a 404 status code with an error message
//         res.status(404).send('Item not found');
//         return;
//     }
    
//     // Update the user's data
//     product.description = req.body.description;
//     product.qty = req.body.qty;
//     product.price = req.body.price;
    
//     // Save the updated user to the database
//     await product.save();

//     // Send a response to the client
//     res.send('User updated successfully');
// });
// app.put('/products/:id', async (req, res) => {
//     // Get the user ID from the request parameters
//     const id = req.params.id;

//     // Find the user in the database
//     const product = await Product.findById(id);

//     // Update the user's data
//     product.description = req.body.description;
//     product.qty = req.body.qty;
//     product.price = req.body.price;

//     // Save the updated user to the database
//     await product.save();

//     // Send a response to the client
//     res.send('User updated successfully');
// });

// Start the server on a different port


app.listen(8081, () => {
    console.log("Listening");
});
// app.listen(8081, ()=>{
//     console.log("Listening");
// })