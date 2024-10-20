import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ConfirmEmail.css';

export default function ConfirmEmail() {
	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const handleSendConfirmationEmail = async () => {
		setIsLoading(true);
		setSuccessMessage('');
		setErrorMessage('');

		const email = 'user-email@example.com'; // Get this from your state or user input

		try {
			const response = await fetch(
				'http://localhost:5000/send-confirmation-email',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email }),
				}
			);

			if (response.ok) {
				setSuccessMessage('Confirmation email sent! Check your inbox.');
				navigate('/EmailConfirmed'); // Automatically navigate after sending
			} else {
				const errorText = await response.text();
				setErrorMessage(`Failed to send email: ${errorText}`);
			}
		} catch (error) {
			setErrorMessage(`Error: ${error.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div>
				<h1>Confirm your Email</h1>
				<h6>Let's continue...</h6>
			</div>

			{isLoading && <p>Sending confirmation email...</p>}
			{successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
			{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

			<button
				onClick={handleSendConfirmationEmail}
				disabled={isLoading}
			>
				{isLoading ? 'Sending...' : 'Send Confirmation Email'}
			</button>
		</>
	);
}
