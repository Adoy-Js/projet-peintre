const nodemailer = require("nodemailer");

const contactController = {
  sendMessage: (req, res, next) => {
    const output = `
    <p>You have a new message</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Firstname: ${req.body.firstname}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mail = {
      from: req.body.email,
      to: process.env.EMAIL,
      text: req.body.message,
      html: output,
    };

    transporter.sendMail(mail, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      res.json("contact", { msg: "Email has been sent" });
    });
  },
};

module.exports = contactController;
