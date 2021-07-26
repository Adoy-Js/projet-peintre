const nodemailer = require('nodemailer');

const contactController = {

  sendMessage: (req, res, next)=>{
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", 
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    // "flo.vir@outlook.com"

    const mail = {

      from: data.name,
      to: process.env.EMAIL,
      subject: "hello",
      text: `hello`,

    }

  }

}

module.exports = contactController;