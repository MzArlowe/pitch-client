import './AccountCreated.css';
// import { setUserType } from './NavbarData';

export default function AccountCreated() {
	const progress = 0; // Set initial value (0-100).
	let progressDiv = progress;
	if (progress < 2) {
		progressDiv = 2;
	}
	return (
		<div>
			<h1>Funder Account Created!</h1>
			<div>
				<h6>{progress}%</h6>

				<p>
					If you ever need to update of change your information or project
					details, it will be in your profile settings
				</p>
				<p>Let's check out your dashboard</p>

				<div>
					<a
						className='button'
						href='/UserOne'
					>
						<button>Next</button>
					</a>
				</div>
			</div>
		</div>
	);
}
