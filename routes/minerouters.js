const express = require('express');
const { registerVersion } = require('firebase/app');
const { getFirestore, doc, setDoc, collection, addDoc } = require('firebase/firestore');
const router = express.Router();
const firestore = require('../config/firebase');


router.get('/', (req, res) => {
  res.render('index')
});


router.get('/adduser', (req, res) => {
  res.render('adduser')
});

router.get('/config', (req, res) => {
  res.render('config')
});
///////// OK //////////
router.post('/insert', (req, res) => {

  const firestore = new getFirestore();
  const id = req.body.username;

  const db = doc(firestore, 'MineBotDB/Users' + Date.now() + id);

  function writedoc() {
    const docData = {      
      // uid: req.body.name,
      username: req.body.username,
      password: req.body.password,
      diskplayname:req.body.diskplayname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      location: req.body.location,
      // emailVerified:false,
      // disabled: false,
    };
    setDoc(db, docData, { merge: true })
      .then(() => {
        console.log('This value has been written to the database');
      })
      .catch((error) => {
        console.log(error);
      })
  };
  writedoc();
  res.redirect('/')
});

router.post('/config', (req, res) => {

});

module.exports = router