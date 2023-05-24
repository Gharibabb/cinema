require('dotenv').config()
const express =require('express');
let cors = require('cors');

// route 
const films =require ('./routes/films')
const app = express();

//connexion db 
const connectDB =require('./conn')
app.use(cors())
app.use(express.json());

connectDB();
app.use('./films',films);
app.listen(5000,()=>{
  console.log("serveur a l'ecoute")
})
