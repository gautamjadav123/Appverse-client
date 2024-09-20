import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function NewReleaseApp({ app }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        maxWidth: "100px",
      }}
    >
      <img
        src={app.image}
        alt={app.name}
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "16px",
          marginBottom: "8px",
        }}
      />
      <Typography variant="body2" fontSize={"0.7rem"} alignSelf="center">
        {app.name}
      </Typography>
      <Box sx={{ display: "flex", marginTop: "4px", alignSelf: "center" }}>
        <Typography variant="caption">{app.rating}</Typography>
        <StarIcon sx={{ color: "grey", marginLeft: "3px", fontSize: "16px" }} />
      </Box>
    </Box>
  );
}

export default NewReleaseApp;
