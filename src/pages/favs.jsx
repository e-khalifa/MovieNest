import { useSelector } from "react-redux"
import MovieWideCard from "../components/mwide-card";
import { Box, useMediaQuery } from "@mui/material";
import MovieCard from '../components/mcard';

const Favs = () => {
    const isLg = useMediaQuery('(min-width:985px)');
    const currentUser = useSelector((state) => state.auth.currentUser);
    const favMovies = currentUser?.favorites || [];


    return (
        <>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", rowGap: '30px', mt: 13 }}>
                {favMovies?.map((movie) =>
                    isLg ? (
                        <MovieWideCard key={movie?.id} id={movie?.id} {...movie} />
                    ) : (
                        <MovieCard key={movie?.id} id={movie?.id} {...movie} />
                    )
                )}
            </Box>
        </>
    )
}

export default Favs;