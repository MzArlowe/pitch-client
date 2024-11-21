import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProjectChoice() {
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
				What would you like to do?
			</Typography>

			{/* Find an Existing Project Button */}
			<Box sx={{ margin: '20px 0' }}>
				<Button
					fullWidth
					variant='contained'
					color='primary'
					onClick={() => navigate('/FindProject')}
					sx={{ marginBottom: '10px' }}
				>
					Find an Existing Project or Member
				</Button>
			</Box>

			{/* Create My Own Project Button */}
			<Box sx={{ marginBottom: '20px' }}>
				<Button
					fullWidth
					variant='contained'
					color='secondary'
					onClick={() => navigate('/ProjectDetails')}
				>
					Create My Own Project
				</Button>
			</Box>

			{/* Skip for Now Link */}
			<Link
				href='/ConfirmSetup'
				underline='hover'
			>
				Skip for now
			</Link>
		</Box>
	);
}
