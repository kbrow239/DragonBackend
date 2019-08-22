const mongoose = require('mongoose');

const dragon = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
   dragonId: {type: Number, required: true},
   name: {type: String, required: true},
   gender: {type: String, required: true},
   breed: {type: String, required: true},
   primary_color: {type: String, required: true},
   primary_gene: {type: String, required: true},
   secondary_color: {type: String, required: true},
   secondary_gene: {type: String, required: true},
   tertiary_color: {type: String, required: true},
   tertiary_gene: {type: String, required: true},
   flight: {type: String, required: true},
   eye_type: {type: String, required: true},
   generation_one: {type: Boolean},
   breeding_pair: {type: Boolean},
   mate: {type: Boolean},
   image: {type: String, required: true},
});

module.exports = mongoose.model('Dragon', dragon);