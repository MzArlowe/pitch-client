import { Link } from 'react-router-dom';
import './ConfirmEmail.css';

export default function ConfirmEmail() {
	return (
		<>
			<div>
				<h1>Confirm your Email</h1>
				<h6>Let's continue...</h6>
			</div>

			{/* instead of being a direct link, will need to wait for the confirmation, or time out after a certain amount of time, with some visual loading/progress to go along with it */}
			<Link to='/EmailConfirmed'>
				<button>Send Confirmation Email</button>
			</Link>
		</>
	);
}
