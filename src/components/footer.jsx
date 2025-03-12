import { Box, Divider, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    const linkStyle = (path) => ({
        color: location.pathname === path ? "white" : "#d3d3d3",
        textDecoration: "none",
        transition: "color 0.3s ease",
        fontSize: "16px"
    });

    return (
        <>
            <Divider sx={{ backgroundColor: "#d3d3d3", opacity: 0.2, width: "100%", mb: 2, mt: 4 }} />
            <Box
                sx={{
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    color: "white",
                    padding: "10px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >

                <Typography variant="body2" sx={{ fontSize: "14px", textAlign: "center", color: '#d3d3d3' }}>
                    © {new Date().getFullYear()} MovieNest. All rights reserved.
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: "15px" }}>
                    <Link to="/about" style={linkStyle('/about')}>About</Link>
                    <Link to="/contact" style={linkStyle('/contact')}>Contact Us</Link>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
