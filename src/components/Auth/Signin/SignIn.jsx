import { useState } from 'react';
import './SignIn.css';
import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Link, Typography, Box } from '@mui/material';

export default function Form() {
	const [name, setName] = useState('');
	// const [name] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// const handleName = (e) => {
	// 	setName(e.target.value);
	// 	setSubmitted(false);
	// };

	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);

			const data = await fetch('https://swapi.dev/api/people/1');
			const json = await data.json();
			console.log(json);
		}
	};

	const successMessage = () => {
		return (
			<div
				className='success'
				style={{
					display: submitted ? '' : 'none',
				}}
			>
				<h1>User {name} successfully registered!!</h1>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div
				className='error'
				style={{
					display: error ? '' : 'none',
				}}
			>
				<h1>Please enter your info</h1>
			</div>
		);
	};

	return (
		<div className='form'>
			<div>
				{/* Logo goes here */}
				<Typography
					variant='h2'
					pt={4}
				>
					Pitch Black
				</Typography>

				<Typography
					variant='subtitle1'
					mt={5}
					sx={{ width: '50%', marginX: 'auto' }}
				>
					Login or Create a new Account below
				</Typography>
			</div>
			{/* Calling to the methods */}
			<div className='messages'>
				{errorMessage()}
				{successMessage()}
			</div>

			<form>
				{/* Labels and inputs for form data */}
				{/* <div> */}
				{/* <label className='label'>Email</label> */}
				<section>
					<TextField
						id='email'
						type='email'
						label='Email'
						variant='filled'
						onChange={handleEmail}
						margin='dense'
						sx={{ width: '80%' }}
						value={email}
					/>
				</section>
				{/* </div> */}
				{/* <div>
					<label className='label'>Password</label> */}
				<section>
					<TextField
						id='password'
						type='password'
						label='Password'
						variant='filled'
						onChange={handlePassword}
						margin='dense'
						sx={{ width: '80%' }}
						value={password}
					/>
				</section>

				{/* </div> */}
				<div>
					<Link
						component={RouterLink}
						to='random'
						underline='hover'
						sx={{ color: 'grey' }}
					>
						Forgot Password?
					</Link>
				</div>

				<div sx={{ position: 'fixed', bottom: '3em', width: '100%' }}>
					<Box
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						minHeight='100vh'
					>
						<Button
							onClick={handleSubmit}
							variant='contained'
							// className='continue-auth'
							sx={{
								width: '80%',
								borderRadius: '50px',
								marginBottom: '2em',
								padding: '10px',
								backgroundColor: '#6200ee',
							}}
						>
							Submit
						</Button>

						<Button
							component={RouterLink}
							to='/SignUp'
							sx={{
								marginBottom: '4em',
								width: '70%',
								color: '#6200ee',
								borderColor: 'lightgrey',
							}}
							variant='outlined'
						>
							Create A New Account
						</Button>
						{/* <Link
							component={RouterLink}
							to='/SignUp'
							sx={{ marginTop: '2em' }}
						>
							Create A New Account
						</Link> */}
					</Box>
				</div>
			</form>
		</div>
	);
}
