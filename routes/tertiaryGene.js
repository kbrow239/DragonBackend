const express = require('express');
const router = express.Router();
const TertiaryGene = require('../models/tertiaryGene');

// Get all TertiaryGenes
// or searchTertiaryGene ${uri}/?name=${term}
// {_id: 0} is used to denote that the _id field is not returned to the user

router.get('/', (request, response) => {
    if (request.query.name) {
        collectionTertiaryGenes.find({"name": /request.query.name/i}, {_id: 0}).toArray((error, result) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    }
    collectionTertiaryGenes.find({}, {_id: 0}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

module.exports = router;