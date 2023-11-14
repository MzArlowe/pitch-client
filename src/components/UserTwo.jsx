import React, { useState } from 'react';
import './UserTwo.css';

export default function UserTwo() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		city: '',
		state: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const progress = 25; // Set initial value (0-100).
	let progressDiv = progress;
	if (progress < 2) {
		progressDiv = 2;
	}

	let accountType = 'Funder';
	// let accountType = 'Entrepreneur'

	return (
		<div className='container'>
			<h1>{accountType} Account</h1>
			<h5>Let’s setup your {accountType.toLowerCase()} account details.</h5>

			<h6>{progress}%</h6>

			<div id='progressBar'>
				<div style={{ width: `${progressDiv}%` }}></div>
			</div>

			<form>
				<div className='mb-3'>
					<input
						type='firstName'
						className='form-control'
						placeholder='First Name'
						id='firstName'
						name='firstName'
						value={formData.firstName}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='mb-3'>
					<input
						type='lastName'
						className='form-control'
						placeholder='Last Name'
						id='lastName'
						name='lastName'
						value={formData.lastName}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='mb-3'>
					<input
						type='city'
						className='form-control'
						placeholder='City'
						id='city'
						name='city'
						value={formData.city}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='mb-3'>
					<input
						type='state'
						className='form-control'
						placeholder='State'
						id='state'
						name='state'
						value={formData.state}
						onChange={handleChange}
						required
					/>
				</div>

				<a href='/FindProject'>
					{/* <button
					type='submit'
					className='btn'
				> */}
					Next
					{/* </button> */}
				</a>
			</form>
		</div>
	);
}
