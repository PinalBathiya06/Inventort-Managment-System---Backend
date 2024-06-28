const crypto = require('crypto');
const db = require("../models");
const productModel = require("../models/productModel");

const Product  =db.products


const addProduct = async(req, res) => {
    const {description,qty,price} = req.body;
    Product.create({
        description:description,
        qty:qty,
        price:price,
       
    })
    .then((result) => {
        return res.json({
              message: "Product created successfully!",
              status: 200,
        });
    })
    .catch((error) => {
        console.log(error);
        return res.json({
              message: "Unable to create a product!",
              status: 401,
        });
    });
};
//find all product
const getProducts = async (req, res) => {
    const product = await Product.findAll({})
    if (product)
        res.status(200).send(product)
    else
       res.status(403).send({'message' : 'No Data Found'})
}

//Get Single Product Info 
const getProductInfo = async(req, res) => {
    const product = await Product.findOne({ where: {id: req.params.id}})
    if(product)
      res.status(200).send(product)
    else
      res.status(403).send({'message': 'no such user'})
}

//update product

// const ProductFetch = async (req, res) => {
//     const pid = req.body.productid;
//     try {
//       let product = await Product.findOne({
//        // where: { registers_id: uid },
//         attributes: ['description', 'qty', 'price']
//       });
  
//       if (product) {
//         const productData = [product.get()];
//         return res.json({
//           message: "Product fetch successful",
//           status: 200,
//           data: productData
//         });
//       } else {
//         return res.json({
//           message: "Invalid Product",
//           status: 400,
//         });
//       }
  
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         message: "Internal Server Error",
//         status: 500,
//       });
//     }
//   }
  
  const ProductUpdate = async(req, res) => {
    // return res.send(req.params.id)
    try {
        let product = await Product.findOne({
            where: { id: req.params.id }
        });
        // return res.json(product);
       
        // if (product == null) {
        //     res.status(403).send({ 'message': 'Product already exists.' });
        // } else {
            const updatedProduct = await Product.update(req.body, {
                where: { id: req.params.id }
            });
            res.status(200).send(updatedProduct);
        // }
    } catch (error) {
        console.error(error);
        res.status(403).send({ 'message': 'No such records found.' });
    }
};
// const ProductUpdate = async (req, res) => {
//     try {
//         return res.send(req.body);
//       const getRecord = await productModel.findByPk({ where: { id: req.body.id } })
//       if (getRecord) {
//         const result = await productModel.update(
//           {
//            description : req.body.description,
//            qty : req.body.qty,
//            price : req.body.price,
//           },
//           {
//             where: {
//               id: req.body.id,
//             },
//           }
  
//         );
//         if (result > 0) {
//           return res.json({
//             message: "Question updated successfully",
//             status: 200,
//           });
//         } else {
//           return res.status(404).json({
//             message: "No Question update",
//             status: 404,
//             responseData: [],
//           });
//         }
  
//       }
//       else {
//         return res.status(202).json({
//           message: "Question not found",
//           status: 202,
//           responseData: [],
//         });
//       }
//     }
//     catch (error) {
//       console.error("Error fetching categories:", error.message);
//       return res.status(500).json({
//         message: 'Internal Server Error',
//         status: 500,
//         responseData: [],
//       });
  
//     }
//   }
//     let check = await Product.findOne(
//         {
//             where: { id: req.params.id}
//         }
//     )
//     if (check){
//         check = await Product.findOne({
//             where: {id: req.body.id}
//         })
//         if(check == null ){
//             const product= await Product.update(req.body, {where: {id: req.params.id}})
//             res.status(200).send(product)
//              }
//              else
//              res.status(403).send({'message':'Product already exists.'})
//     }
//     else{
//         res.status(403).send({'message':'No such records found.'})


  
    // Product.update(
    //   {
    //     description: req.body.description,
    //     qty: req.body.qty,
    //     price: req.body.price,
    //   },
    //   {
    //     where: {
    //       description: req.body.description,
    //     },
    //   }
    // )
    //   .then((result) => {
    //     return res.json({
    //       message: "Product Updated successfully!",
    //       status: 200,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return res.json({
    //       message: "Unable to update a Product!",
    //       status: 401,
    //     });
    //   });

 

  //Delete Share
const deleteProduct = async (req, res) => {
    let product = await Product.findOne({
        where: { id: req.params.id }
    })
    if (product) {
        await Product.destroy({
            where: { id: req.params.id }
        })
        res.status(200).send('Product Deleted')
    } else
        res.status(403).send({ 'message': 'No Such Data Found' })
}
module.exports = {
    addProduct,
    getProducts, 
    getProductInfo,
    // ProductFetch,
    ProductUpdate,
    deleteProduct
}