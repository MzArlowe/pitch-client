import { Link } from 'react-router-dom';

export default function ProjectDetails() {
	return (
		<div>
			<form>
				<input placeholder='project or business name' />
				<input placeholder='industry' />
				<input placeholder='description of project or business' />
			</form>

			{/* in the future will NOT be a link, rather will need to be a button with logic to ensure the form is filled out and the user is truly ready to move to the next step. once this condition is met, render a redirect */}
			<Link to='/ConfirmSetup'>Next</Link>
		</div>
	);
}
