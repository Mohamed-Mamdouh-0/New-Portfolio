import React from 'react';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Switch from '@mui/material/Switch';

function Sidebar({ mode, setMode }) {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position={'fixed'}>
				<List>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary='Inbox' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<ArticleIcon />
							</ListItemIcon>
							<ListItemText primary='Pages' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<GroupsIcon />
							</ListItemIcon>
							<ListItemText primary='Groups' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<StorefrontIcon />
							</ListItemIcon>
							<ListItemText primary='Marketplace' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary='Friends' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary='Settings' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<AccountBoxIcon />
							</ListItemIcon>
							<ListItemText primary='Profile' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<NightlightIcon />
							</ListItemIcon>
							<Switch
								onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
}

export default Sidebar;
