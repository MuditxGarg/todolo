import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
  { label: 'Home', url: '/' },
  { label: 'Help', url: '/help' },
  { label: 'Our Team', url: '/about' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" sx={{ backgroundColor: '#BEF7F1' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page.label}
								onClick={handleCloseNavMenu}
                component={ Link }
                to={page.url}
								sx={{
                  my: 2,
                  color: '#155360',
                  display: 'block',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
							>
								{page.label}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Button
							variant="contained"
              component={ Link }
              to={'/login'}
							sx={{
								borderRadius: '20px',
								backgroundColor: 'white',
								color: '#155360',
								fontWeight: 'bold',
								'&:hover': {
									backgroundColor: 'rgba(52, 196, 181, 0.6)',
								}
							}}
            >
              Login
            </Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
