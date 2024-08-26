import React from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Handle Google login here
  };

  const handleBack = () => {
    navigate('/home'); // Navigate back to the previous page
  };

  return (
    <div className="text-[var(--primary-text-color)]">
      <div className="text-5xl font-semibold text-center my-10">Login</div>
      <div className="flex justify-center items-center">
        <div className="my-5 px-5 py-5 bg-white rounded-lg shadow-lg max-w-sm w-full">
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >

            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                type="email"
                label="Email"
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
            >
              Login
            </Button>

            <Button
              variant="contained"
              color="primary"
              startIcon={<GoogleIcon />}
              fullWidth
              onClick={handleGoogleLogin}
              sx={{ mb: 2 }}
            >
              Sign in with Google
            </Button>

            <Typography variant="body2" color="textSecondary">
              <Link href="#" underline="hover" color="inherit">Forgot Password?</Link>
            </Typography>

            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleBack}
              sx={{ mt: 2 }}
            >
              Back
            </Button>

            <Typography variant="body2" color="textSecondary">
              <Link href="#" underline="hover" color="inherit">Don't have an account? Sign Up</Link>
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
