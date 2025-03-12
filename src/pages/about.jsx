import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

const About = () => {
    return (
        <Box
            sx={{
                maxWidth: "900px",
                margin: "50px auto",
                mt: 13,
                padding: "20px",
                color: "#fff",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#1c1c1c",
                borderRadius: "15px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
                textAlign: "center",
            }}
        >
            <Typography variant="h3" sx={{
                fontFamily: "'Barriecito', cursive", color: "#B64E37"
            }} gutterBottom>
                About us
            </Typography>

            <Card sx={{
                backgroundColor: "#2a2a2a", borderRadius: "10px", color: '#eee4bd'
            }}>
                < CardMedia
                    component="img"
                    height="300"
                    image="1.jpg"
                    alt="Movie Theater"
                />
                <CardContent>
                    <Typography variant="body1">
                        Welcome to <strong>MovieNest</strong>, your go-to destination for discovering movies from around the world.
                        Our platform offers an extensive library of films, from the latest blockbusters to timeless classics.
                        Whether you're a casual viewer or a dedicated cinephile, MovieNest is designed to bring you closer to the stories you love.
                    </Typography>
                    <Typography variant="body1">
                        Our mission is to make movie discovery fun, engaging, and seamless for everyone.
                        Explore movie details, watch trailers, and dive into curated collections all in one place.
                    </Typography>
                </CardContent>
            </Card>
        </Box >
    );
};

export default About;