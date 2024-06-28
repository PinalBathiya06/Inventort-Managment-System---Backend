const crypto = require('crypto');
const db = require("../models");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const jwtKey = 'invoicer'

const User =db.users

function md5Hash(text) {
    return crypto.createHash('md5').update(text).digest('hex');
  }


const addUser = async(req, res) => {
    // return res.json(req.body);
    const {name,address,email,contact,password} = req.body;
    User.create({
        name:name,
        address:address,
        email:email,
        contact:contact,
        password: md5Hash(password),
        normal_password:password, 
    })
    .then((result) => {
        return res.json({
              message: "User created successfully!",
              status: 200,
        });
    })
    .catch((error) => {
        console.log(error);
        return res.json({
              message: "Unable to create a user!",
              status: 401,
        });
    });
};

//find all users
const getUsers = async (req, res) => {
    const users = await User.findAll({})
    if (users)
    res.status(200).send(users)

    else
       res.status(403).send({'message' : 'No Data Found'})
}

//Get Single User Info 
const getUserInfo = async(req, res) => {
    const user = await User.findOne({ where: {id: req.params.id}})
    return res.send(user)
    if(user)
      res.status(200).send(user)
    else
      res.status(403).send({'message': 'no such user'})
}

// Update User Info
//  const updateUSer = async (req, res) => {
//      let check = await User.findOne({
//         where: { id: req.params.id }
//     })
//     if (check) {
//         check = await User.findOne({
//              where: { id: req.body.loginid }
//          })
//          if (check == null) {
//              const user = await User.update(req.body, { where: { id: req.params.id } })
//              res.status(200).send(user)
//          } else
//              res.status(403).send({ 'message': 'Username already exists' })
//      }
//      else {
//          res.status(403).send({ 'message': 'No Such Record Found' })
//      }

//  }
const login = async(req, res) => {
    // console.log(req.body.email);
    if (req.body.email && req.body.password) {
        const email = req.body.email;
        const password = req.body.password;
        
        let user = await User.findOne({ where: {email: email, password: md5Hash(password)}});
        // return res.json(user)
        if (user) {
            const tokenData = { id: user.id};
            const token = jwt.sign(tokenData, jwtKey, { expiresIn: '3h' });
            
            return res.json({
                message: "Login Successfull",
                status: 200,
                token: token
            });
        } else {
            return res.json({
                message: "Invalid email or password",
                status: 400,
                responseData:{}
            });
        }
    } else {
        res.send({ result: "No User Found" });
    }
};

const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error logging out' });
        }
        res.clearCookie('connect.sid');
        res.json({ success: true, status: 200 ,message: 'Logout successful' });
    });
};
//update user

// const UserProfileFetch = async (req, res) => {
//     const uid = req.body.userid;
//     try {
//       let user = await User.findOne({
//        // where: { registers_id: uid },
//         attributes: ['name', 'address', 'email', 'contact']
//       });
  
//       if (user) {
//         const userData = [user.get()];
//         return res.json({
//           message: "Profile fetch successful",
//           status: 200,
//           data: userData
//         });
//       } else {
//         return res.json({
//           message: "Invalid Profile",
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
  
//   const UserProfileUpdate = (req, res) => {
  
//     User.update(
//       {
//         name: req.body.name,
//         address: req.body.address,
//         contact: req.body.contact,
//       },
//       {
//         where: {
//           email: req.body.email,
//         },
//       }
//     )
//       .then((result) => {
//         return res.json({
//           message: "profile Updated successfully!",
//           status: 200,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         return res.json({
//           message: "Unable to update a profile!",
//           status: 401,
//         });
//       });
//   }

const UserProfileUpdate = async(req, res) => {
    try {
        let user = await User.findOne({
            where: { id: req.params.id }
        });
        // return res.send(User);
        // if (User == null) {
        //     res.status(403).send({ 'message': 'User already exists.' });
        // } else {
            const updatedUser = await User.update(req.body, {
                where: { id: req.params.id }
            });
            res.status(200).send(updatedUser);
        // }
    } catch (error) {
        console.error(error);
        res.status(403).send({ 'message': 'No such records found.' });
    }
  // User.update(
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
}



module.exports = {
    addUser,
    getUsers,
    getUserInfo,
    login,
    logoutUser,
    // UserProfileFetch,
    UserProfileUpdate
}