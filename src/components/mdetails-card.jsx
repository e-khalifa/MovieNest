import { useSelector } from "react-redux";
import FavButton from "./fav-button";
import { Box, Typography, Card, CardMedia, CardContent, Chip, useMediaQuery, useTheme } from "@mui/material";
import { CalendarToday, Movie } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";


const MovieDetailsCard = ({ id }) => {
    const theme = useTheme();
    const movies = useSelector((state) => state.movies.movies);
    const movie = movies.find(m => m.id == id);
    const posterSrc = movie?.id === 1 ? movie?.poster : "https://image.tmdb.org/t/p/w500/" + movie?.backdrop_path;
    const imgSrc = movie?.id === 1 ? movie?.img : "https://image.tmdb.org/t/p/w500/" + movie?.poster_path;

    const isSm = useMediaQuery(theme.breakpoints.up('sm'))

    return (

        <Card sx={{
            backgroundColor: "#1c1c1c", color: "#fff", borderRadius: "15px", overflow: "hidden", position: "relative", boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
        }}>
            <Box sx={{
                position: "relative",
                width: "100%",
                height: { xs: '250px', sm: '300px', md: '400px' },
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <CardMedia
                    component="img"
                    sx={{
                        width: "100%",
                        height: "100%",
                        filter: { sm: "blur(5px)" },
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                    image={posterSrc}
                    alt={movie?.title}
                />
                {isSm && <CardMedia
                    component="img"
                    sx={{
                        width: "180px",
                        height: "270px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        position: "relative",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
                    }}
                    image={imgSrc}
                    alt={movie?.title}
                />}
            </Box>
            <CardContent sx={{ p: 3, mt: 3, textAlign: "left" }}>
                <FavButton movie={movie} />
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <Typography sx={{
                        fontSize: "36px",
                        lineHeight: "1.2",
                        fontWeight: "bold"
                    }}>
                        {movie?.title}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", fontSize: "16px" }}>
                        <StarIcon sx={{ color: "#FFD700", fontSize: "20px" }} />
                        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                            ({movie?.vote_average}/5)
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="body2" sx={{ display: "flex", justifyContent: "start", alignItems: 'center', gap: 1, color: '#d3d3d3' }}>
                    <CalendarToday sx={{ color: "#d3d3d3" }} /> {movie?.release_date}
                </Typography>
                <Typography sx={{ lineHeight: 1.6, mt: 3, mb: 2 }}>
                    {movie?.overview}
                </Typography>
                {/* <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                    <Movie sx={{ color: "#ff9800" }} />
                    {movie?.genre_ids.map((genre, index) => (
                        <Chip key={index} label={`Genre ${genre}`} color="primary" />
                    ))}
                </Box> */}
            </CardContent>
        </Card>
    )
}

export default MovieDetailsCard;