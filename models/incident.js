var mongoose =require('mongoose');

//Export Model
module.exports = mongoose.model('incidents', incidentsSchema);