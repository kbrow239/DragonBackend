const mongoose = require('mongoose');

const tertiaryGene = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   tertiaryGeneId: {type: Number, required: true},
   name: {type: String, required: true},
   type: {type: String, required: true},
   rarity: {type: String, required: true},
});

module.exports = mongoose.model('TertiaryGene', tertiaryGene);