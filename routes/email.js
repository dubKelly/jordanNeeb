const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const validateEmailInput = require('../validation/email');

const SENDGRID_API_KEY = require('../config/keys').SENDGRID_API_KEY;

router.post('/', (req, res) => {
	const { errors, isValid } = validateEmailInput(req.body);

	// Check Validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const name = req.body.name;
	const email = req.body.email;
	const subject = req.body.subject;
	const text = req.body.text;

	nodemailer.createTestAccount((err, account) => {
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: 'smtp.sendgrid.net',
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: 'apikey',
				pass: SENDGRID_API_KEY
			},
			tls: {
				rejectUnauthorized: false
			}
		});

		// setup email data with unicode symbols
		let mailOptions = {
			from: `${name} <${email}>`, // sender address
			to: 'js.neeb1780@gmail.com', // list of receivers
			subject: subject, // Subject line
			text: text // plain text body
			// html: '<b>Hello world?</b>' // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}

			return res.json(mailOptions);
			// console.log('Message sent: %s', info.messageId);
		});
	});
});

module.exports = router;
