const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Dragon = require('../models/dragon');


// Get all Dragons
// or searchDragon ${uri}/?name=${term}

router.get('/', (request, response) => {
    if (request.query.name) {
        collectionDragons.find({"name": /request.query.name/i}, {_id: 0}).toArray((error, result) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    }
    collectionDragons.find({}, {_id: 0}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

// Get Dragon by ID
router.get(`/:id`, (request, response) => {
    collectionDragons.findOne({ "dragonId": +request.params.id },{_id: 0}, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

// Add Dragon
router.post(`/`, (request, response) => {
    collectionDragons.insertOne(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

// Update Dragon
router.put(`/:id`, (request, response) => {
    collectionDragons.findOneAndUpdate({"dragonId": +request.params.id}, 
    {$set: request.body}, { new: true }, (error, result) => {
        if (error) {
            console.log(error);
            response.status(500).send(error);
        }
        response.send(result);
    });
});

// Delete Dragon
router.delete(`/:id`, (request, response) => {
    collectionDragons.deleteOne({"dragonId": +request.params.id}, (error, result) => {
        if (error) {
            response.status(400).send(error);
        }
        response.send(result);
    });
});

module.exports = router;