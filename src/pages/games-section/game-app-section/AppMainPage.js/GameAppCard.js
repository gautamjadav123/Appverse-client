import React from "react";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from "@mui/icons-material/Star";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

// Use your image here
import gameImage from "../../../../assets/images/game-section/gameapp/image.png";

function GameCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#000",
        padding: "20px",
      }}
    >
      <Card
        sx={{
          display: "flex",
          backgroundColor: "#1e1e1e",
          color: "#fff",
          width: "90%",
          borderRadius: "10px",
          maxWidth: "1200px",
          maxHeight: "400px",
          padding: "20px",
        }}
      >
        {/* Image Section */}
        <CardMedia
          component="img"
          image={gameImage}
          alt="Infinity Ops Game"
          sx={{
            width: "40%",
            height: "auto",
            borderRadius: "10px",
          }}
        />

        {/* Right Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 3,
            width: "60%",
          }}
        >
          {/* Top Right Section */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" gutterBottom>
              Infinity Ops: Cyberpunk FPS
            </Typography>
            <IconButton sx={{ color: "#fff" }}>
              <ShareIcon />
            </IconButton>
          </Box>
          <Typography variant="subtitle1">
            Activation Publishing, Inc.
          </Typography>
          <Typography variant="caption">
            Contains ads * In-app purchases
          </Typography>

          {/* Reviews, Download, Age Rating */}
          <Box sx={{ display: "flex", mt: 4, gap: 4 }}>
            <Box sx={{ justifySelf: "center" }}>
              <Box
                sx={{ display: "flex", marginTop: 2, justifyContent: "center" }}
              >
                {/* Rating */}
                <Typography variant="h4" sx={{ marginLeft: 1 }}>
                  4.2
                </Typography>
                <StarIcon sx={{ fontSize: 35, color: "#fff", ml: 2 }} />
              </Box>
              <Typography variant="h4" sx={{ marginLeft: 1 }}>
                15M reviews
              </Typography>
            </Box>
            <Box
              sx={{
                width: "2px",
                backgroundColor: "#ccc",
                margin: "0 16px",
              }}
            />

            {/* Download Size */}
            <Box
              sx={{
                textAlign: "center",
                display: "block",
              }}
            >
              <CloudDownloadIcon sx={{ fontSize: 35, color: "#fff" }} />
              <Typography variant="h4" sx={{ marginLeft: 1 }}>
                2.6 GB
              </Typography>
            </Box>

            <Box
              sx={{
                width: "2px",
                backgroundColor: "#ccc",
                margin: "0 16px",
              }}
            />

            {/* Age Rating */}
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                display: "block",
              }}
            >
              <Typography
                variant="h8"
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "5px",
                  padding: "2px 8px",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                16+
              </Typography>
              <Typography variant="h4 " sx={{ marginLeft: 1, mt: 2 }}>
                Rated 16+
              </Typography>
            </Box>
          </Box>
          {/* Install Button */}
          <Box
            sx={{ display: "flex", justifyContent: "flex-start", marginTop: 4 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4a4a4a",
                color: "white",
                textTransform: "none",
                borderRadius: "20px",
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Install
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default GameCard;
