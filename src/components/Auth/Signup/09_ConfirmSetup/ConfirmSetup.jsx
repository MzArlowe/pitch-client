import { Link } from 'react-router-dom';

export default function ConfirmSetup() {
	return (
		<div>
			<h1>By clicking "Create Account" you acknowledge that you have read and accepted the Terms of Service and our Privacy Policy</h1>

			<br />

			<Link to='/AccountCreated'>Create Account</Link>
		</div>
	)
}