import './confirmEmail.css';

export default function confirmEmail() {
	return (
		<>
			<div>
				<h1>Confirm your Email</h1>
				<h6>Let's continue...</h6>
			</div>

			<a href='/emailConfirmed'>
				<button>Next</button>
			</a>
		</>
	);
}
