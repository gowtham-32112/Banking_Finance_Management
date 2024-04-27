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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    else if (name === 'role') setRole(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !role || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }
    axios.post('http://localhost:8080/register', {
      name,
      role,
      email,
      password,
    }).then((res) => {
      console.log(res.data);
      navigate('/Success');
    });
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  // Check if all fields are filled
  React.useEffect(() => {
    setIsFormValid(name && role && email && password);
  }, [name, role, email, password]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <div
        className="signup-bg"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/OIG2.b1J_u7E3eXz3GFiz_odk?pid=ImgGn')",
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
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    onChange={handleFormChange}
                    InputLabelProps={{ style: { color: 'white' } }} // Set label color to white
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>
                        Role
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="role"
                        value={role}
                        label="Role"
                        onChange={handleRoleChange}
                        style={{ color: 'white' }} // Set select text color to white
                      >
                        <MenuItem value={1}>Customer</MenuItem>
                        <MenuItem value={2}>Student</MenuItem>
                        <MenuItem value={3}>Management</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleFormChange}
                    InputLabelProps={{ style: { color: 'white' } }} // Set label color to white
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleFormChange}
                    InputLabelProps={{ style: { color: 'white' } }} // Set label color to white
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                    sx={{ color: 'white' }} // Set checkbox text color to white
                  />
                </Grid>
              </Grid>
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
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/SignIn" variant="body2" style={{ color: 'white' }}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright '}
              <Link color="inherit" href="https://www.kluniversity.in/">
                KL UNIVERSITY
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
