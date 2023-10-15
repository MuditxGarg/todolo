import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import NavLogo from "../assets/logo_no_background.png"; // Import your logo image
import "../styles/navbarStyles.css"; // Import your custom CSS styles

// Define an array of page links
const pages = [
  { label: "Home", url: "/" },
  { label: "Help", url: "/help" },
  { label: "Our Team", url: "/about" },
];

function ResponsiveAppBar({ isLoggedIn }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu
  const navigate = useNavigate(); // Function for programmatic navigation

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to redirect to the user's profile page
  const redirectToProfile = () => {
    navigate("/profile"); // Use the navigate function to redirect
  };

  const navLogoRedirect = () => {
    navigate("/");
  };

  return (
    // The main AppBar component
    <AppBar position="static" sx={{ backgroundColor: "#BEF7F1" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Menu Icon for Mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Menu"
            onClick={toggleMobileMenu}
            sx={{ display: { md: "none" }, color: "#155360" }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo Image */}
          <img
            src={NavLogo} // Replace with the actual path to your logo image
            className="navLogo" // Apply custom CSS class for styling
            alt="Website Logo"
            style={{
              width: "70px", // Set the desired width for your image
              height: "55px", // Set the desired height for your image
              objectFit: "cover", // Use 'cover' to fill the circular space
              objectPosition: "center center", // Center the image within the circle
              cursor: "pointer",
            }}
            onClick={navLogoRedirect}
          />

          {/* Navigation Links */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* Text or logo next to the logo, if needed */}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "1.4rem",
            }}
          >
            {/* Map through 'pages' array to create navigation buttons */}
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.url}
                sx={{
                  my: 2,
                  color: "#155360",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* User Menu (Avatar or Login Button) */}
          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
              // Render Avatar with circle when user is logged in
              <Tooltip title="User Menu">
                <IconButton
                  color="inherit"
                  aria-label="User Menu"
                  aria-controls="user-menu"
                  aria-haspopup="true"
                  onClick={redirectToProfile}
                >
                  <Avatar
                    sx={{
                      backgroundColor: "#155360",
                    }}
                  >
                    <PersonIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
            ) : (
              // Render "Login" button when user is not logged in
              <Button
                variant="contained"
                component={Link}
                to={"/login"}
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  color: "#155360",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "rgba(52, 196, 181, 0.6)",
                  },
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>

        {/* Mobile menu */}
        <Drawer
          anchor="left"
          open={isMobileMenuOpen}
          onClose={closeMobileMenu}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#BEF7F1",
            },
          }}
        >
          <List>
            {/* Map through 'pages' array to create mobile menu items */}
            {pages.map((page) => (
              <ListItem
                key={page.label}
                button
                component={Link}
                to={page.url}
                onClick={closeMobileMenu}
              >
                <ListItemText primary={page.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
