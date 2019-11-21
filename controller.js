const nodemailer = require('nodemailer');

class HandleResponse {
    async send(req, res) {
        let testAccount = await nodemailer.createTestAccount();

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'peterpar1230@gmail.com',
                pass: '1562938007emani'
            }
        });
        const mailOptions = {
            from: 'peterpar1230@gmail.com',
            to: 'naveenmaddukuri@gmail.com',
            subject: `${req.body.username}`,
            html: `<p>Email: ${req.body.email}</p> <p>Message: ${req.body.message}</p>`
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         });

    }
}

module.exports = new HandleResponse();