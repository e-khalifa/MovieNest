import React, { useEffect } from 'react';
import Card from '../components/mcard';
import Poster from '../components/poster';
import { useDispatch, useSelector } from 'react-redux';
import { moviesAction } from '../store/slices/movies';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Home = () => {
    const movies = useSelector((state) => state.movies.movies);
    const searchQuery = useSelector((state) => state.searchQuery.searchQuery);
    const dispatch = useDispatch();
    const theme = useTheme();
    const isLg = useMediaQuery('(min-width:1250px)');
    const isXl = useMediaQuery(theme.breakpoints.up('xl'));

    const posterMarginBottom = isXl ? '930px' : isLg ? '800px' : '700px';

    const filteredMovies = searchQuery ? movies.filter((m) =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) : movies;

    useEffect(() => {
        dispatch(moviesAction())
    }, [dispatch])

    return (
        <>
            {!searchQuery && (
                <Box sx={{ marginBottom: posterMarginBottom, display: { xs: 'none', lg: 'block' } }}>
                    <Poster />
                </Box>
            )}
            <Typography
                variant="h4"
                sx={{
                    width: '100%',
                    mb: 3,
                    mt: 10,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#eee4bd',
                    letterSpacing: 1.2,
                    textTransform: 'uppercase'
                }}
            >
                Movie List
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", rowGap: '30px' }}>
                {
                    filteredMovies.slice(0, 10).map((movie) => (
                        <Card key={movie.id} {...movie} />
                    ))
                }

                {searchQuery && filteredMovies.length <= 0 && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', width: '100%' }}>
                        <Typography variant="h5" sx={{ color: "#eee4bd" }}>
                            Oops! No movies match your search. Try a different keyword.
                        </Typography>
                    </Box>
                )}
            </Box>
        </>
    )
}

export default Home;