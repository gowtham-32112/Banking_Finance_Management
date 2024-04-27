import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/login', formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          navigate('/Success');
        } else {
          setError(response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setError('An error occurred while logging in');
      });
  };

  React.useEffect(() => {
    setIsFormValid(formData.email && formData.password);
  }, [formData.email, formData.password]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <div
        className="signin-bg"
        style={{
          backgroundImage: "url('https://th.bing.com/th/id/OIG1.QSeDkTgF85_BQ9yuEtPi?pid=ImgGn')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white', // Set text color to white
              backdropFilter: 'brightness(0.8)', // Adjust brightness for better readability
              borderRadius: '10px', // Add border radius for the form box
              padding: '20px', // Add padding for the form box
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                InputLabelProps={{ style: { color: 'white' } }} // Set label color to white
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                InputLabelProps={{ style: { color: 'white' } }} // Set label color to white
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ color: 'white' }} // Set checkbox text color to white
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#FFCC00',
                  color: '#000000',
                  pointerEvents: isFormValid ? 'auto' : 'none', // Disable button if form is invalid
                  opacity: isFormValid ? 1 : 0.5, // Reduce opacity if form is invalid
                }}
              >
                Sign In
              </Button>
              {error && (
                <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" style={{ color: 'white' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignUp" variant="body2" style={{ color: 'white' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
