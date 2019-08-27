//npm start to run server locally

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const mongoose = require('mongoose');
const ObjectId = require("mongodb").ObjectID;

const user = require('./routes/user');
const dragon = require('./routes/dragon');
const breed = require('./routes/breed');
const color = require('./routes/color');
const eye = require('./routes/eye');
const primaryGene = require('./routes/primaryGene');
const secondaryGene = require('./routes/secondaryGene');
const tertiaryGene = require('./routes/tertiaryGene');

const app = express();

const CONNECTION_URL = "mongodb+srv://dragons123:cgmBl3sa5nCZgDaS@dragons-nwfxm.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "Tracker";


const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', user);
app.use('/dragon', dragon);
app.use('/breed', breed);
app.use('/color', color);
app.use('/eye', eye);
app.use('/primaryGene', primaryGene);
app.use('/secondaryGene', secondaryGene);
app.use('/tertiaryGene', tertiaryGene);

app.use((request, response, next) => {
    response.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Metods": "GET, HEAD, PUT, PATCH, POST, DELETE",
        "Access-Control-Allow-Headers": "Content-Type"
    });
   return next();
})

app.listen(PORT, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collectionUsers = database.collection("Users");
        collectionDragons = database.collection("Dragons");
        collectionColors = database.collection("Colors");
        collectionEyes = database.collection("Eyes");
        collectionBreeds = database.collection("Breeds");
        collectionPrimaryGenes = database.collection("PrimaryGenes");
        collectionSecondaryGenes = database.collection("SecondaryGenes");
        collectionTertiaryGenes = database.collection("TertiaryGenes");

        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});