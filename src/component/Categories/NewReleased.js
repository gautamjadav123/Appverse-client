import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

function NewReleased({ title, subtitle, imgSrc, buttontitle }) {
  return (
    <Card
      sx={{
        width: "600px",
        height: "300px",
        bgcolor: "#F5F5F5",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
        margin: 2,
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FFFFFF",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          padding: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1">{subtitle} </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#000000",
            alignSelf: "flex-start",
          }}
        >
          {buttontitle}
        </Button>
      </CardContent>
    </Card>
  );
}

export default NewReleased;
