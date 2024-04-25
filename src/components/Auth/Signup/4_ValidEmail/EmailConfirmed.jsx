import { Link } from 'react-router-dom';
import './EmailConfirmed.css';
import { useState } from 'react';

export default function EmailConfirmed() {
	const [verification, setVerification] = useState('');

	return (
		<>
			<div>
				<h1>Enter your confirmation code</h1>
				<h6>
					Please check your inbox for a confirmation email. Click the link in
					your email to confirm your email address.
				</h6>
			</div>

			<input
				onChange={(e) => {
					e.preventDefault();
					setVerification(e.target.value);
				}}
				type='text'
			/>

			<br />
			<br />

			{/* WILL NOT be a link, instead will be a button with logic to ensure the input shares the value with the verification code sent to the email, this will need to talk to the back end */}
			<Link
				style={{
					color: verification === '' ? 'gray' : 'blue',
					pointerEvents: verification === '' ? 'none' : 'auto',
				}}
				to='/SignupData'
			>
				Next
			</Link>

			<br />
			<br />

			<button>Resend confirmation Email</button>
		</>
	);
}
