import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FindMember() {
	const [memberName, setMemberName] = useState('');
	const navigate = useNavigate();

	const handleSearch = () => {
		// Placeholder logic: if the memberName is not empty, navigate to '/ConfirmSetup'.
		// You can replace this with actual member search logic later.
		if (memberName.trim()) {
			navigate('/ConfirmSetup');
		}
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
				Find Member
			</Typography>

			{/* Text field to search for a member */}
			<Box sx={{ marginBottom: '20px' }}>
				<TextField
					fullWidth
					id='member-name'
					label='Enter Member Name'
					variant='outlined'
					value={memberName}
					onChange={(e) => setMemberName(e.target.value)}
				/>
			</Box>

			{/* Search Button */}
			<Button
				variant='contained'
				color='primary'
				fullWidth
				onClick={handleSearch}
				disabled={!memberName.trim()} // Disable button if no input
			>
				Search
			</Button>
		</Box>
	);
}
