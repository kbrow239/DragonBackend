const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


router.post('/signup', async (req, res) => {
    bcrypt.hash(req.body.password, 10, (error, hash) => {
        if(error){
            return res.status(500).send(error);
        }
        else {
            const user = new User({
            _id: new  mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash  
            });
            collectionUsers.insertOne(user, (error, result) => {
                if(error){
                    return res.status(500).send(error);
                }
                res.send(result.result);
            });
        }
    });
});
//todo: fix this to no longer use function
router.post('/signin', async (req, res) => {
    collectionUsers.findOne({"email": req.body.email})
   .then(function(user) {
      bcrypt.compare(req.body.password, user.password, function(err, result){
         if(err) {
            return res.status(401).json({
               failed: 'Unauthorized Access'
            });
         }
         if(result) {
             const JWTToken = jwt.sign({
                 email: user.email,
                 _id: user._id
             },
             'secret', 
             {
                 expiresIn: '2h'
             });
             return res.status(200).json({
                success: 'Welcome to the JWT Auth',
                token: JWTToken
             });
         }
         return res.status(401).json({
            failed: 'Unauthorized Access'
         });
      });
   })
   .catch(error => {
      res.status(500).json({
         error: error
      });
   });;
});

module.exports = router;