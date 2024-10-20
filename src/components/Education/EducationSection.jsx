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
			category: 'Business Structure and Legal Considerations',
			items: [
				{
					name: 'Choose Your Business Structure (SBA Website)',
					url: 'https://www.sba.gov/business-guide/launch-your-business/choose-business-structure',
				},
				{
					name: 'Starting/Incorporating a Business (LegalZoom)',
					url: 'https://www.legalzoom.com',
				},
				{
					name: 'Small Business and Self-Employed Tax Center (IRS)',
					url: 'https://www.irs.gov/businesses/small-businesses-self-employed',
				},
			],
		},
		{
			category: 'Funding and Investors',
			items: [
				{
					name: 'Types of Investors (Forbes)',
					url: 'https://www.forbes.com/sites/alejandrocremades/2019/01/02/8-types-of-investors-for-startups/?sh=714a202e4a3e',
				},
				{
					name: 'What is an Accredited Investor (Forbes)',
					url: 'https://www.forbes.com/advisor/investing/what-is-accredited-investor/',
				},
				{
					name: 'Minority Business Development Agency (MBDA)',
					url: 'https://www.mbda.gov/',
				},
			],
		},
		{
			category: 'Resources for Minority-Owned Businesses',
			items: [
				{
					name: 'How to Start a Minority Business (NerdWallet)',
					url: 'https://www.nerdwallet.com/article/small-business/how-to-start-a-minority-owned-business',
				},
				{
					name: 'National Minority Supplier Development Council (NMSDC)',
					url: 'https://nmsdc.org/',
				},
				{
					name: 'SCORE - Resources for Minority-Owned Businesses',
					url: 'https://www.score.org/page/black-entrepreneurs',
				},
				{
					name: 'Operation HOPE',
					url: 'https://operationhope.org/',
				},
			],
		},
		{
			category: 'General Business Guidance',
			items: [
				{
					name: '10 Steps to Start Your Business (SBA)',
					url: 'https://www.sba.gov/business-guide/10-steps-start-your-business',
				},
				{
					name: 'Small Business Administration (SBA)',
					url: 'https://www.sba.gov/',
				},
				{
					name: 'Service Corps of Retired Executives (SCORE)',
					url: 'https://www.score.org/',
				},
			],
		},
		{
			category: 'Statistics and Trends',
			items: [
				{
					name: 'Small Business Statistics (NerdWallet)',
					url: 'https://www.nerdwallet.com/article/small-business/small-business-statistics',
				},
				{
					name: 'Office of Advocacy (SBA)',
					url: 'https://advocacy.sba.gov/',
				},
				{
					name: 'MBDA - Research and Data',
					url: 'https://www.mbda.gov/',
				},
			],
		},
		{
			category: 'Additional Resources',
			items: [
				{
					name: 'Top Resources for Minority-Owned Businesses (U.S. Chamber of Commerce)',
					url: 'https://www.uschamber.com/co/start/strategy/top-resources-for-minority-owned-businesses',
				},
				{
					name: '39 Small-Business Grants for Minority Entrepreneurs (NerdWallet)',
					url: 'https://www.nerdwallet.com/article/small-business/small-business-grants-minorities',
				},
				{
					name: 'Local Chambers of Commerce and Business Associations',
					url: '#', // Placeholder, add the actual URL if available
				},
			],
		},
	];

	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6'>Education</Typography>
				</Toolbar>
			</AppBar>

			{/* Add a Toolbar to create space below the AppBar */}
			<Toolbar />

			<Container>
				<Typography
					variant='h4'
					gutterBottom
					style={{ marginTop: '20px' }}
				>
					Resources for Everyone
				</Typography>

				{links.map((category, index) => (
					<div key={index}>
						<Typography
							variant='h5'
							gutterBottom
						>
							{category.category}
						</Typography>
						<List>
							{category.items.map((link, linkIndex) => (
								<ListItem key={linkIndex}>
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
					</div>
				))}
			</Container>
		</>
	);
};

export default EducationSection;
