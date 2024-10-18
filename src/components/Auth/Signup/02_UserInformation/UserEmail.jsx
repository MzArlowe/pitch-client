import React, { useState } from 'react';
<<<<<<< HEAD:src/components/UserOne.jsx
import './UserOne.css';
import { userType } from './NavbarData';
=======
import './UserEmail.css';
import { userType } from '../../../../data/NavbarData';
import { Link } from 'react-router-dom';
>>>>>>> 8d0e004858adc7e49dbfd1e633e5231bf1d4feb8:src/components/Auth/Signup/02_UserInformation/UserEmail.jsx

export default function UserOne() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const progress = 0; // Set initial value (0-100).
	let progressDiv = progress;
	if (progress < 2) {
		progressDiv = 2;
	}

	return (
		<div className='container'>
			<h1>{userType} Account</h1>
			<h5>Let’s setup your {userType.toLowerCase()} account login details.</h5>

			<h6>{progress}%</h6>

			<div id='progressBar'>
				<div style={{ width: `${progressDiv}%` }}></div>
			</div>

			<form>
				<div className='mb-3'>
					<input
						type='email'
						className='form-control'
						placeholder='Email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>

				{/* <div className='requirements'>
					<a href='/requirements'>Requirements</a>
				</div> */}
				<div className='mb-3'>
					<input
						type='password'
						className='form-control'
						placeholder='Password'
						id='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='mb-3'>
					<input
						type='password'
						className='form-control'
						placeholder='Confirm Password'
						id='confirmPassword'
						name='confirmPassword'
						value={formData.confirmPassword}
						onChange={handleChange}
						required
					/>
				</div>

				<Link to='/ConfirmEmail'>
					{/* <button
						type='submit'
						className='btn'
					> */}
					Next
					{/* </button> */}
				</Link>
			</form>
		</div>
	);
}
