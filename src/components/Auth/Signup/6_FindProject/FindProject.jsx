import { Link } from 'react-router-dom';
// import '../../Auth.css';
// import './FindProject.css';

export default function FindProject() {
	return (
		<div className='auth-parent'>
			<div id='project-search'>
				<h1 className='header-text'>Find Project</h1>
				{/* some logic here for finding and only continuing when the project is found */}
				{/* WILL NOT be a link, rather a button that will render a redirect if the conditions are met */}

				<input
					id='project-name'
					type='text'
				/>

				<Link
					className='primary-btn'
					to='/ConfirmSetup'
				>
					Search
				</Link>
			</div>

			{/* the skip button which allows us to create a new founder project */}
			<Link to='/ProjectDetails'>Create a new Project</Link>
		</div>
	);
}
