var mongoose =require('mongoose');

// const person = new mongoose.Schema({
//     Firstname: {
//         type: String,
//         required: true
//     },
//     Middlename: {
//         type: String,
//         required: false
//     },
//     Lastname: {
//         type: String,
//         required: true
//     },
//     SSN: {
//         type: Number,
//         required: true 
//     },
//     DLN: {
//         type: Number,
//         required: true
//     },
//     Gender: [{ type: Schema.Types.ObjectId, ref: 'Gender' }]
// });
//Export Model
module.exports = mongoose.model('personReport', personReportSchema);