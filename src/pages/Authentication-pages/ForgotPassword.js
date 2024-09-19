import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import applogoblue from "../../Images/appverse-blue-logo.png";
import applogowhite from "../../Images/appverse-white-logo.png";
import forgotPassimg from "../../Images/forgotpass-img.png";
import { Link } from "react-router-dom";
import api from "../../api/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(60);
  const [resendTimer, setResendTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    const resendCountdown = setInterval(() => {
      if (resendTimer > 0) {
        setResendTimer(resendTimer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
      clearInterval(resendCountdown);
    };
  }, [timer, resendTimer]);

  const handleForgotPassword = async () => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await api.post("/forgot-password", { email });
      setSuccessMessage("A password reset link has been sent to your email.");
      console.log(response.data);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to send reset link. Please try again."
      );
    } finally {
      setLoading(false);
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
              src={forgotPassimg}
              alt="signup-img"
              style={{ maxHeight: "50%", maxWidth: "50%" }}
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
            <Box px={{ xs: 2, md: 5 }} pt={3}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ color: "#fff", textAlign: "center" }}
                mt={5}
              >
                Forgot Password
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  ml: "4vw",
                  mt: 5,
                }}
              >
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  Email
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                {errorMessage && (
                  <Typography
                    variant="body2"
                    sx={{ color: "red", mt: 2, textAlign: "center" }}
                  >
                    {errorMessage}
                  </Typography>
                )}
                {successMessage && (
                  <Typography
                    variant="body2"
                    sx={{ color: "white", mt: 2, textAlign: "center" }}
                  >
                    {successMessage}
                  </Typography>
                )}

                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    width: "250px",
                    borderRadius: "10px",
                    backgroundColor: "blue",
                    color: "#fff",
                    alignSelf: "center",
                    "&:hover": {
                      backgroundColor: "#155a99",
                    },
                  }}
                  onClick={handleForgotPassword}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Login Link"}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export { ForgotPassword };
