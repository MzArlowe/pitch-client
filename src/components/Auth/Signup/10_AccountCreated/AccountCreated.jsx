import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { userType } from '../../../../data/NavbarData';
import { useNavigate } from 'react-router-dom';

export default function AccountCreated() {
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
				{userType} Account and Project Created!
			</Typography>
			<Typography
				variant='body1'
				gutterBottom
			>
				If you ever need to update or change your information or project
				details, it will be in your profile settings.
			</Typography>
			<Typography variant='body1'>Let's check out the Dashboard!</Typography>
			<Box sx={{ marginTop: '20px' }}>
				<Button
					variant='contained'
					color='primary'
					fullWidth
					onClick={() => navigate('/Dashboard')}
				>
					Next
				</Button>
			</Box>
		</Box>
	);
}
