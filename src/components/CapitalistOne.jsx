import React, { useState } from 'react';
import './CapitalistOne.css';

export default function CapitalistOne() {
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

	let accountType = 'Venture Capitalist';
	// let accountType = 'Entrepreneur'

	return (
		<>
			<h2>{accountType} Account</h2>
			<h5>
				Let’s setup your {accountType.toLowerCase()} account login details.
			</h5>
			<p>0%</p>

			<div id='progressBar'>
				<div></div>
			</div>

			<form>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						id='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor='confirmPassword'>Confirm Password:</label>
					<input
						type='password'
						id='confirmPassword'
						name='confirmPassword'
						value={formData.confirmPassword}
						onChange={handleChange}
						required
					/>
				</div>
				<button type='submit'>Next</button>
			</form>
			<br />
			<a href='/Login'>Already have an Account?</a>
		</>
	);
}
