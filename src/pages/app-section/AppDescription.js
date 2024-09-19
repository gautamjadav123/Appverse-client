import React from "react";
import { Box, Typography } from "@mui/material";

const AppDescription = () => {
  return (
    <Box
      sx={{
        m: 2,
        backgroundColor: "#f5f5f5",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: "8px",
        }}
      >
        Description
      </Typography>
      <Typography variant="body1" sx={{ color: "#333" }}>
        Zomato is a comprehensive food discovery and restaurant review app
        designed to help users find and explore dining options. It features
        detailed restaurant listings, user reviews, menus, and photos to assist
        in making informed dining choices. Zomato also offers features for
        online food ordering and table reservations, making it a versatile tool
        for food enthusiasts and those seeking convenient dining solutions.
      </Typography>
    </Box>
  );
};

export default AppDescription;
