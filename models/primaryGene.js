const mongoose = require('mongoose');

const primaryGene = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   primaryGeneId: {type: Number, required: true},
   name: {type: String, required: true},
   type: {type: String, required: true},
   rarity: {type: String, required: true},
});

module.exports = mongoose.model('PrimaryGene', primaryGene);