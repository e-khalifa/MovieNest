import { Box, Button, Card, Container, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUsers } from '../store/slices/users';
import { login } from '../store/slices/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const inputSx = {
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': { borderColor: '#B64E37' },
            '&.Mui-focused fieldset': { borderColor: '#BC4A31' },
        },
        '& .MuiInputLabel-root': {
            '&.Mui-focused': { color: '#BC4A31' },
        },
        '& input:-webkit-autofill': {
            transition: 'background-color 5000s ease-in-out 0s',
        }
    };
    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find((u) => u.email === email);
        if (user) {
            if (user.password === password) {
                dispatch(login(user));
                navigate('/');
            } else {
                alert('Wrong Password')
            }
        } else {
            alert('User not found, register first')
        }
    }
    return (
        <Container maxWidth="md">
            <Card sx={{ mt: 13, borderRadius: 2, bgcolor: '#eee4bd', color: "#242424" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box component="form" sx={{ flex: 1, padding: 6 }}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Welcome Back!
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom color='#353535' sx={{ my: '30px', mb: "60px" }}>
                            Dive into a world of endless entertainment. Your next favorite movie is just a click away!
                        </Typography>
                        <TextField required type='email' variant="outlined" label="Email" fullWidth sx={inputSx} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField
                            required
                            variant="outlined"
                            label="Password"
                            type="password"
                            fullWidth
                            sx={{ margin: '20px 0px', mb: '40px', ...inputSx }}
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <Button variant="contained" type="submit" fullWidth
                            onClick={handleLogin}
                            sx={{
                                bgcolor: '#F15E3D',
                                color: '#fff',
                                '&:hover': { bgcolor: '#B64E37' },
                                '&:active': { bgcolor: '#BC4A31' },
                                padding: '12px',
                                fontWeight: 'bold',
                                mb: "10px"
                            }}>

                            Sign In
                        </Button>
                        <Typography variant="h7" align="center" gutterBottom>Don't have an account?</Typography>
                        <Link to={'/register'} style={{ textDecoration: 'none' }}>
                            <Typography variant="h7" align="center" gutterBottom color='#F15E3D'> Sign up!</Typography>
                        </Link>
                    </Box>
                    <Box sx={{
                        flex: 1,
                        display: { xs: 'none', lg: 'flex' },
                    }}><img
                            src="movienest.png"
                            style={{ width: '100%', borderRadius: 2 }}
                        />
                    </Box>
                </Box>
            </Card>
        </Container>
    );
};

export default Login;
