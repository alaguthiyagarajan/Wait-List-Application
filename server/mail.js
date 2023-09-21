//From Mail Id 
function sendmail(transp, receiver, subject, text) {

    let mailOptions = {
        //In this Mail Id only Can do to send another Candidates link or coupon code via candidate
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
