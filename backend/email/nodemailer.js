const nodemailer = require("nodemailer");
const loadConfig = require("../config/loadConfig");
const config = loadConfig();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "todolo.list@gmail.com",
    pass: config.email.APP_PASSWORD,
  },
});

async function sendEmail(to, otp) {
  const subject = "Todolo OTP Verification";
  const html = `
      <p>Thank you for registering for Todolo!</p>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
    `;
  try {
    const info = await transporter.sendMail({
      from: "todolo.list@gmail.com",
      to,
      subject,
      html,
    });

    return info;
  } catch (error) {
    throw error;
  }
}

module.exports = { sendEmail };
