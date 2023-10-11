const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
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
      from: "your-email@gmail.com",
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
