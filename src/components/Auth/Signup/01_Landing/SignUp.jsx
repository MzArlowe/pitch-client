import './SignUp.css';
<<<<<<< HEAD:src/components/SignUp.jsx
import { setUserType } from './NavbarData';
=======
import { setUserType, setNavbar } from '../../../../data/NavbarData';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
>>>>>>> 8d0e004858adc7e49dbfd1e633e5231bf1d4feb8:src/components/Auth/Signup/01_Landing/SignUp.jsx

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
				<Link
					className='button'
					to='/SignupEmail'
				>
					<button onClick={() => setUserType('Founder')}>Founder</button>
<<<<<<< HEAD:src/components/SignUp.jsx
				</a>
			</div>

			<div>
				<a
				// className='button'
				// href='/UserOne'
				>
					<button onClick={() => setUserType('Funder')}>Funder</button>
				</a>
=======
				</Link>
			</div>

			<div>
				<Link
					className='button'
					to='/SignupEmail'
				>
					<button onClick={() => setUserType('Funder')}>Funder</button>
				</Link>
>>>>>>> 8d0e004858adc7e49dbfd1e633e5231bf1d4feb8:src/components/Auth/Signup/01_Landing/SignUp.jsx
			</div>

			<Link to='/SignIn'>Already have an account?</Link>
		</div>
	);
}
