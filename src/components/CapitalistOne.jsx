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
		<div className='container'>
			<h2>{accountType} Account</h2>
			<h5>
				Let’s setup your {accountType.toLowerCase()} account login details.
			</h5>
			<h6>0%</h6>

			<div id='progressBar'>
				<div></div>
			</div>

			<form>
				<div className='mb-3'>
					<label className='form-label'></label>
					<input
						type='email'
						className='form-control'
						placeholder='Email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='mb-3'>
					<label
						className='form-label'
						for='password'
					></label>
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
				<div className='subtext'>
					<a href='/Requirements'>Requirements</a>
				</div>
				<div className='mb-3'>
					<label
						className='form-label'
						for='confirmPassword'
					></label>
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
				<div className='subtext'>Retype password</div>
				<button
					type='submit'
					className='btn btn-primary'
				>
					Next
				</button>
			</form>
			<br />
			<a href='/Login'>Already have an Account?</a>
		</div>
	);
}
