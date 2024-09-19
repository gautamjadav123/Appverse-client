import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
} from "@mui/material";
import PaymentModal from "../payment/PaymentModal";
import { Link, useNavigate } from "react-router-dom";

const WalletAndPayment = () => {
  const navigate = useNavigate();
  const walletAmount = 100;
  const creditedAmount = 50;

  const transactions = [
    { app: "Valorant 2.0", date: "11/08/2024", amount: 10, receipt: "View" },
    { app: "Pubg 3.0", date: "15/05/2024", amount: 8, receipt: "View" },
    { app: "Tasker", date: "09/02/2024", amount: 5, receipt: "View" },
    {
      app: "HEVC Video Extension",
      date: "21/11/2023",
      amount: 12,
      receipt: "View",
    },
  ];

  // State to control Payment Modal visibility
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  const handleOpenPaymentModal = () => {
    setPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  // Correct onClick handler for button
  const handleAddMoneyClick = () => {
    navigate("/profile/payment");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        marginTop: 5,
        maxWidth: 1200,
        margin: "auto",
        backgroundColor: "#FFFBFB",
      }}
    >
      <Typography variant="h5" fontWeight={"bold"} gutterBottom>
        Wallet & Payments
      </Typography>

      <Box sx={{ display: "flex", gap: 13, my: 2 }}>
        <Typography variant="h6" gutterBottom>
          Total Amount - {walletAmount} $
        </Typography>
        <Typography variant="h6" gutterBottom>
          Credited - {creditedAmount} $
        </Typography>
        {/* Corrected Add Money button */}
        <Button variant="contained" onClick={handleAddMoneyClick}>
          Add Money
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Typography variant="h6" sx={{ m: 2 }} gutterBottom>
          Transactions
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Purchase Apps</TableCell>
              <TableCell>Purchase Date</TableCell>
              <TableCell>Amount Debited</TableCell>
              <TableCell>Receipt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.app}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.amount} $</TableCell>
                <TableCell>
                  <Link style={{ textDecoration: "none", color: "blue" }}>
                    {transaction.receipt}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Payment Modal */}
      {/* <PaymentModal
        open={isPaymentModalOpen}
        onClose={handleClosePaymentModal}
      /> */}
    </Paper>
  );
};

export default WalletAndPayment;
