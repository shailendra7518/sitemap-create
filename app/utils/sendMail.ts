export const sendMail = async (payload: {
  name: string;
  email: string;
  message: string;
}) => {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.hostinger.com",
    auth: {
      user: "noreply@techstaunch.com",
      pass: "U485FcmU41&n",
    },
    secure: true,
    secureConnection: false,
  });

  const mailData = {
    from: "noreply@techstaunch.com",
    to: "info@techstaunch.com",
    subject: `Message From ${payload.name}`,
    html: payload.message,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) reject(err);
      else resolve(info);
    });
  });
};
