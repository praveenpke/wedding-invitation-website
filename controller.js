    const nodemailer = require('nodemailer');

    class HandleResponse {
        async send(req, res) {
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: testAccount.user, // generated ethereal user
                    pass: testAccount.pass // generated ethereal password
                }
            });
            const mailOptions = {
                from: testAccount.email,
                to: 'naveenmaddukuri@gmail.com',
                subject: `${req.body.username}`,
                html: `<p>Email: ${req.body.email}</p> <p>Message: ${req.body.message} <p>Decision: ${req.body.decision}</p>`
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err)
                    console.log(err)
                else
                    console.log(info);
            });

        }
    }

    module.exports = new HandleResponse();