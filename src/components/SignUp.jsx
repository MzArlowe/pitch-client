import './SignUp.css';

export default function SignUp() {
	return (
		<div>
			<h1>Are you a Founder or a Funder?</h1>
			<p>
				<strong>Founder: </strong>And individual that forms and establishes a
				business or organization. Essentially, a Founder takes an idea to an
				entity.
			</p>
			<p>
				<strong>Funder: </strong>A person or organization that provides money
				for a particular purpose.
			</p>

			<div>
				<a
					className='button'
					href='/UserOne'
				>
					<button>Founder</button>
				</a>
			</div>

			<div className='button'>
				<a href='/UserOne'>
					<button>Funder</button>
				</a>
			</div>
		</div>
	);
}
