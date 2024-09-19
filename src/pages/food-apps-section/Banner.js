import React from "react";
import { Box, Typography } from "@mui/material";

export default function Banner() {
  return (
    <Box
      sx={{
        backgroundColor: "#34a853",
        height: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        marginTop: 3,
        marginBottom: 3,
        color: "white",
        px: 3,
      }}
    >
      <img
        src={require("../../Images/food-section/foodbanner1.png")}
        alt="banner1"
        style={{ height: "140px" }}
      />
      <Typography variant="h6" align="center">
        "Get your favorite meals delivered to your doorstep in just a few taps
        with our fast and reliable food delivery app!"
      </Typography>
      <img
        src={require("../../Images/food-section/foodbanner2.png")}
        alt="banner2"
        style={{ height: "140px" }}
      />
    </Box>
  );
}
