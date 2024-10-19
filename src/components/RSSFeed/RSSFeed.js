import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Typography,
	Card,
	CardContent,
	Grid,
	CircularProgress,
} from '@mui/material';
import { parseString } from 'xml2js';

const RSSFeed = ({ feedUrl }) => {
	const [rssFeed, setRssFeed] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Fetch the RSS feed data
		const fetchRSSFeed = async () => {
			try {
				const response = await axios.get(feedUrl, {
					headers: { 'Content-Type': 'application/rss+xml' },
				});
				parseString(response.data, (err, result) => {
					if (err) {
						console.error('Error parsing RSS feed:', err);
					} else {
						const feedItems = result.rss.channel[0].item;
						setRssFeed(feedItems);
						setLoading(false);
					}
				});
			} catch (error) {
				console.error('Error fetching RSS feed:', error);
			}
		};

		fetchRSSFeed();
	}, [feedUrl]);

	if (loading) {
		return <CircularProgress />;
	}

	return (
		<Grid
			container
			spacing={2}
		>
			{rssFeed.map((item, index) => (
				<Grid
					item
					xs={12}
					md={6}
					lg={4}
					key={index}
				>
					<Card>
						<CardContent>
							<Typography
								variant='h6'
								component='div'
							>
								{item.title[0]}
							</Typography>
							<Typography
								variant='body2'
								color='text.secondary'
							>
								{item.pubDate[0]}
							</Typography>
							<Typography
								variant='body1'
								component='div'
							>
								{item.description[0]}
							</Typography>
							<Typography
								variant='body2'
								component='div'
							>
								<a
									href={item.link[0]}
									target='_blank'
									rel='noopener noreferrer'
								>
									Read more
								</a>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default RSSFeed;
