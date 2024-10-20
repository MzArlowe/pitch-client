import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
	const navigate = useNavigate();

	return (
		<Box
			sx={{
				width: '100%',
				maxWidth: '500px',
				margin: '0 auto',
				padding: '20px',
				textAlign: 'center',
			}}
		>
			<Typography
				variant='h4'
				gutterBottom
			>
				Are you a Founder or a Funder?
			</Typography>

			<Typography
				variant='body1'
				gutterBottom
			>
				<strong>Founder:</strong> An individual who forms and establishes a
				business or organization. Essentially, a Founder takes an idea to an
				entity.
			</Typography>
			<Typography
				variant='body1'
				gutterBottom
			>
				<strong>Funder:</strong> A person or organization that provides money
				for a particular purpose.
			</Typography>

			{/* Founder Button */}
			<Box sx={{ margin: '20px 0' }}>
				<Button
					fullWidth
					variant='contained'
					color='primary'
					onClick={() =>
						navigate('/SignupEmail', { state: { userType: 'Founder' } })
					}
					sx={{ marginBottom: '10px' }}
				>
					Founder
				</Button>
			</Box>

			{/* Funder Button */}
			<Box sx={{ marginBottom: '20px' }}>
				<Button
					fullWidth
					variant='contained'
					color='secondary'
					onClick={() =>
						navigate('/SignupEmail', { state: { userType: 'Funder' } })
					}
				>
					Funder
				</Button>
			</Box>

			{/* Already have an account? */}
			<Link
				href='/SignIn'
				underline='hover'
			>
				Already have an account?
			</Link>
		</Box>
	);
}
