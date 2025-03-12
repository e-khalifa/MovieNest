//TODO: Add better validation for auth

import { Box, Button, Card, Container, TextField, Typography, FormControl, FormControlLabel, Checkbox, MenuItem, Select, InputLabel, OutlinedInput, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addUser, fetchUsers } from '../store/slices/users';
import { login } from '../store/slices/auth';


const Register = () => {
    const [step, setStep] = useState(1);
    const [firstName, setfName] = useState('');
    const [lastName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setCpassword] = useState('');
    const [dob, setDob] = useState('');
    const [preferences, setPreferences] = useState([]);
    const [agree, setAgree] = useState(false);
    const users = useSelector((state) => state.users.users);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inputSx = {
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': { borderColor: '#B64E37' },
            '&.Mui-focused fieldset': { borderColor: '#BC4A31' },
        },
        '& .MuiInputLabel-root': {
            '&.Mui-focused': { color: '#BC4A31' },
        }
    };

    const handleNext = (e) => {
        e.preventDefault();
        const user = users.find((u) => u.email === email);
        if (user) {
            alert('Email is being used, please sign in')
        } else if (!user && password === confirmPassword) {
            setStep(2);
        } else {
            alert('Password should match');
        }
    };
    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, dob, preferences }
        dispatch(addUser(newUser));
        dispatch(login(newUser));
        navigate('/');
    };

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    return (
        <Container maxWidth="md">
            <Card sx={{ mt: 13, borderRadius: 2, bgcolor: '#eee4bd', color: "#242424" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {step === 1 && <Box component="form" sx={{ flex: 1, padding: 4 }} onSubmit={handleNext}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Create an Account
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom color='#353535' sx={{ my: '10px', mb: "40px" }}>
                            Join MovieNest today and start exploring an amazing world of movies!
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                            <TextField
                                required
                                variant="outlined"
                                label="First Name"
                                fullWidth
                                sx={inputSx}
                                value={firstName}
                                onChange={(e) => setfName(e.target.value)}
                            />
                            <TextField
                                required
                                variant="outlined"
                                label="Last Name"
                                fullWidth
                                sx={inputSx}
                                value={lastName}
                                onChange={(e) => setlName(e.target.value)}
                            />
                        </Box>

                        <TextField
                            required
                            type='email'
                            variant="outlined"
                            label="Email"
                            fullWidth
                            sx={inputSx}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            required
                            variant="outlined"
                            label="Password"
                            type="password"
                            fullWidth
                            sx={{ margin: '10px 0px', ...inputSx }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <TextField
                            required
                            variant="outlined"
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            sx={{ mb: '10px', ...inputSx }}
                            value={confirmPassword}
                            onChange={(e) => setCpassword(e.target.value)}
                        />

                        <Box display="flex" alignItems="flex-start">
                            <FormControlLabel
                                required
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked': { color: '#F15E3D' },
                                        }}
                                        checked={agree}
                                        onChange={(e) => setAgree(e.target.checked)}
                                    />
                                }
                                label="I agree to the terms and conditions"
                            />
                        </Box>



                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            sx={{
                                bgcolor: '#F15E3D',
                                color: '#fff',
                                '&:hover': { bgcolor: '#B64E37' },
                                '&:active': { bgcolor: '#BC4A31' },
                                padding: '12px',
                                fontWeight: 'bold',
                                mb: "10px",
                                mt: "30px"
                            }}>
                            Next                    </Button>

                        <Typography variant="h7" align="center" gutterBottom>Already have an account?</Typography>
                        <Link to={'/login'} style={{ textDecoration: 'none' }}>
                            <Typography variant="h7" align="center" gutterBottom color='#F15E3D'> Sign in!</Typography>
                        </Link>
                    </Box>}
                    {step === 2 && <Box component="form" sx={{ flex: 1, padding: 4 }} onSubmit={handleRegister}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Create an Account
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom color='#353535' sx={{ my: '10px', mb: "40px" }}>
                            Choose your favorite genres and let MovieNest tailor the perfect experience for you.
                        </Typography>
                        <TextField
                            sx={{ margin: '10px 0px', ...inputSx }}
                            label="Date of Birth"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />


                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel sx={{
                                '&.Mui-focused': { color: '#BC4A31' },
                            }}
                            >Favorite Genres</InputLabel>
                            <Select
                                sx={{

                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#B64E37',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#BC4A31',
                                    },

                                }}
                                multiple
                                value={preferences}
                                onChange={(e) => setPreferences(e.target.value)}
                                input={<OutlinedInput label="Favorite Genres" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} sx={{ bgcolor: '#F15E3D', color: "#eee4bd" }} />
                                        ))}
                                    </Box>
                                )}

                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            height: "150px",
                                            bgcolor: '#242424',
                                            color: 'white',
                                            borderRadius: 2,
                                            '& .MuiMenuItem-root': {
                                                padding: '10px 20px',
                                                '&:hover': {
                                                    bgcolor: '#353535',
                                                    color: 'white'
                                                }
                                            }
                                        }
                                    }
                                }}
                            >
                                <MenuItem value="Action">Action</MenuItem>
                                <MenuItem value="Comedy">Comedy</MenuItem>
                                <MenuItem value="Drama">Drama</MenuItem>
                                <MenuItem value="Horror">Horror</MenuItem>
                                <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
                                <MenuItem value="Romance">Romance</MenuItem>
                                <MenuItem value="Fantasy">Fantasy</MenuItem>
                                <MenuItem value="Thriller">Thriller</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            sx={{
                                bgcolor: '#F15E3D',
                                color: '#fff',
                                '&:hover': { bgcolor: '#B64E37' },
                                '&:active': { bgcolor: '#BC4A31' },
                                padding: '12px',
                                fontWeight: 'bold',
                                mb: "10px",
                                mt: "30px"
                            }}>
                            Sign Up
                        </Button>
                        {/* 
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography sx={{ mr: 2 }}>Gender:</Typography>
                            <RadioGroup sx={{}} row value={gender} onChange={(e) => setGender(e.target.value)}>
                                <FormControlLabel value="male" control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: '#F15E3D',
                                    },
                                }} />} label="Male" />
                                <FormControlLabel value="female" control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: '#F15E3D',
                                    },
                                }} />} label="Female" />
                            </RadioGroup>
                        </Box> */}
                    </Box>}
                    <Box sx={{
                        flex: 1,
                        display: { xs: 'none', lg: 'flex' },
                    }}>
                        <img src="movienest.png" style={{ width: '100%', borderRadius: 2 }} />
                    </Box>
                </Box>
            </Card>
        </Container>
    );
};

export default Register;
