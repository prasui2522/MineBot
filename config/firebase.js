const { async } = require('@firebase/util');
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, collection, addDoc } = require ('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAW1kgdHFWUeph5iOoCqBw1t6T0la4BsTA",  
    authDomain: "minebot-2eac0.firebaseapp.com",  
    projectId: "minebot-2eac0",  
    storageBucket: "minebot-2eac0.appspot.com",  
    messagingSenderId: "716989283465",  
    appId: "1:716989283465:web:9b2be53c89e8aea6ef1a58",  
    measurementId: "G-B7XWFNCGTY"  
  };

  const app = initializeApp(firebaseConfig); 
  const firestore = getFirestore();
  // const db = doc(firestore,'MineBotDB/2022-6-5');

// function writedoc(){
//     const docData = {
//         mail:'mineDbtest@test.com',
//         password:'12345678',
//     };
//     setDoc(db, docData)
//     .then (() => {
//       console.log('This value has been written to the database');
//     })
//     .catch((error) => {
//       console.log(error);
//     })    
// };

// console.log('Hello there, Firestore');
// writedoc();

// const userCollection = collection(firestore,'users')
// async function addnewDocument(){
// const newDoc = await addDoc(userCollection,{
// username:'mytest1234@home.com',
// password:'123456',
// });
// console.log('You document create sussessfull');
// }
// addnewDocument();


module.exports = firestore;
// module.exports = writedoc();
  // Initialize Firebase  
//   const app = initializeApp(firebaseConfig);  
//   const analytics = getAnalytics(app);