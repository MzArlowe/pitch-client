import './SignUp.css';
import { setUserType, setNavbar } from '../../../../data/NavbarData';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function SignUp() {
	useEffect(() => {
		// setTimeout(() => {
		setNavbar(false);
		// }, 100);
	}, []);
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
				<Link
					className='button'
					to='/SignupEmail'
				>
					<button onClick={() => setUserType('Founder')}>Founder</button>
				</Link>
			</div>

			<div>
				<Link
					className='button'
					to='/SignupEmail'
				>
					<button onClick={() => setUserType('Funder')}>Funder</button>
				</Link>
			</div>
		</div>
	);
}
