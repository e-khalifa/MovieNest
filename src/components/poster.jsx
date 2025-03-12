import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import MovieIcon from "@mui/icons-material/Movie";
import { Box, Typography } from "@mui/material";
import { addFav } from "../store/slices/users";


const Poster = () => {
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movies.movies);
    const myMovie = movies?.find(m => m.id === 1) ?? {};

    const handleFavClick = () => {
        dispatch(addFav(myMovie));
    };


    return (
        <div className="poster-container">
            <img
                src={myMovie.poster_path || myMovie.poster}
                style={{ width: "100%", display: "block" }}
            />
            <div style={{
                position: "absolute",
                top: "34%",
                left: 0,
                width: "100%",
                height: "68%",
                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 0%, #242424 100%)",
            }}></div>

            <Box sx={{
                position: "absolute",
                bottom: "16%",
                color: "#fff",
                textAlign: "left",
                zIndex: 2,
                maxWidth: "45%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                borderRadius: "0px 20px 20px 0px",
                padding: "20px 30px"
            }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <Typography sx={{
                        fontSize: "36px",
                        lineHeight: "1.2",
                        fontWeight: "bold"
                    }}>
                        {myMovie.title}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", fontSize: "16px" }}>
                        <StarIcon sx={{ color: "#FFD700", fontSize: "20px" }} />
                        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                            ({myMovie.vote_average}/10)
                        </Typography>
                    </Box>
                </Box>


                <Typography style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    marginBottom: "20px",
                    maxHeight: "120px",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }}>
                    {myMovie.overview}
                </Typography>
                <Box style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                    <MovieIcon style={{ color: "#eee4bd" }} />
                    <span style={{ fontSize: "16px", fontWeight: "bold" }}>Starring:</span>
                    <span style={{ fontSize: "16px" }}>{myMovie.starring}</span>
                </Box>



                <Link to={`/Favs`}>
                    <button
                        onClick={handleFavClick}
                        style={{
                            backgroundColor: "#e50914",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease"
                        }}>
                        Add to Favorites
                    </button>
                </Link>
            </Box>
        </div>
    );
};


export default Poster;