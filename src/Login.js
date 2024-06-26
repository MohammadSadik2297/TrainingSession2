import React from "react";
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import "./Login.css";

export default function Login() {
  return (
    <div className="main-container">
      <div className="flexlogin"> </div>
      <div>
        <Container maxWidth="xs">
          <Box
            sx={{
              mt: 8,
              p: 3,
              bgcolor: "white",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              Login
            </Typography>
            <form action="#" id="loginForm">
              <TextField
                fullWidth
                margin="normal"
                id="login-username"
                label="Username"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                margin="normal"
                id="login-password"
                label="Password"
                type="password"
                variant="outlined"
                required
              />
              <FormControlLabel
                control={<Checkbox id="remember-me" name="remember-me" />}
                label="Remember Me"
              />
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" type="submit" fullWidth>
                  Login
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
}
