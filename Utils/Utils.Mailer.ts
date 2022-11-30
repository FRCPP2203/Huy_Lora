// const nodemailer = require("nodemailer");
// const { CONFIGS } = require("../Config/Config.App");

// export default class Email {
//   constructor(user, url) {
//     this.to = user.email;
//     this.firstName = user.profile?.display_name.split(" ")[0];
//     this.url = url;
//     this.from = `Xalo Education <${EMAIL_FROM}>`;
//   }

//   newTransport() {
//     // 1) Create a transport
//     // if (NODE_ENV === "production") {
//     //   // Sendgrid
//     //   return nodemailer.createTransport({
//     //     service: "SendGrid",
//     //     auth: {
//     //       user: SENDGRID_USERNAME,
//     //       pass: SENDGRID_PASSWORD,
//     //     },
//     //   });
//     // }
//     return nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: CONFIGS.EMAIL.MAIL_USERNAME,
//         pass: CONFIGS.EMAIL.EMAIL_PASSWORD,
//       },
//     });
//   }

//   // Send the actual email
//   async send(subject, content) {
//     // 2) Define email options
//     const mailOptions = {
//       from: this.from,
//       to: this.to,
//       subject,
//       text: content,
//     };

//     // 3) Create a transport and send email
//     await this.newTransport().sendMail(mailOptions);
//   }

//   async sendWelcome() {
//     await this.send("welcome", "Welcome to the Natours Family!");
//   }

//   async sendPasswordReset() {
//     await this.send(
//       "Reset Your Password",
//       `Your password reset token (valid for only 10 minutes) \n ${this.url}`
//     );
//   }
// }

// module.exports.Email = Email;
