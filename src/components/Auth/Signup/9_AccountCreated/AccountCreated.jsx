import { Link } from 'react-router-dom';

export default function AccountCreated() {
	return (
		<div>
			{/* conditionally render "and Project" depending on if the founder created a new project or was added to an existing project */}
			<h1>Founder Account and Project Created!</h1>
			<h3>
				If you ever need to update or change your information or project details
				it will be in your profile settings
			</h3>
			Let's check out the Dashboard!
			<br />
			<Link to='/Dashboard'>Next</Link>
		</div>
	);
}
