const express = require("express");
const productsRouter = require('./routes/productsRoutes.js');
const reviewsRouter = require('./routes/reviewsRoutes.js')
const app = express();
const test = require('./models/productsModel.js')
const test1 =  require('./models/reviewsModel.js')
const mongoose = require('mongoose');

app.use(express.json());
app.use('/api/products', productsRouter);

app.use(express.json());
app.use('/api/reviews', reviewsRouter);

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.hkablf4.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseUser = 'root';
const databasePassword = 'sandeep123';
const databaseName ='AmazonBackend';
let dbLink = url.replace("$_USERNAME_$", databaseUser)
 dbLink = dbLink.replace("$_PASSWORD_$", databasePassword)
 dbLink = dbLink.replace("$_DB_NAME_$", databaseName)


 mongoose.connect(dbLink)
  .then(() => console.log('Connected!'));

app.listen(1400,()=>console.log('----app started----'));




