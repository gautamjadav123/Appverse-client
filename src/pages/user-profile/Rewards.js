import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";

const rewardsData = [
  {
    id: 1,
    title: "10% OFF",
    description: "Redeem",
    image: require("../../Images/reward/Rectangle1.png"),
    terms: "T&C",
  },
  {
    id: 2,
    title: "20% OFF",
    description: "Use Code: LEWK20",
    image: require("../../Images/reward/Rectangle2.png"),
    terms: "T&C",
  },
  {
    id: 3,
    title: "₹300 OFF",
    description: "Redeem",
    image: require("../../Images/reward/Rectangle3.png"),
    terms: "T&C",
  },
  // Add more rewards data as needed
];

const scratchData = [
  {
    id: 1,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  // Add more scratch data as needed
];

const Rewards = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: 4,
          marginTop: 5,
          margin: "auto",
          flexGrow: 1,
        }}
      >
        <Typography variant="h5">Rewards</Typography>
        <Typography variant="h6">Total Points - 670</Typography>
      </Box>
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
        <Typography variant="h6" mb={2} gutterBottom>
          Scratch To Redeem
        </Typography>
        <Grid container spacing={2}>
          {rewardsData.map((reward) => (
            <Grid item xs={12} sm={6} md={4} key={reward.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={reward.image}
                  alt={reward.title}
                />
                <CardContent
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="body2" color="textSecondary">
                    Redeem
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    T&C
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box mt={4}>
          <Grid container spacing={2}>
            {scratchData.map((scratch) => (
              <Grid item xs={11} sm={5} md={3} key={scratch.id}>
                <Box
                  sx={{
                    width: "208px",
                    height: "190",
                    backgroundColor: "#007bff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={require("../../Images/reward/Rectangle4.png")}
                    alt="Scratch"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Rewards;
