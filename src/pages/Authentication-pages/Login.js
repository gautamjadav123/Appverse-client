import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import applogoblue from "../../Images/appverse-blue-logo.png";
import applogowhite from "../../Images/appverse-white-logo.png";
import loginimg from "../../Images/login-img.png";
import googlelogo from "../../Images/google-logo.png";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = "";

    if (!value.trim()) {
      error = `${name === "username" ? "User Name" : "Password"} is required`;
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
      const response = await api.post("/login", {
        email: formData.username,
        password: formData.password,
      });
      console.log(response);
      localStorage.setItem("token", response.data.jwtToken);
      localStorage.setItem("name", response.data.name);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.response.data);
      setErrors({ submit: error.response.data.message || "Login failed" });
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
          <img src={applogoblue} alt="Logo" style={{ width: "5vw" }} />
        </Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              display: { xs: "none", md: "flex" },
            }}
          >
            <img
              src={loginimg}
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
              height: "100%",
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
                ypogra
                phy
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
            </Box>
            <Box px={{ xs: 2, md: 5 }} pt={3}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ color: "#fff", textAlign: "left", ml: "4vw" }}
              >
                Login
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  ml: "4vw",
                }}
                component="form"
                onSubmit={handleSubmit}
              >
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  User Name
                </Typography>
                <TextField
                  name="username"
                  variant="outlined"
                  size="small"
                  value={formData.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.username}
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
                {errors.username && (
                  <Typography
                    variant="body2"
                    sx={{ color: "red", mt: 1, mb: 2 }}
                  >
                    {errors.username}
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
                  <Typography variant="body2" sx={{ color: "red" }}>
                    {errors.password}
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
                  Login
                </Button>
                <Typography
                  sx={{
                    margin: "3px auto",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  <Link
                    to={"/forgotPassword"}
                    style={{
                      textDecoration: "none",
                      marginRight: "10px",
                      color: "#fff",
                    }}
                  >
                    Forgot Password
                  </Link>
                  OR
                  <Link
                    to={"/signup"}
                    style={{
                      textDecoration: "none",
                      marginLeft: "10px",
                      color: "#fff",
                    }}
                  >
                    Create New Account
                  </Link>
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
                  Login using Google
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
