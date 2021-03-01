const { lorem } = require('faker');
var faker = require('faker');
var express = require('express');
var faker = require('faker');
var mongoose = require('mongoose');
var path = require('path');
// var fakerModel = require('./models/user');
var personReport = faker.name.findName(); // Rowan Nikolaus
var incidentReport = faker.internet.email(); // Kassandra.Haley@erich.biz
var vehicleReport = faker.helpers.createCard(); // random contact card containing many properties
const Incidents = ['Robbery 211', 'Threat 236', 'Drugs 237', 'Assault 240', 'Weapons Violations 245', 'Rape 261', 'Fraud 318', 'Drunk Driver 390D', 'Subject Disturbing 415', 'Criminal Damage 415B', 'Violation of Court Order 415O', 'Trespassing 418T', 'Homicide 451', 'Burglary 459', 'Theft 487', 'Missing Persons 601', 'Suspicious person/activity 647', 'Dead Body 901H', 'Insane Person 918', 'Collision 961'];
Incidents.forEach(Person => { return Person[0], Person[1] });
var app = express();
// app.set('view engine', 'ejs');
// app.set("views", path.resolve(__dirname, 'views'));
// app.get('/', (req, res) => {
//     fakerModel.find((err, data) => {
//         console.log('dvb', data)
//         if (err) {
//             console.log('erer', err)
//         }
//         else if (data) {
//             console.log('havr data', data)
//             res.render('home', { data: data })
//         }
//         else {
//             console.log('dont havr data', data)
//             res.render('home', { data: {} })
//         }
//     })
// })
app.post('/', (req, res) => {
    for (var i = 0; i < 10; i++) {
        var Person = new Person({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            phonenumber: faker.phone.phoneNumber(),
            city: faker.address.city(),
            state: faker.address.state(),
            country: faker.address.country(),
            height: faker.random.number(),
            weight: faker.random.number(),
            witness: faker.name.firstname(),
            vitim: faker.name.firstname(),
            race: faker.commerce.color(),
            gender: faker.name.gender(),
        })
        fakke.save((err, data) => {
            if (err) {
                console.log('error occured', err)
            }
        })
    }
    res.redirect('/');
})
app.post('/', (req, res) => {
    for (var i = 0; i < 10; i++) {
        var Incident = new Incident({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            phonenumber: faker.phone.phoneNumber(),
            city: faker.address.city(),
            state: faker.address.state(),
            country: faker.address.country(),
            witness: faker.name.firstname(),
            vitim: faker.name.firstname(),
            officername: faker.name.lastName(),
            locationinfo: faker.address.streetAddress(),
            date: faker.date.recent(),
            info: faker.lorem.text(),
            badgenumber: faker.random.number(),
            incident: incident[faker.random.number]
        })
        fakke.save((err, data) => {
            if (err) {
                console.log('error occured', err)
            }
        })
    }
    res.redirect('/');
})
app.post('/', (req, res) => {
    for (var i = 0; i < 10; i++) {
        var Vehicle = new Vehicle({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            phonenumber: faker.phone.phoneNumber(),
            city: faker.address.city(),
            state: faker.address.state(),
            country: faker.address.country(),
            licenseplate: faker.random.number(),
            vehicle: faker.vehicle.faker(),
            colorofcar: faker.vehicle.color(),
            vin: faker.vehicle.vin(),
            model: faker.vehicle.model(),
            type: faker.vehicle.type(),
            owners: faker.name.findName(),
            value: faker.finance.amount(),
        })
        fakke.save((err, data) => {
            if (err) {
                console.log('error occured', err)
            }
        })
    }
    res.redirect('/');
});