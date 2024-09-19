import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import wutheringWaves from "../../Images/new-released/image1.png";
import pubg from "../../Images/popular-games/Rectangle4.png";

const PurchaseHistory = () => {
  // Example data for the table
  const purchases = [
    {
      app: "Wuthering Waves",
      date: "11/08/2024",
      amount: "10$",
      lastDate: "11/09/2024",
      points: 200,
      reward: "Yes",
      image: wutheringWaves,
    },
    {
      app: "PUBG 2.0",
      date: "15/05/2024",
      amount: "15$",
      lastDate: "15/07/2024",
      points: 250,
      reward: "No",
      image: pubg,
    },
  ];

  return (
    <>
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: 4,
            marginTop: 5,
            maxWidth: 900,
            margin: "auto",
            flexGrow: 1,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Purchase History
          </Typography>
          <Typography variant="h6" gutterBottom>
            Total Purchased Points - 450
          </Typography>
        </Box>
        {/* <Paper
          elevation={3}
          sx={{
            padding: 4,
            marginTop: 5,
            maxWidth: 900,
            margin: "auto",
            flexGrow: 1,
            backgroundColor: "#FFFBFB",
          }}
        > */}
        <TableContainer
          component={Paper}
          sx={{ marginTop: 3, backgroundColor: "#FFFBFB" }}
        >
          <Table aria-label="purchase history table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", justifyContent: "center", mr: 5 }}
                >
                  Purchase Apps
                </TableCell>
                <TableCell>Purchase Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Last Date</TableCell>
                <TableCell>Points Earned</TableCell>
                <TableCell>Reward</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {purchases.map((purchase, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img
                      src={purchase.image}
                      alt={purchase.app}
                      style={{ width: "288px", height: "153px" }}
                    />
                    <Typography sx={{ ml: 10 }}>{purchase.app}</Typography>
                  </TableCell>
                  <TableCell>{purchase.date}</TableCell>
                  <TableCell>{purchase.amount}</TableCell>
                  <TableCell>{purchase.lastDate}</TableCell>
                  <TableCell>{purchase.points}</TableCell>
                  <TableCell>{purchase.reward}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </Paper> */}
      </Box>
    </>
  );
};

export default PurchaseHistory;
