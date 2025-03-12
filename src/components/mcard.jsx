import { Link } from "react-router-dom";
import FavButton from "./fav-button";
import { Box, Typography } from '@mui/material';


const MovieCard = (movie) => {
    const imgSrc = movie?.id === 1 ? movie?.img : "https://image.tmdb.org/t/p/w500/" + movie?.poster_path

    return (
        <Link to={`/Movies/${movie.id}`}>
            <Box
                style={{ cursor: "pointer", width: "220px", textAlign: "center", position: "relative" }}>
                <img
                    style={{ width: "100%", borderRadius: 10 }}
                    src={imgSrc} />
                <FavButton movie={movie}></FavButton>
                <Typography
                    sx={{
                        fontWeight: 600,
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.74)",
                        position: "absolute",
                        bottom: "0px",
                        width: "100%",
                        padding: "11px",
                        textAlign: "center",
                        fontSize: "16px",
                        borderRadius: "0px 0px 10px 10px"
                    }}
                >
                    {movie.title}
                </Typography>
            </Box>
        </Link >

    );
}

export default MovieCard;
