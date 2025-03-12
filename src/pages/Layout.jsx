import { Box } from "@mui/material";
import Footer from "../components/footer";
import NavBar from "../components/nav-bar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <NavBar />
            <Box sx={{ flex: 1, width: '100%' }}>
                <Outlet />
            </Box>
            <Footer sx={{ width: "100%", mt: "auto" }} />
        </Box>
    );
};

export default Layout;
