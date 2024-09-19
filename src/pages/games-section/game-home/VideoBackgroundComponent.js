import React from "react";
import { Box, Button, Typography } from "@mui/material";
import backgroundVideo2 from "../../../assets/videos/gamehomebackground2.mp4";

const VideoBackgroundComponent = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Ensure the video is behind the content
        }}
      >
        <source src={backgroundVideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <Box
        sx={{
          position: "absolute",
          color: "white",
          paddingLeft: "20px",
          textAlign: "left",
          zIndex: 1, // Ensure the content is above the video
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: "2rem", // Adjust based on screen size
            "@media (min-width:600px)": {
              fontSize: "3rem",
            },
          }}
        >
          Get ready for an exhilarating journey
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "20px",
            fontSize: "1rem",
            "@media (min-width:600px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          Our latest release is packed with even more thrills and excitement!
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            backgroundColor: "#001A80",
            color: "white",
            "&:hover": {
              backgroundColor: "#001A80",
            },
          }}
        >
          Know more
        </Button>
      </Box>
    </Box>
  );
};

export default VideoBackgroundComponent;
