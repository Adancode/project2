// var api_key = 'key-9b7e5c8f456d2e2af3a4ca35a1ef9a95-47317c98-35df1b95';
// var domain = 'sandbox5220afbde8c34d7b823a5aee1c709219.mailgun.org';
// var app = require("sequelize");
// var mailgun = require('mailgun-js')({
//     apiKey: api_key,
//     domain: domain
// });

// app.post("/contact", function (req, res) {
//     var host = "";
//     var data = {
//         from: 'Market to Market <postmaster@sandbox5220afbde8c34d7b823a5aee1c709219.mailgun.org>',
//         to: host,
//         vendor: "<b style='color:green'>From: "+req.body.userName,
//         vendorEmail: "<b style='color:green'>Respond to: "+req.body.vendorEmail,
//         text: "<b style='color:green'>Message: "+req.body.body
//     };

//     mailgun.messages().send(data, function (error, body) {
//         console.log(body);
//     });
// });