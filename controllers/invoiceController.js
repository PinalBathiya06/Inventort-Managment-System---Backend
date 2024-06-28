const crypto = require('crypto');
const db = require("../models");
const invoiceModel = require("../models/invoiceModel");

const Invoice  =db.invoices

const jwt = require('jsonwebtoken');
// const addInvoice = async(req, res) => {
//     return res.send(req.session.id)
//     const id = req.session.id;
//     const {client_details,item_details} = req.body;
//     Invoice.create({
//         id:id,
//         client_details:client_details,
//         item_details:item_details
//     })
//     .then((result) => {
//         return res.json({
//               message: "Invoice created successfully!",
//               status: 200,
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//         return res.json({
//               message: "Unable to create a invoice!",
//               status: 401,
//         });
//     });
// }
const addInvoice = async (req, res) => {

    const token = jwt.decode(req.body.token);
    const user_id = token.id;
    const { client_details, item_details, invoice_dt, total } = req.body;
    
    Invoice.create({
        client_details: client_details,
        item_details: item_details,
        invoice_dt: invoice_dt,
        user_id: user_id,
        total: total    
    })
    .then((result) => {
        return res.json({
            message: "Invoice created successfully!",
            status: 200,
            user_id: user_id,
        });
    })
    .catch((error) => {
        console.log(error);
        return res.json({
            message: "Unable to create an invoice!",
            status: 401,
        });
    });
}


module.exports = {
    addInvoice
}
