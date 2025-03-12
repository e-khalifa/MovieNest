import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge, Box, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import SearchBar from "./search-bar";


const NavBar = () => {
    const currentUser = useSelector((state) => state.auth.currentUser);
    const favMovies = currentUser?.favorites || [];
    const [openDrawer, setOpen] = useState(false)
    const dispatch = useDispatch();
    const location = useLocation();

    const linkStyle = (path) => ({
        color: location.pathname === path ? "white" : "#d3d3d3",
        textDecoration: "none",
        transition: "color 0.3s ease"
    });

    const navLinks = [
        { label: 'Favorites', to: '/Favs', icon: <FavoriteIcon /> },
        !currentUser && { label: "Sign In", to: '/login', icon: <LoginIcon /> },
        currentUser && { label: "Profile", to: '/profile', icon: <AccountCircleIcon /> },
    ].filter(Boolean);

    const mobileOnlyLinks = [
        { label: "About", to: "/about", icon: <InfoIcon /> },
        { label: "Contact Us", to: "/contact", icon: <ContactMailIcon /> },
    ];

    return (

        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            color: "white",
            padding: "10px 30px",
            display: "flex",
            alignItems: "center",
            zIndex: 3,
        }}>
            <Link to="/" style={{
                fontFamily: "'Barriecito', cursive",
                fontSize: "38px",
                color: "white",
                textDecoration: "none",
                paddingLeft: "15px"
            }}>
                <span style={{ color: "#eee4bd" }}>Movie</span>
                <span style={{ color: "#B64E37" }}>Nest</span>
            </Link>

            <Box sx={{
                flex: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center"
            }}>
                <SearchBar />
            </Box>

            <Box sx={{ marginLeft: "auto", display: { xs: "none", md: "flex" }, gap: "15px" }}>
                {navLinks.map((link) =>
                    <Link key={link.to} to={link?.to} style={linkStyle(link?.to)}>{link?.label}
                        {link?.to === '/Favs' && favMovies.length > 0 &&
                            <Badge badgeContent={favMovies.length} color="error" sx={{ ml: "3px" }}>
                                <FavoriteIcon color="error" />
                            </Badge>
                        }
                    </Link>)}
            </Box>

            <IconButton sx={{ marginLeft: "auto", display: { xs: "block", md: "none" }, color: "white" }} onClick={() => { setOpen(true) }}>
                <MenuIcon />
            </IconButton>
            <Drawer open={openDrawer} onClose={() => setOpen(false)} anchor="right" sx={{
                "& .MuiDrawer-paper": {
                    backgroundColor: "#1e1e1e",
                    width: "250px",
                },
            }}>
                <List>
                    <ListItem><SearchBar></SearchBar></ListItem>
                    {[...navLinks, ...mobileOnlyLinks].map((link) =>
                        <ListItem button key={link.to} component={Link} to={link.to} onClick={() => setOpen(false)} sx={{ color: "#d3d3d3" }}>
                            {link.icon}
                            <ListItemText primary={link.label} sx={{ marginLeft: "10px" }} />
                        </ListItem>)}
                </List>
            </Drawer>

        </div>
    );
}

export default NavBar;
