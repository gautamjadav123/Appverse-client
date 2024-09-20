// NewPassword Component
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import applogoblue from "../../Images/appverse-blue-logo.png";
import applogowhite from "../../Images/appverse-white-logo.png";
import forgotPassimg from "../../Images/forgotpass-img.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../api/api";

const ResetPassword = () => {
  const { token } = useParams(); // Token from URL params
  const navigate = useNavigate();

  // State for new password and confirm password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    if (successMessage) {
      navigate("/login");
    }
  };

  const handleResetPassword = async () => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setOpenDialog(true);
      setLoading(false);
      return;
    }

    try {
      const response = await api.post(`/reset-password/${token}`, {
        password: newPassword,
      });
      setSuccessMessage("Your password has been reset successfully.");
      setOpenDialog(true);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to reset password. Please try again."
      );
      setOpenDialog(true);
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
              alt="reset-password-img"
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
                Reset Password
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
                {/* New Password Field */}
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  New Password
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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

                {/* Confirm Password Field */}
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  Confirm Password
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

                <Button
                  variant="contained"
                  sx={{
                    mt: 5,
                    width: "200px",
                    borderRadius: "10px",
                    backgroundColor: "blue",
                    color: "#fff",
                    alignSelf: "center",
                    "&:hover": {
                      backgroundColor: "#155a99",
                    },
                  }}
                  onClick={handleResetPassword}
                  disabled={loading}
                >
                  {loading ? "Resetting..." : "Reset Password"}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Dialog Popup for Success/Error Message */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{successMessage ? "Success" : "Error"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {successMessage || errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            onClick={() => {
              navigate("/login");
            }}
            color="primary"
          >
            Login
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ResetPassword;
