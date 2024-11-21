import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ConfirmSetup() {
	const navigate = useNavigate();

	const handleCreateAccount = () => {
		navigate('/AccountCreated'); // Redirect to AccountCreated
	};

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
				variant='h5'
				gutterBottom
			>
				By clicking "Create Account" you acknowledge that you have read and
				accepted the Terms of Service and our Privacy Policy.
			</Typography>

			<Box sx={{ marginTop: 2 }}>
				<Button
					variant='contained'
					color='primary'
					onClick={handleCreateAccount}
					fullWidth
				>
					Create Account
				</Button>
			</Box>

			{/* Optionally, you can add a link for additional navigation */}
			<Box sx={{ marginTop: 2 }}>
				<Link
					href='/SignIn'
					underline='hover'
				>
					Already have an account? Sign in
				</Link>
			</Box>
		</Box>
	);
}
