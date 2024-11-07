import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function PopularGames({ app }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        // maxWidth: "500px",
      }}
    >
      <img
        src={app.icon}
        alt={app.name}
        style={{
          width: "170px",
          height: "340px",
          borderRadius: "16px",
          marginBottom: "8px",
        }}
      />
      <Typography variant="body3" alignSelf="left">
        {app.name}
      </Typography>
      <Box sx={{ display: "flex", marginTop: "4px", alignSelf: "left" }}>
        <Typography variant="caption">{app.rating}</Typography>
        <StarIcon sx={{ color: "grey", marginLeft: "3px", fontSize: "16px" }} />
      </Box>
    </Box>
  );
}

export default PopularGames;
