const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "tulsisatasiya90@gmail.com",
    pass: "wqjkejawsejdymur",
  },
});
 
// sendmail
const send_Mail = async (to, data, subject) => {
  try {
    return transporter.sendMail({
      from: "<tulsisatasiya90@gmail.com",
      to,
      subject,
      html: data,
    });
  } catch (error) {
    return false;
  }
};

module.exports = {
    send_Mail
}


