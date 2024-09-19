import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
  Card,
} from "@mui/material";
import Header from "../../component/Header/Header";
import Footer from "../../component/footer/Footer";

export default function CardPayment() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5" my={2}>
          Card Payment
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 4,
          //   alignItems: "center",
          //   height: "100vh",
        }}
      >
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
          <Box sx={{ width: "100 %", padding: "16px" }}>
            <Box display={"flex"} gap={2}>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  Name on card
                </Typography>
                <TextField
                  size="small"
                  variant="outlined"
                  type="text"
                  sx={{ mt: 1, backgroundColor: "#fff" }}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  Expiry date (MM/YY )
                </Typography>
                <TextField
                  size="small"
                  variant="outlined"
                  type="text"
                  sx={{ mt: 1, backgroundColor: "#fff" }}
                />
              </Box>
            </Box>
            <Box display={"flex"} gap={2}>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  Card number
                </Typography>
                <TextField
                  size="small"
                  variant="outlined"
                  type="text"
                  sx={{ mt: 1, backgroundColor: "#fff" }}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  Security code (CVV)
                </Typography>
                <TextField
                  size="small"
                  variant="outlined"
                  type="text"
                  sx={{ mt: 1, backgroundColor: "#fff" }}
                />
              </Box>
            </Box>
            <Box display={"flex"} gap={2}>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  Billing Address
                </Typography>
                <textarea
                  variant="outlined"
                  type="te"
                  style={{
                    backgroundColor: "#fff",
                    height: "70px",
                    padding: "5px",
                  }}
                />
              </Box>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "16px", fontWeight: 500, mb: 1 }}>
                  Nickname for card
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button variant="outlined">Personal</Button>
                  <Button variant="outlined">Business</Button>
                  <Button variant="outlined">Other</Button>
                </Box>
              </Grid>
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "right", mt: 3, gap: 2 }}
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
              textAlign: "left",
              gap: 3,
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: 500, mb: 2 }}>
              Payment Instructions
            </Typography>
            <Typography sx={{ fontSize: "14px", lineHeight: 1.5 }}>
              1. Enter your card number without spaces. <br />
              2. Input the cardholder's name as it appears on the card. <br />
              3. Provide the card's expiry date and CVV number. <br />
              4. Optionally, enter the billing address associated with the card.{" "}
              <br />
              5. Click "Proceed to Pay" to complete the transaction.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
