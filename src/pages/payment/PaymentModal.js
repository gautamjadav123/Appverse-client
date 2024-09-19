import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Box,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function PaymentModal() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: 2,
          ml: 40,
        }}
      >
        <Box>
          <Typography
            component="div"
            sx={{ fontSize: "17px", display: "flex", alignItems: "center" }}
          >
            Bag
            <ArrowForwardIosIcon sx={{ fontSize: "12px", margin: "0 3px" }} />
            Payment
            <ArrowForwardIosIcon sx={{ fontSize: "12px", margin: "0 3px" }} />
            Done
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Wallet amount - 100 $
          </Typography>
        </Box>
      </Box>
      <Container
        maxWidth="lg"
        style={{ padding: "20px", backgroundColor: "#FFFBFB" }}
      >
        <Grid container spacing={3}>
          {/* Payment Options Section */}
          <Grid item xs={8}>
            <Typography variant="h5" my={1} gutterBottom>
              Payments
            </Typography>
            <Typography variant="subtitle2">Choose Payment Mode</Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 5 }}>
              {/* Red Vertical Line */}
              <Box
                sx={{
                  width: "3px",
                  height: "60px",
                  backgroundColor: "red",
                  marginRight: "8px",
                }}
              />

              {/* Recommended Text */}
              <Typography variant="subtitle1" fontWeight={"bold"}>
                Recommended
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "40%" }}>
                <Paper variant="outlined" style={{ marginTop: "10px" }}>
                  <List component="nav" aria-label="main payment methods">
                    <ListItem button onClick={() => navigate("/upi-payment")}>
                      <ListItemIcon>
                        <PaymentIcon />
                      </ListItemIcon>
                      <ListItemText primary="UPI (Pay via any App)" />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => navigate("/card-payment")}>
                      <ListItemIcon>
                        <CreditCardIcon />
                      </ListItemIcon>
                      <ListItemText primary="Credit/ Debit Card" />
                    </ListItem>
                    <Divider />
                    <ListItem
                      button
                      onClick={() => setSelectedPaymentMethod("net-banking")}
                    >
                      <ListItemIcon>
                        <AccountBalanceIcon />
                      </ListItemIcon>
                      <ListItemText primary="Net Banking" />
                    </ListItem>
                    <Divider />
                    <ListItem
                      button
                      onClick={() => navigate("/wallet-payment")}
                    >
                      <ListItemIcon>
                        <AccountBalanceWalletIcon />
                      </ListItemIcon>
                      <ListItemText primary="Wallet" />
                    </ListItem>
                  </List>
                </Paper>
              </Box>
              <Box sx={{ width: "60%" }}>
                {selectedPaymentMethod === "net-banking" ? (
                  <Box style={{ marginTop: "20px", textAlign: "center" }}>
                    {/* Replace this with your specific Net Banking content */}
                    <Typography variant="h6">Net Banking Selected</Typography>
                    {/* Add any other UI elements or components here */}
                  </Box>
                ) : (
                  <Box style={{ marginTop: "20px", textAlign: "center" }}>
                    <img
                      src={require("../../Images/payments-section/payment.png")}
                      alt="Payment illustration"
                      style={{ maxWidth: "100%", height: "50vh" }}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>

          {/* Order Summary Section */}
          <Grid item xs={4}>
            <Box
              sx={{
                border: "1px solid #e0e0e0",
                padding: "16px",
                borderRadius: "4px",
              }}
            >
              {/* Order Summary Title */}
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "center", marginBottom: "8px" }}
              >
                Order Summary
              </Typography>

              <Divider />

              {/* Terms and Conditions */}
              <Typography
                variant="caption"
                sx={{ marginTop: "8px", display: "block" }}
              >
                By placing your order, you agree to Aperverse.com by accepting
                the terms and conditions,
                <Link href="#" sx={{ textDecoration: "none", color: "blue" }}>
                  {" "}
                  Terms of Use{" "}
                </Link>
                &
                <Link href="#" sx={{ textDecoration: "none", color: "blue" }}>
                  {" "}
                  Privacy Policy
                </Link>
                .
              </Typography>

              <Divider sx={{ marginY: "8px" }} />

              {/* Price and Tax */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Typography>Price:</Typography>
                <Typography>10 $</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Typography>Tax:</Typography>
                <Typography>2 $</Typography>
              </Box>

              <Divider />

              {/* Total Amount */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginY: "8px",
                }}
              >
                <Typography variant="h6">Total Amount:</Typography>
                <Typography variant="h6">12 $</Typography>
              </Box>

              <Divider />

              {/* Offers Section */}
              <Box
                sx={{
                  marginTop: "16px",
                  border: "1px solid #e0e0e0",
                  padding: "12px",
                  borderRadius: "4px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <AcUnitIcon sx={{ marginRight: "8px" }} />
                  <Typography variant="subtitle1">Offers</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">
                    Get 10% off for first purchase
                  </Typography>
                  <Typography variant="caption">T&C</Typography>
                </Box>

                {/* Show More Button */}
                <Button
                  size="small"
                  sx={{ textTransform: "none", color: "red", marginTop: "8px" }}
                >
                  Show More <span style={{ marginLeft: "4px" }}>▼</span>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
