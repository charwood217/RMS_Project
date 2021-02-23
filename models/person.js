var mongoose =require('mongoose');

//Export Model
module.exports = mongoose.model('person', personSchema);