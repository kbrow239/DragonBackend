const express = require('express');
const router = express.Router();
const Color = require('../models/color');

// Get all Colors
// or searchColor ${uri}/?name=${term}
// {_id: 0} is used to denote that the _id field is not returned to the user

router.get('/', (request, response) => {
    if (request.query.name) {
        collectionColors.find({"name": /request.query.name/i}, {_id: 0}).toArray((error, result) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    }
    collectionColors.find({}, {_id: 0}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


module.exports = router;