var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
fs = require("fs");

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "dmtr00014@gmail.com",
    pass: "RehcfyN065",
  },
  secure: true,
});

const setMailData = (data) => {
  var mailOptions = {
    from: "dmtr00014@gmail.com",
    to: `${data.senderEmail}`,
    subject: "contact information",
    html: `<h1>Hello</h1>
    <p>name: ${data.name || ""}</p>
    <p>date: ${data.date || ""}</p
    <p>city: ${data.city || ""}</p>
    <p>addres: ${data.addres || ""}</p>
    <p>phone: ${data.phone || ""}</p>
    <p>email: ${data.email || ""}</p>
    <p>height: ${data.height || ""}</p>
    <p>waist: ${data.waist || ""}</p>
    <p>clubs: ${data.clubs || ""}</p>`,
    attachments: data.attachments,
  };
  return mailOptions;
};

const removeFiles = (files) => {
  files.forEach((file) => {
    fs.unlinkSync(`./tmp/${file.originalname}`);
  });
};

const sendMail = (data, files, res) => {
  if (files.length) {
    const attachments = saveFiles(files);
    data.attachments = attachments;
  }
  transporter.sendMail(setMailData(data), function (error, info) {
    if (error) console.log(error);
    else {
      console.log("Email sent: " + info.response);
      removeFiles(files);
      res.send("ok");
    }
  });
};

const saveFiles = (files) => {
  const attachments = [];
  files.forEach((file) => {
    attachments.push({
      filename: file.originalname,
      path: `./tmp/${file.originalname}`,
    });
    fs.writeFile(`./tmp/${file.originalname}`, file.buffer, (err, result) => {
      if (err) console.log("error", err);
    });
  });
  return attachments;
};

router.post("/", function (req, res, next) {
  // const { name, height, addres } = req.body;
  sendMail(req.body, req.files, res);
});

module.exports = router;
