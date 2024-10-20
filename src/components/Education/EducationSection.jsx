import React from 'react';
import {
	Typography,
	Container,
	List,
	ListItem,
	ListItemText,
	Link as MUILink,
} from '@mui/material';

const EducationSection = () => {
	console.log('Rendering EducationSection'); // Add this line
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
		{
			category: 'Business Structure and Legal Considerations',
			items: [
				{
					name: 'SBA Website - Choose Your Business Structure',
					url: 'https://www.sba.gov/business-guide/launch-your-business/choose-business-structure',
				},
				{
					name: 'Starting/Incorporating a Business - LegalZoom',
					url: 'https://www.legalzoom.com',
				},
				{
					name: 'Internal Revenue Service (IRS) - Small Business and Self-Employed Tax Center',
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
					description:
						'(Provides access to capital and financial assistance programs)',
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
					description:
						'(Connects minority-owned businesses with corporate members)',
				},
				{
					name: 'SCORE - Resources for Minority-Owned Businesses',
					url: 'https://www.score.org/page/black-entrepreneurs',
				},
				{
					name: 'Operation HOPE',
					url: 'https://operationhope.org/',
					description: '(Provides financial literacy and empowerment programs)',
				},
			],
		},
		{
			category: 'General Business Guidance',
			items: [
				{
					name: 'SBA - 10 Steps to Start Your Business',
					url: 'https://www.sba.gov/business-guide/10-steps-start-your-business',
				},
				{
					name: 'Small Business Administration (SBA)',
					url: 'https://www.sba.gov/',
					description:
						'(Offers a wealth of resources, including counseling, training, and funding programs)',
				},
				{
					name: 'Service Corps of Retired Executives (SCORE)',
					url: 'https://www.score.org/',
					description:
						'(Provides free mentoring and counseling from experienced business professionals)',
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
					name: 'SBA - Office of Advocacy',
					url: 'https://advocacy.sba.gov/',
					description: '(Publishes research and data on small businesses)',
				},
				{
					name: 'Minority Business Development Agency (MBDA) - Research and Data',
					url: 'https://www.mbda.gov/',
				},
			],
		},
		{
			category: 'Additional Resources',
			items: [
				{
					name: 'U.S. Chamber of Commerce - Top Resources for Minority-Owned Businesses',
					url: 'https://www.uschamber.com/co/start/strategy/top-resources-for-minority-owned-businesses',
				},
				{
					name: '39 Small-Business Grants for Minority Entrepreneurs (NerdWallet)',
					url: 'https://www.nerdwallet.com/article/small-business/small-business-grants-minorities',
				},
				{
					name: 'Local Chambers of Commerce and Business Associations',
					description:
						'(Many local organizations offer resources and support specifically for minority-owned businesses.)',
				},
			],
		},
	];

	return (
		<Container>
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
