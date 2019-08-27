const mongoose = require('mongoose');

const breed = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   breedId: {type: Number, required: true},
   name: {type: String, required: true},
   type: {type: String, required: true},
   rarity: {type: String, required: true},
});

module.exports = mongoose.model('Breed', breed);