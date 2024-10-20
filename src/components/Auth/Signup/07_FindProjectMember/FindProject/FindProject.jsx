import { Link } from 'react-router-dom';
import { Box, TextField, Typography, Button } from '@mui/material';

export default function FindProject() {
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
				component='h1'
				gutterBottom
			>
				Find Project
			</Typography>

			<TextField
				id='project-name'
				label='Project or Member Name'
				variant='outlined'
				fullWidth
				sx={{ margin: '20px 0' }}
			/>

			{/* Logic for finding the project will go here */}
			<Button
				variant='contained'
				color='primary'
				fullWidth
				component={Link}
				to='/ConfirmSetup'
				sx={{ marginBottom: '20px' }}
			>
				Search
			</Button>

			{/* The skip button allowing us to create a new project */}
			<Button
				variant='contained'
				color='secondary'
				fullWidth
				component={Link}
				to='/ProjectDetails'
				sx={{ marginBottom: '20px' }}
			>
				Create a New Project
			</Button>

			{/* Skip for Now Link */}
			<Link
				to='/ConfirmSetup'
				style={{ textDecoration: 'underline', cursor: 'pointer' }}
			>
				Skip for now
			</Link>
		</Box>
	);
}
