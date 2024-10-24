import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	List,
	ListItem,
	ListItemText,
	Link as MUILink,
} from '@mui/material';

const EducationSection = () => {
	const links = [
		{
			name: 'Structure for your business (SBA Website)',
			url: 'https://www.sba.gov/business-guide/launch-your-business/choose-business-structure',
		},
		{
			name: 'How to start a minority business (Nerdwallet Website)',
			url: 'https://www.nerdwallet.com/article/small-business/how-to-start-a-minority-owned-business',
		},
		{
			name: 'Small Business Statistics (Nerdwallet Website)',
			url: 'https://www.nerdwallet.com/article/small-business/small-business-statistics',
		},
		{
			name: 'Types of Investors (Forbes Website)',
			url: 'https://www.forbes.com/sites/alejandrocremades/2019/01/02/8-types-of-investors-for-startups/?sh=714a202e4a3e',
		},
		{
			name: 'Starting/Incorporating a Business',
			url: 'https://www.legalzoom.com',
		},
		{
			name: 'What is an accredited investor (Forbes Website)',
			url: 'https://www.forbes.com/advisor/investing/what-is-accredited-investor/',
		},
	];

	return (
		<Container>
			{/* <AppBar position='static'>
				<Toolbar>
					<Typography variant='h6'>Education</Typography>
				</Toolbar>
			</AppBar> */}

			<Typography
				variant='h4'
				gutterBottom
				style={{ marginTop: '20px' }}
			>
				Resources for Everyone
			</Typography>

			<List>
				{links.map((link, index) => (
					<ListItem key={index}>
						<MUILink
							href={link.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							<ListItemText primary={link.name} />
						</MUILink>
					</ListItem>
				))}
			</List>
		</Container>
	);
};

export default EducationSection;
