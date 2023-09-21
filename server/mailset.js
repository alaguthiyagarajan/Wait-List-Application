let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aalaguthiyagarajan@gmail.com',
    pass: 'xdkohhgcufwzxpel'
  }
});


module.exports = {transporter}