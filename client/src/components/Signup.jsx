import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/system";
import {
  Box,
  TextField,
  Stack,
  Button,
  Paper,
  Typography,
  Grid,
} from "@mui/material";

export const Signup = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    if (e.target.value.trim() === "") {
      setIsError({ [e.target.name]: true });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    // adding user data in mongodb
    try {
      const res = await axios.post(`${BASE_URL}/signup`, value);
      console.log(res.data);

      if (res.data === "Data stored successfully!") {
        navigate("/login");
        return true;
      }
      else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const SignupForm = styled(Box)({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    "& .MuiTextField-root": { margin: "10px" },
  });

  return (
    <SignupForm
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Paper
        elevation={12}
        sx={{
          py: "80px",
          px: { xs: "40px", sm: "60px" },
          width: "800px",
          alignContent: "center",
          overflow: "scroll",
        }}
      >
        <Typography>SIGNUP</Typography>

        <Grid
          container
          justifyContent={"space-between"}
          rowGap="20px"
          rowSpacing="200px"
          sx={{
            ".MuiFormHelperText-root": {
              position: "absolute",
              bottom: "-1.2rem",
            },
          }}
        >
          <Grid item container sm={5.8} gap={1}>
            <TextField
              id="email"
              name="email"
              label="Email"
              error={isError.email}
              helperText={isError.email && "Email is not valid!"}
              onChange={handleChange}
            />
            <TextField
              id="phone"
              name="phone"
              label="Phone"
              type="number"
              error={isError.phone}
              helperText={isError.phone && "Phone number is not valid!"}
              onChange={handleChange}
            />
            <TextField
              id="pass"
              name="password"
              label="Password"
              type="password"
              error={isError.pass}
              helperText={isError.pass && "Password is not valid!"}
              onChange={handleChange}
            />
            <TextField
              id="confPass"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              error={isError.confPass}
              helperText={isError.confPass && "Paswords do not match!"}
              onChange={handleChange}
            />
          </Grid>

          <Grid item container sm={5.8}>
            <TextField
              id="fullName"
              name="name"
              label="Full Name"
              error={isError.fullName}
              helperText={isError.fullName && "Full name is not valid!"}
              onChange={handleChange}
            />
            <TextField
              id="class"
              name="studentClass"
              label="Class"
              error={isError.class}
              helperText={isError.class && "Class is not valid!"}
              onChange={handleChange}
            />
            <TextField
              id="studentId"
              name="studentId"
              label="Student ID"
              error={isError.studentId}
              helperText={isError.studentId && "Student ID invalid!"}
              onChange={handleChange}
            />
            <Stack
              spacing={2}
              m={1}
              direction="row"
              width="100%"
              justifyContent="space-between"
              sx={{ "& .MuiButton-root": { width: "50%", p: "10px 0" } }}
            >
              <Button variant="outlined" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button variant="contained" type="submit">
                SignUp
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </SignupForm>
  );
};
