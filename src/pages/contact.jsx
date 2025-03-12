
import { Box, Button, Card, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Contact = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
        alert("Message Sent! We'll get back to you soon.");

    };

    const inputSx = {
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': { borderColor: '#B64E37' },
            '&.Mui-focused fieldset': { borderColor: '#BC4A31' },
        },
        '& .MuiInputLabel-root': {
            '&.Mui-focused': { color: '#BC4A31' },
        }
    };

    return (
        <Container maxWidth="sm">
            <Card sx={{ mt: 13, padding: 4, borderRadius: 2, bgcolor: '#eee4bd', color: "#242424" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                    Have questions? Fill out the form below and we’ll get back to you!
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        variant="outlined"
                        label="Your Name"
                        fullWidth
                        sx={inputSx}
                        name="name"
                        required
                    />
                    <TextField
                        variant="outlined"
                        label="Your Email"
                        fullWidth
                        sx={inputSx}
                        name="email"
                        type="email"
                        required
                    />
                    <TextField
                        variant="outlined"
                        label="Your Message"
                        fullWidth
                        multiline
                        rows={4}
                        sx={inputSx}
                        name="message"
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            bgcolor: '#F15E3D',
                            color: '#fff',
                            '&:hover': { bgcolor: '#B64E37' },
                            padding: '12px',
                            fontWeight: 'bold',
                        }}>
                        Send Message
                    </Button>
                </Box>
            </Card>
        </Container>
    );
};

export default Contact;
