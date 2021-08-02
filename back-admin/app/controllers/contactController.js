const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const OAuth2Client = new OAuth2(
  "978102148881-sb621r73easlomvegn40obhprldc17uu.apps.googleusercontent.com",
  "wQsLC3Gn3HfCrR1fFoTOiWGM",
  "https://developers.google.com/oauthplayground"
);

OAuth2Client.setCredentials({
  refresh_token:
    "1//044-LMuMQDEgTCgYIARAAGAQSNwF-L9Irgeg_ILcBaLDu02OsqO72FM-0ZWoWFCGdUoUHODx94VyJwLDVTRHW5ahq2A5SEplHsTA",
});

const contactController = {
  sendMessage: async (req, res) => {
    try {
      const myAccessToken = await OAuth2Client.getAccessToken();
      console.log(myAccessToken);
      console.log(req.body);
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
          type: "OAuth2",
          user: process.env.EMAIL,
          serviceClient: "106809945921097570877",
          privateKey:
            "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDiRdqLOXjWm/9F\nCPicTk2MEHC2a8faUbJK+Jfu5CX0Ggfltn5KWUNH055E305wA/htLh48fcIS2OAi\nL+ZX8P24wohkXvHmLaLLY1qEFBDUi9bjYxvZFmWTvgvJpvBa2SvHCwhwD2kz1fmD\n37IJhviqICrt4iIRGJJN3VCNGOMPllBXON91aIQdAb1fCwLh88y0xtKvCD5KJtlJ\nDS2rtWXniwMHPmfRdYoV9IqdeKCCQ+zG4wuZc0irBHnTHPhfCZ3gM9SvLPNekg5c\nXw6M5S6gdUOhsn3IeWmRdlNAnoKOSVEZkaYdzmImfeTeNKIiorpuFS670uIXQcdY\n0op7sKI1AgMBAAECggEAQG1cY10La6wCXMFHrJXdHb8GoOKChsbRSeiLtkEvD1ik\nHAPA5OGSty5pt7mPp3Rx9YB2qomyS1SGSSWzZCHh1IxLcqzYGs6utlPFT6s4+ZQR\nrTAom0D1zkIEMDhA4tVIUkXxcprovRI1mBeHJZBRWHuNTaugQJbq/ZHBIFPQPzzn\ntgkHgkqq1c8JByKRbWHbVKjF0+onZuUdLykdFfR4azrJA1VWHV4BEP39tEypvYTd\nQTD3AEs4kqaU7aFW5iPuN1pSONlQlK6j0cq/TTAT5+Z4aKM2dV6h/Zs/wVW2/6//\nltZg34tHIEHQxLCg5bmKS5urHrMathBmNejj62HOhwKBgQD/yN0E+9+eHt07My0L\nEuzmayPPL4k1syBdW4OV6UPD3UtLolNrPNGIpTk4wRPXUPkwsA7c/XfOinrSnNjk\n4d6lA23uEoiKyHml9cU6P4FWz+gFFbimyPJaLOO8ICevi3HZkhhH4AUEKdLtugDT\nkQCziycqFj8Onn5s4hU9uAOtjwKBgQDidqD5nnFcrnHmCP/WwsBnCd0JnvQnU4dN\nfiZ6Uyt2g6vdh+jqcstw97CWxf4goH7HuNMRdcr/ID2aEQJAuh21PszjuMPqLmDI\nCt59nu+yvyhw6fgADPM/pwJy2KPDNVc2do1ojxiQRBa7tF40JuF7pvHZdHRCogxh\nuUR5RXWZ+wKBgDcB7XY67JZGsPEgSlmNUmEjPWo7INjpktZA7gV5Std+acj0Odhg\nFfe7AJlR/IBbq5tq4WdpIzDJ2ywcCxD9+jGmkSeX2MFv56lnN2kVay1OPOmLCFDl\n+iimart0dtRruqo9nvcmGC4TCIeTbsYQ8wOps1x7uEfekfW8kTDat//FAoGAAkDD\n4TfeUNm7cFpukShm2Z+Tf2EBdNKz6eVzZIwnRoqQzydm/c4ekAUm0Jkvqgtut3Xz\nQ500Y81iT4ITz6kKWp9BUpKoAFBtzg+tnvpR0ClusZDiUr3OPbffolzdZDfHolcT\nmRKzX9wNjdiBh2tLmvtSNKOf9HnAPcimEb7LKLkCgYBtUsenNmLANbgmGp9iEr+t\n9i1BdT6oET1P5E7kE5A2uBSeduwhx4d84D8c8c6um9cAFzcwq4qc1exVKbZ74Zne\n3gvBa3ydzr7KD6p1A7SYiDYIlBGaweltq9yCn6rZYw6ngYk7UNrAzsOfgj3anC1w\nxEIxlDhqtZHmmEsl3XTlsA==\n-----END PRIVATE KEY-----\n",
          clientId:
            "978102148881-sb621r73easlomvegn40obhprldc17uu.apps.googleusercontent.com",
          clientSecret: "wQsLC3Gn3HfCrR1fFoTOiWGM",
          refreshToken:
            "1//044-LMuMQDEgTCgYIARAAGAQSNwF-L9Irgeg_ILcBaLDu02OsqO72FM-0ZWoWFCGdUoUHODx94VyJwLDVTRHW5ahq2A5SEplHsTA",
          accessToken: myAccessToken.token,
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
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = contactController;
