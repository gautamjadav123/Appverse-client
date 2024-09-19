import React from "react";
import { Box, Typography, Button, Avatar, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function AppSidebar() {
  return (
    <Box
      sx={{
        width: 170,
        height: "100%",
        backgroundColor: "#f5f5f5",
        padding: 2,
        textAlign: "center",
        position: "sticky",
      }}
    >
      {/* App Icon */}
      <Avatar
        src={require("../../Images/new-app/zometo.png")}
        alt="Zomato"
        sx={{
          width: 100,
          height: 100,
          margin: "10vh auto 16px",
          borderRadius: 2,
        }}
      />
      {/* App Name */}
      <Typography variant="h6" gutterBottom>
        Zomato
      </Typography>
      {/* Subtitle */}
      <Typography variant="subtitle2" color="primary" gutterBottom>
        Zomato
      </Typography>
      {/* Rating and Number of Ratings */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 2,
          mt: 5,
          fontSize: "0.7rem",
        }}
      >
        <Typography variant="body5">4.5</Typography>
        <StarIcon sx={{ color: "#fbc02d", marginLeft: 0.5, marginRight: 1 }} />
        <Divider orientation="vertical" flexItem />
        <Typography variant="body5" sx={{ marginLeft: 1 }}>
          2K Ratings
        </Typography>
      </Box>
      {/* Install Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#3b82f6",
          color: "#fff",
          borderRadius: 2,
          paddingX: 4,
          marginBottom: 2,
          mt: "10vh",
        }}
      >
        Install
      </Button>
      {/* Age Rating */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          Rated for
        </Typography>
        <Box
          sx={{
            border: "1px solid black",
            borderRadius: 2,
            padding: "2px 6px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">3+</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AppSidebar;
