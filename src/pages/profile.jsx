import { useSelector } from "react-redux"
import { Box } from "@mui/material";

const Profile = () => {
    const currentUser = useSelector((state) => state.auth.currentUser)
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}>{currentUser?.firstName}</Box>
        </>
    )
}

export default Profile;