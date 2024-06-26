import React from "react";
import {
  Container,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  FormGroup,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import "./Form.css";

export default function Form() {
  return (
    <div className="flexdiv">
      <div className="container">
        <Typography variant="h4" component="h1">
          Register Now
        </Typography>
      </div>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            mt: 5,
            mb: 5,
            p: 3,
            bgcolor: "white",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Register Form
          </Typography>
          <form action="#" id="registrationForm">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="fName"
                  label="Full Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="uName"
                  label="Username"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="pass"
                  label="Password"
                  type="password"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="cpass"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="gmail"
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="pnum"
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="DOB"
                  label="Date of Birth"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" margin="normal" fullWidth>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row aria-label="gender" name="gender">
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" margin="normal" fullWidth>
                  <FormLabel component="legend">Hobbies</FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      control={<Checkbox name="hobbies" />}
                      label="Reading"
                    />
                    <FormControlLabel
                      control={<Checkbox name="hobbies" />}
                      label="Traveling"
                    />
                    <FormControlLabel
                      control={<Checkbox name="hobbies" />}
                      label="Cooking"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Upload Profile Picture
                  <input type="file" id="picture" hidden />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth margin="normal">
                  <InputLabel id="country-label">
                    Select Your Country
                  </InputLabel>
                  <Select
                    labelId="country-label"
                    id="Ctry"
                    label="Select Your Country"
                  >
                    <MenuItem value="ind">India</MenuItem>
                    <MenuItem value="rus">Russia</MenuItem>
                    <MenuItem value="ADE">Dubai</MenuItem>
                    <MenuItem value="ir">Iran</MenuItem>
                    <MenuItem value="npl">Nepal</MenuItem>
                    <MenuItem value="sa">South Africa</MenuItem>
                    <MenuItem value="aus">Australia</MenuItem>
                    <MenuItem value="sl">Sri Lanka</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="info"
                  label="Bio"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox id="tm" />}
                  label="Agree to Terms and Conditions"
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Button variant="outlined" type="reset">
                    Reset
                  </Button>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
}
