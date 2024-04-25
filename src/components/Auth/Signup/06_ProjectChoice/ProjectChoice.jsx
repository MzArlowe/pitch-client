import { Link } from 'react-router-dom';

export default function ProjectChoice() {
	return (
		<div>
			<Link to='/FindProject'>Find an Existing Project or Member</Link>

			<br />

			<Link to='/ProjectDetails'>Create My Own Project</Link>

			<br />

			<Link to='/ConfirmSetup'>skip for now</Link>
		</div>
	);
}
