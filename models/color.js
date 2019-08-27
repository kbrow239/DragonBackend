const mongoose = require('mongoose');

const color = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   colorId: {type: Number, required: true},
   name: {type: String, required: true},
   code: {type: String, required: true},
});

module.exports = mongoose.model('Color', color);