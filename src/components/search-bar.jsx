import SearchIcon from '@mui/icons-material/Search';
import { setSearchQuery } from "../store/slices/searchMovies";
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

const SearchBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies) || [];
    const searchQuery = useSelector((state) => state.searchQuery.searchQuery);

    const handleInputChange = useCallback((e, newInputValue) => {
        dispatch(setSearchQuery(newInputValue));
    }, [dispatch]);

    const handleBlur = () => {
        if (searchQuery.trim() !== "")
            navigate(`/?query=${searchQuery.trim()}`);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && searchQuery.trim() !== "")
            navigate(`/?query=${searchQuery.trim()}`);
    };


    const textSx = {
        color: "#d3d3d3",
        borderRadius: "8px",
        input: { color: "#d3d3d3" },
        '& .MuiInputLabel-root': {
            color: '#d3d3d3',
            '&.Mui-focused': { color: '#B64E37', fontWeight: "bold" },
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#d3d3d3" },
            "&:hover fieldset": { borderColor: "#eee4bd" },
            "&.Mui-focused fieldset": { borderColor: "#eee4bd" },
        },
    };
    const inputSx = {
        height: "38px",
        padding: "10px",
        borderRadius: '20px',
    };
    const searchPaperSx = {
        bgcolor: '#242424',
        color: 'white',
        borderRadius: 2,
        "& .MuiAutocomplete-option": {
            padding: "10px",
            "&:hover": {
                backgroundColor: "#444",
            },
        },
    };

    return (
        <Autocomplete
            sx={{ width: '400px' }}
            fullWidth
            freeSolo
            clearOnEscape
            options={movies.map((movie) => movie.title)}
            onInputChange={handleInputChange}
            onBlur={handleBlur}
            slotProps={{
                paper: {
                    sx: searchPaperSx
                },
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    variant="outlined"
                    fullWidth
                    sx={textSx}
                    onKeyDown={handleKeyDown}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: <SearchIcon sx={{ color: "#d3d3d3" }} />,
                        sx: inputSx,
                    }}
                />
            )}
        />
    );
};

export default SearchBar;
