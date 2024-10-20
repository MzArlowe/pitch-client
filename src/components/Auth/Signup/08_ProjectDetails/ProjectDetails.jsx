import React from 'react';
import { Box, TextField, Button, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProjectDetails() {
	const navigate = useNavigate();

	const handleNext = () => {
		// Logic to ensure the form is filled out can go here
		navigate('/ConfirmSetup'); // Redirect to ConfirmSetup
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
				variant='h4'
				gutterBottom
			>
				Project Details
			</Typography>

			<form>
				<TextField
					fullWidth
					placeholder='Project or Business Name'
					sx={{ mb: 2 }} // Margin bottom
				/>
				<TextField
					fullWidth
					placeholder='Industry'
					sx={{ mb: 2 }} // Margin bottom
				/>
				<TextField
					fullWidth
					placeholder='Description of Project or Business'
					multiline
					rows={4} // Set rows for multiline input
					sx={{ mb: 2 }} // Margin bottom
				/>

				{/* Next Button */}
				<Button
					variant='contained'
					color='primary'
					fullWidth
					onClick={handleNext}
					sx={{ mb: 2 }} // Margin bottom
				>
					Next
				</Button>
			</form>

			{/* Optionally add a link to return to the previous page or other actions */}
			<Link
				href='/SomeOtherPage'
				underline='hover'
			>
				Go Back
			</Link>
		</Box>
	);
}
