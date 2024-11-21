import React, { useEffect, useState } from 'react';
import {
	CssBaseline,
	AppBar,
	Button,
	Typography,
	Container,
	Toolbar,
	Box,
	Paper,
} from '@mui/material';
import { styled } from '@mui/system';
// import RSSFeed from 'components/RSSFeed';

const StyledPaper = styled(Paper)({
	padding: '16px',
	margin: '16px 0',
	textAlign: 'center',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
});

export default function Dashboard({ setHideHeader }) {
	useEffect(() => {
		setHideHeader(false);
	}, [setHideHeader]);

	const [contentSrc, setContentSrc] = useState('');
	const [contentName, setContentName] = useState('');

	function readURL(input) {
		if (input.files && input.files[0]) {
			const reader = new FileReader();

			reader.onload = function (e) {
				setContentSrc(e.target.result);
				setContentName(input.files[0].name);
			};

			reader.readAsDataURL(input.files[0]);
		} else {
			removeUpload();
		}
	}

	function removeUpload() {
		setContentSrc('');
		setContentName('');
	}
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
	const feedUrl = `${proxyUrl}https://example.com/rss`; // Use the proxy with the RSS feed

	return (
		<Container>
			<StyledPaper>
				<Typography
					variant='h4'
					gutterBottom
				>
					Welcome to the Dashboard
				</Typography>
				<>
					<CssBaseline />
					<AppBar position='static'>
						<Toolbar>
							<Typography variant='h6'>RSS Feed Dashboard</Typography>
						</Toolbar>
					</AppBar>
					<Dashboard />
				</>
				<iframe
					id='map'
					title='Inline Frame Example'
					src='https://www.openstreetmap.org/export/embed.html?bbox=-86.62788391113281%2C39.52787769468346%2C-85.80940246582033%2C40.031294855540054&layer=mapnik'
					style={{ width: '100%', height: '300px', border: 'none' }}
				/>
				<Typography
					variant='h4'
					component='h1'
					gutterBottom
				>
					Dashboard - RSS Feed
				</Typography>
				{/* <RSSFeed feedUrl={feedUrl} /> */}
			</StyledPaper>

			<StyledPaper>
				<Button
					variant='contained'
					component='label'
					style={{ marginBottom: '16px' }}
				>
					Add File
					<input
						type='file'
						hidden
						onChange={(e) => readURL(e.target)}
					/>
				</Button>

				<Box>
					<Typography variant='body1'>
						Drag and drop a file or select to add a file
					</Typography>
				</Box>

				{contentSrc && (
					<Box mt={2}>
						<img
							style={{ maxWidth: '100%', borderRadius: '8px' }}
							src={contentSrc}
							alt='uploaded'
						/>
						<Box mt={2}>
							<Button
								variant='outlined'
								color='error'
								onClick={removeUpload}
							>
								Remove <span className='content-title'>{contentName}</span>
							</Button>
						</Box>
					</Box>
				)}
			</StyledPaper>

			<StyledPaper>
				<Button
					variant='contained'
					onClick={() => document.querySelector('.file-upload-input').click()}
				>
					Upload
				</Button>
			</StyledPaper>
		</Container>
	);
}
