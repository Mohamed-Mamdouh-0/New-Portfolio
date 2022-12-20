import React from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

function Rightbar() {
	return (
		<Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position={'fixed'} width={300}>
				<Typography variant='h6' fontWeight={100}>
					Online Friends
				</Typography>
				<AvatarGroup max={7}>
					<Avatar
						alt='Remy Sharp'
						src='https://material-ui.com/static/images/avatar/1.jpg'
					/>
					<Avatar
						alt='Travis Howard'
						src='https://material-ui.com/static/images/avatar/2.jpg'
					/>
					<Avatar
						alt='Cindy Baker'
						src='https://material-ui.com/static/images/avatar/3.jpg'
					/>
					<Avatar
						alt='Agnes Walker'
						src='https://material-ui.com/static/images/avatar/4.jpg'
					/>
					<Avatar
						alt='Trevor Henderson'
						src='https://material-ui.com/static/images/avatar/5.jpg'
					/>
					<Avatar
						alt='Remy Sharp'
						src='https://material-ui.com/static/images/avatar/1.jpg'
					/>
					<Avatar
						alt='Travis Howard'
						src='https://material-ui.com/static/images/avatar/2.jpg'
					/>
					<Avatar
						alt='Cindy Baker'
						src='https://material-ui.com/static/images/avatar/3.jpg'
					/>
					<Avatar
						alt='Agnes Walker'
						src='https://material-ui.com/static/images/avatar/4.jpg'
					/>
					<Avatar
						alt='Trevor Henderson'
						src='https://material-ui.com/static/images/avatar/5.jpg'
					/>
				</AvatarGroup>
				<Typography variant='h6' fontWeight={100} mt={2} mb={2}>
					Latest Photos
				</Typography>
				<ImageList cols={3} rowHeight={100}>
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<img
								src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
								srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
								alt={item.title}
								loading='lazy'
							/>
						</ImageListItem>
					))}
				</ImageList>
				<Typography variant='h6' fontWeight={100} mt={2}>
					Latest Conversations
				</Typography>
				<List
					sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar
								alt='Remy Sharp'
								src='https://material-ui.com/static/images/avatar/1.jpg'
							/>
						</ListItemAvatar>
						<ListItemText
							primary='Brunch this weekend?'
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component='span'
										variant='body2'
										color='text.primary'>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant='inset' component='li' />
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar
								alt='Travis Howard'
								src='https://material-ui.com/static/images/avatar/2.jpg'
							/>
						</ListItemAvatar>
						<ListItemText
							primary='Summer BBQ'
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component='span'
										variant='body2'
										color='text.primary'>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant='inset' component='li' />
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar
								alt='Cindy Baker'
								src='https://material-ui.com/static/images/avatar/3.jpg'
							/>
						</ListItemAvatar>
						<ListItemText
							primary='Oui Oui'
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component='span'
										variant='body2'
										color='text.primary'>
										Sandra Adams
									</Typography>
									{' — Do you have Paris recommendations? Have you ever…'}
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
}

export default Rightbar;

const itemData = [
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
	},
	{
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
	},
	{
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
	},
	{
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
	},
	{
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
	},
	{
		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
		title: 'Honey',
	},
];
