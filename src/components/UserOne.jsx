import React, { useState } from 'react';
import './UserOne.css';

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

	let accountType = 'Funder';
	// let accountType = 'Entrepreneur'

	return (
		<div className='container'>
			<h1>{accountType} Account</h1>
			<h5>
				Let’s setup your {accountType.toLowerCase()} account login details.
			</h5>

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

				<div className='requirements'>
					<a href='/requirements'>Requirements</a>
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

				<button
					type='submit'
					className='btn'
				>
					Next
				</button>
			</form>
			<a href='/Login'>Already have an account?</a>
		</div>
	);
}
