// import Sidebar from './components/Sidebar';
// import Rightbar from './components/Rightbar';
// import Feed from './components/Feed';
import { Box, Stack, ThemeProvider } from '@mui/material';
// import Navbar from './components/Navbar';
// import Add from './components/Add';
import { useState } from 'react';
import { createTheme } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightbar from './Rightbar';
import Add from './Add';

function FacebookHome() {
	const [mode, setMode] = useState('light');
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<Box bgcolor={'background.default'} color={'text.primary'}>
				<Navbar />
				{/* <Chat /> */}
				<Stack direction='row' spacing={2} justifyContent='space-between'>
					<Sidebar setMode={setMode} mode={mode} />
					<Feed />
					<Rightbar />
				</Stack>
				<Add />
			</Box>
		</ThemeProvider>
	);
}

export default FacebookHome;
