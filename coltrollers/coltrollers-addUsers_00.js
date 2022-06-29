'use strict';
const firestore = require('../config/firebase');
const addUsers = async (req,res,next) => {
    try {
        const data = req.body;
       await firestore.collection('users').doc().set(data);
    } catch (error) {
        console.log(error);
    }
}

// module.exports ={addUsers}
module.exports =addUsers
