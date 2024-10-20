const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // You can choose any available port

app.use(cors());
app.use(bodyParser.json());

app.post('/send-confirmation-email', async (req, res) => {
	const { email } = req.body;

	// Set up Nodemailer transport
	const transporter = nodemailer.createTransport({
		service: 'Gmail', // Choose your email service (Gmail, SendGrid, etc.)
		auth: {
			user: 'your-email@gmail.com', // Your email address
			pass: 'your-email-password', // Your email password or app password
		},
	});

	// Set up email data
	const mailOptions = {
		from: 'your-email@gmail.com', // Sender address
		to: email, // List of recipients
		subject: 'Email Confirmation', // Subject line
		text: 'Please confirm your email by clicking this link: [Verification Link]', // Plain text body
		html: '<p>Please confirm your email by clicking <a href="http://your-website.com/confirm-email">this link</a>.</p>', // HTML body
	};

	// Send email
	try {
		await transporter.sendMail(mailOptions);
		res.status(200).send('Email sent successfully');
	} catch (error) {
		console.error(error);
		res.status(500).send('Error sending email');
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
