var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'khanparatejas1998@gmail.com',
      pass: 'raghu9924106241'
    }
  });
  
  var mailOptions = {
    from: 'khanparatejas1998@gmail.com',
    to: 'kanopatel164@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'ndkjfdsfjklfjlkfjslfjsfjsdfkjsflksjfslkfjslkfj'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = router;
