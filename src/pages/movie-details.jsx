import { useParams } from "react-router-dom";
import MovieDetailsCard from "../components/mdetails-card";
import { Box } from "@mui/material";


const MovieDetails = () => {
    const { movieId } = useParams();

    return (
        <Box sx={{ mt: 10, p: 3 }}>

            <MovieDetailsCard id={movieId}></MovieDetailsCard>
        </Box>
    )
}

export default MovieDetails;
