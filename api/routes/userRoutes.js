const express = require("express");
const app = express();
const { saveUser, findUser } = require("../db/db");
const mongoose = require("mongoose");
const router = express.Router();
const User = require('../models/User');
const {successTemplate , errorTemplate} = require ('../../templates/templates')

router.post("/", (req, res) => {
    console.log('Saving User');
    const fullName = req.body.fullName;
    const email = req.body.email;

    const newUser = new User({
        _id: mongoose.Types.ObjectId(),
        fullName: fullName,
        email: email,
    });

    saveUser(newUser)
    .then((result) => {
        successTemplate(res, 'User Saved', result);
    })
    .catch((err) => {
        successTemplate(res, err.message, err.status);
        });
    });
    
    router.get("/",(req, res,next) => {
        console.log('Getting Users');
    findUser({})
        .then((result) =>{
            successTemplate(res, 'User Retrieved');
        })
        .catch((err) => {
            successTemplate(res, err.message, err.status);
            });
    });

module.exports = router;