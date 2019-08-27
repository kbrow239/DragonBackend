const express = require('express');
const router = express.Router();
const SecondaryGene = require('../models/secondaryGene');

// Get all SecondaryGene
// or searchSecondaryGene ${uri}/?name=${term}
// {_id: 0} is used to denote that the _id field is not returned to the user

router.get('/', (request, response) => {
    if (request.query.name) {
        collectionSecondaryGenes.find({"name": /request.query.name/i}, {_id: 0}).toArray((error, result) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    }
    collectionSecondaryGenes.find({}, {_id: 0}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

module.exports = router;