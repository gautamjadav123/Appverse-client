import React from "react";
import { Box, Typography, Button } from "@mui/material";
import vrImage1 from "../../../assets/images/game-section/VRillustration/image1.png";
import vrImage2 from "../../../assets/images/game-section/VRillustration/image2.png";
import vrImage3 from "../../../assets/images/game-section/VRillustration/image3.png";
import vrPerson from "../../../assets/images/game-section/VRillustration/image4.png";

const VrIllustrations = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        height: "80vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          position: "absolute",
          left: "10%",
          top: "25%",
          textAlign: "left",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Immersing you in new realities with captivating
        </Typography>
        <Typography variant="h2" gutterBottom>
          VR illustrations
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#003087",
            marginTop: "2rem",
            "&:hover": {
              backgroundColor: "#002766",
            },
          }}
        >
          Know more
        </Button>
      </Box>

      {/* Images */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={vrImage1}
          alt="VR Illustration 1"
          style={{
            width: "200px",
            position: "absolute",
            top: "0px",
            left: "-150px",
            zIndex: 1,
          }}
        />
        <img
          src={vrImage2}
          alt="VR Illustration 2"
          style={{
            width: "250px",
            position: "absolute",
            top: "0px",
            left: "100px",
            zIndex: 2,
          }}
        />
        <img
          src={vrImage3}
          alt="VR Illustration 3"
          style={{
            width: "200px",
            position: "absolute",
            top: "150px",
            left: "10px",
            zIndex: 3,
          }}
        />
      </Box>

      {/*  VR Person Image */}
      <Box
        sx={{
          position: "absolute",
          bottom: "0%",
          right: "15%",
        }}
      >
        <img
          src={vrPerson}
          alt="Person with VR Headset"
          style={{
            width: "300px",
          }}
        />
      </Box>
    </Box>
  );
};

export default VrIllustrations;
