let nodemailer = require('nodemailer');
// In this process is Set Mail Id and set temporary Password
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aalaguthiyagarajan@gmail.com',
    pass: 'xdkohhgcufwzxpel'
  }
});


module.exports = {transporter}
