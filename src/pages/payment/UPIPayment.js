import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import Header from "../../component/Header/Header";
import Footer from "../../component/footer/Footer";

export default function UPIPayment() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <img
            src={require("../../Images/payments-section/upi.png")}
            alt="QR Code"
            width="200px"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "900px",
            padding: "24px",
            backgroundColor: "#FFF5F5",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Left Section: UPI Form */}
          <Box sx={{ width: "50%", padding: "16px" }}>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                Amount
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                defaultValue="$ 5.00"
                sx={{ mt: 1, backgroundColor: "#fff" }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                UPI ID
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                defaultValue="ap0003@okhdfc"
                sx={{ mt: 1, backgroundColor: "#fff" }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                Optional Note
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                sx={{ mt: 1, backgroundColor: "#fff" }}
              />
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              <Button variant="contained" color="primary">
                Proceed to pay
              </Button>
              <Button variant="outlined" color="secondary">
                Cancel
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              width: "2px",
              backgroundColor: "#ccc",
              margin: "0 16px",
            }}
          />

          {/* Right Section: QR Code and Instructions */}
          <Box
            sx={{
              width: "50%",
              padding: "16px",
              textAlign: "center",
              backgroundColor: "#FFF5F5",
              borderRadius: "8px",
              marginLeft: "16px",
            }}
          >
            <Box sx={{ mb: 2 }}>
              {/* Display the QR Code */}
              <img
                src={
                  require("../../Images/payments-section/scanner.svg").default
                }
                alt="QR Code"
                width="120px"
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              {/* Payment Instructions */}
              <Typography sx={{ fontSize: "16px", fontWeight: 500, mb: 1 }}>
                Payment Instructions
              </Typography>
              <Typography sx={{ textAlign: "left", fontSize: "14px" }}>
                1. Enter the amount you wish to pay. <br />
                2. Input your UPI ID or select from saved IDs. <br />
                3. Add an optional note for reference. <br />
                4. Click "Proceed to pay" to start the transaction.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
