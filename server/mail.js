
function sendmail(transp, receiver, subject, text) {

    let mailOptions = {
      from: 'aalaguthiyagarajan@gmail.com',
      to: receiver,
      subject: subject,
      text: text
    };

    transp.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

}

module.exports={sendmail}
