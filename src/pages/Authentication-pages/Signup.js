import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import applogoblue from "../../Images/appverse-blue-logo.png";
import applogowhite from "../../Images/appverse-white-logo.png";
import signupimg from "../../Images/signup-img.png";
import googlelogo from "../../Images/google-logo.png";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";

// #9c1313

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const fullNameRegex = /^[a-zA-Z\s]+$/;

    switch (name) {
      case "fullName":
        if (!value.trim()) {
          error = "Full Name is required";
        } else if (!fullNameRegex.test(value)) {
          error = "Full Name can only contain letters and spaces";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!emailRegex.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "password":
        if (!value.trim()) {
          error = "Password is required";
        } else if (!passwordRegex.test(value)) {
          error =
            "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character";
        }
        break;
      case "confirmPassword":
        if (!value.trim()) {
          error = "Confirm Password is required";
        } else if (value !== formData.password) {
          error = "Passwords do not match";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        validationErrors[field] = error;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await api.post("/signup", {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      // Assuming the API sends back a token or user data
      const { data } = response; // Extract the data from the response object

      // Save only the required information to localStorage
      localStorage.setItem("token", data.token); // Adjust this based on the actual response structure
      localStorage.setItem("name", data.name); // Adjust this based on the actual response structure

      // Navigate to home page after successful sign-up
      navigate("/");
    } catch (error) {
      console.error("Error during sign up:", error.response);

      // Extract a meaningful error message to display
      const errorMessage = error.response?.data?.message || "Sign up failed";
      setErrors({ submit: errorMessage });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            left: "20px",
          }}
        >
          <img src={applogoblue} alt="Blue Logo" style={{ width: "5vw" }} />
        </Box>

        <Grid container sx={{ overflowY: "auto" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={signupimg}
              alt="signup-img"
              style={{ maxHeight: "60%", maxWidth: "60%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: { xs: 2, md: 5 },
              backgroundColor: "#5379F6",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              height: "100vh",
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "10px",
                left: "20px",
                display: { xs: "flex", md: "none" },
              }}
            >
              <img
                src={applogowhite}
                alt="Blue Logo"
                style={{ width: "9vw" }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "10px",
                right: { xs: "15px", md: "60px" },
                display: "flex",
                gap: "40px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Home
                </Link>
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <Link
                  to={"/login"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Login
                </Link>
              </Typography>
            </Box>
            <Box px={{ xs: 2, md: 5 }} pt={10}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ color: "#fff", textAlign: "center" }}
              >
                Create Account
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  ml: "4vw",
                }}
                component="form"
                onSubmit={handleSubmit}
              >
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  Full Name
                </Typography>
                <TextField
                  type="text"
                  name="fullName"
                  variant="outlined"
                  size="small"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.fullName}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                />
                {errors.fullName && (
                  <Typography variant="body2" sx={{ color: "#9c1313" }}>
                    {errors.fullName}
                  </Typography>
                )}
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  Email
                </Typography>
                <TextField
                  type="email"
                  name="email"
                  variant="outlined"
                  size="small"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.email}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                />
                {errors.email && (
                  <Typography variant="body2" sx={{ color: "#9c1313" }}>
                    {errors.email}
                  </Typography>
                )}
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  Password
                </Typography>
                <TextField
                  type="password"
                  name="password"
                  variant="outlined"
                  size="small"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.password}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                />
                {errors.password && (
                  <Typography variant="body2" sx={{ color: "#9c1313" }}>
                    {errors.password}
                  </Typography>
                )}
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  Confirm Password
                </Typography>
                <TextField
                  type="password"
                  name="confirmPassword"
                  variant="outlined"
                  size="small"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.confirmPassword}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                />
                {errors.confirmPassword && (
                  <Typography variant="body2" sx={{ color: "#9c1313" }}>
                    {errors.confirmPassword}
                  </Typography>
                )}
                {errors.submit && (
                  <Typography
                    variant="body2"
                    sx={{ color: "red", textAlign: "center" }}
                  >
                    {errors.submit}
                  </Typography>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "150px",
                    borderRadius: "10px",
                    backgroundColor: "blue",
                    color: "#fff",
                    alignSelf: "center",
                    "&:hover": {
                      backgroundColor: "#155a99",
                    },
                  }}
                >
                  Sign In
                </Button>
                <Typography
                  sx={{
                    margin: "3px auto",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  or
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<img src={googlelogo} alt="Google logo" />}
                  sx={{
                    borderRadius: "10px",
                    color: "black",
                    backgroundColor: "#fff",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
                >
                  Sign in using Google
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUpForm;
