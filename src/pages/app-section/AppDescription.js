import React from "react";
import { Box, Typography } from "@mui/material";

const AppDescription = ({ data }) => {
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
        {data.description}
      </Typography>
    </Box>
  );
};

export default AppDescription;
