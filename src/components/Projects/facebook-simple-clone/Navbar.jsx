import { useState } from 'react';
import {
	Box,
	AppBar,
	Toolbar,
	styled,
	Typography,
	InputBase,
	Avatar,
} from '@mui/material';
import { Notifications, Pets } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Navbar() {
	const [open, setOpen] = useState(false);
	const StyledToolbar = styled(Toolbar)({
		display: 'flex',
		justifyContent: 'space-between',
	});
	const Search = styled('div')(({ theme }) => ({
		backgroundColor: 'white',
		padding: '0 10px',
		borderRadius: theme.shape.borderRadius,
		width: '40%',
	}));
	const Icons = styled(Box)(({ theme }) => ({
		display: 'none',
		gap: '20px',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
		},
	}));
	const UserBox = styled(Box)(({ theme }) => ({
		display: 'flex',
		gap: '10px',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	}));
	return (
		<AppBar position='sticky' sx={{ zIndex: 1 }}>
			<StyledToolbar>
				<Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
					Facebook
				</Typography>
				<Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
				<Search>
					<InputBase placeholder='Search..' />
				</Search>

				<Icons>
					<Badge badgeContent={4} color='error'>
						<MailIcon />
					</Badge>
					<Badge badgeContent={4} color='error'>
						<Notifications />
					</Badge>
					<Avatar
						sx={{ width: 30, height: 30 }}
						onClick={(e) => setOpen(true)}
					/>
				</Icons>
				<UserBox>
					<Avatar
						sx={{ width: 30, height: 30 }}
						onClick={(e) => setOpen(true)}
					/>
					<Typography variant='span'>Mohamed</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				open={open}
				onClose={(e) => setOpen(false)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
}

export default Navbar;
