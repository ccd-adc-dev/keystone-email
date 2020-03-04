var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ralex.ccd@gmail.com',
    pass: process.env.EMAILPWD
  }
});

const sendMail = (emailTo) => {
  
  var mailOptions = {
    from: 'ralex.ccd@gmail.com',
    to: emailTo,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
}

module.exports = sendMail