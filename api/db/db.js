const User = require('../models/User');

const saveUser = async (newUser) => {
    return await newUser.save();
};

const findUser = async (Object) => {
    return await User.find(object).exec();
};

module.exports ={saveUser, findUser};