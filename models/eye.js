const mongoose = require('mongoose');

const eye = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   eyeId: {type: Number, required: true},
   name: {type: String, required: true},
   rarity: {type: String, required: true},
});

module.exports = mongoose.model('Eye', eye);