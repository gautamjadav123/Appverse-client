import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function TrendingApps({ app }) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        width: "350]px",
        height: "60px",
        bgcolor: "#F5F5F5",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={app.imgSrc}
        alt={app.title}
        sx={{ width: 55, height: 60, marginRight: 2 }}
      />
      <CardContent sx={{ padding: 0, gap: 2 }}>
        <Typography variant="h8" component="div">
          {app.title}
        </Typography>
        <Typography variant="body5" color="text.secondary" sx={{ mr: 1 }}>
          {app.rating}
        </Typography>
        <Typography variant="body5" color="text.secondary">
          {app.category}
        </Typography>
      </CardContent>
      <Box
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
        }}
      >
        <Typography variant="body6" color="text.secondary">
          {app.cost}
        </Typography>
      </Box>
    </Card>
  );
}

export default TrendingApps;
