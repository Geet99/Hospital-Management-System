const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
// const Data = require("./data")

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = 'mongodb+srv://covid_cluster_user:randomlygenerated@covidpatients.cf3et.mongodb.net/HMS?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));% 
