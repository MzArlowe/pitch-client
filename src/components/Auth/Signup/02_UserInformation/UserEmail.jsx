import React, { useState } from 'react';
import './UserEmail.css';
import { Link } from 'react-router-dom';

export default function UserOne() {
	// Set userType dynamically using state
	const [userType, setUserType] = useState('Founder'); // Default to 'Founder' or 'Funder'

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

	const progress = 0; // Set initial value (0-100)
	let progressDiv = progress;
	if (progress < 2) {
		progressDiv = 2;
	}

	return (
		<div className='container'>
			<h1>{userType} Account</h1>
			<h5>Let’s set up your {userType.toLowerCase()} account login details.</h5>

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

				<Link
					to='/ConfirmEmail'
					className='btn'
				>
					Next
				</Link>
			</form>
		</div>
	);
}
