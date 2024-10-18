import { Link } from 'react-router-dom';
// import '../../Auth.css';
// import './FindProject.css';

export default function FindMember() {
	return (
		<div className='auth-parent'>
			<div id='project-search'>
				<h1 className='header-text'>Find Member</h1>

				<input
					id='member-name'
					type='text'
				/>

				{/* some logic here for finding and only continuing when the project is found */}
				{/* WILL NOT be a link, rather a button that will render a redirect if the conditions are met */}
				<Link
					className='primary-btn'
					to='/ConfirmSetup'
				>
					Search
				</Link>
			</div>

			<Link to='/ConfirmSetup'>Skip for now</Link>
			{/* the skip button which allows us to create a new founder project */}
			{/* <Link to='/ProjectDetails'>Create a new Project</Link> */}
		</div>
	);
}
