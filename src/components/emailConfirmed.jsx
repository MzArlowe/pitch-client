import './emailConfirmed.css';

export default function emailConfirmed() {
	return (
		<>
			<div>
				<h1>Success! Email confirmed</h1>
				<h6>
					Please check your inbox for a confirmation email. Click the link in
					your email to confirm your email address.
				</h6>
			</div>
			<a href='/UserTwo'>Next</a>
			<button>Resend confirmation Email</button>
		</>
	);
}
