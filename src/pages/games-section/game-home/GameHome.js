import React from "react";
import Header from "../../../component/Header/Header";
import { Box, Typography } from "@mui/material";
import "./gameanimation.css";
import backgroundVideo from "../../../assets/videos/gamehomebackground.mp4";
import GamesHeader from "../../../component/Header/GamesHeader";
import { gameData } from "../../../component/Categories/data";
import Cards from "./GameCards";
import Footer from "../../../component/footer/Footer";
import GameFooter from "../../../component/footer/GameFooter";
import VideoBackgroundComponent from "./VideoBackgroundComponent";
import VrIllustrations from "./VRIllustrations";

export default function GameHome() {
  return (
    <>
      {/* Header Section */}
      <Box>
        <GamesHeader />
      </Box>
      {/* Neon Text Animation */}
      <Box
        sx={{
          backgroundColor: "#000",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="neon-conta  iner">
          <h1 className="neon-text">
            <span>G</span>
            <span>a</span>
            <span>m</span>
            <span>e</span>
            <span>s</span>
          </h1>
        </div>
      </Box>
      {/* Background Video and Intro Text */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "474px",
          overflow: "hidden",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not sup port the video tag.
        </video>
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          A place where imagination meets <br /> gameplay through vibrant
          illustrations.
        </Typography>
      </Box>
      {/* Game Cards Section */}
      <Box sx={{ backgroundColor: "#000", p: 4 }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "26px",
            fontWeight: 500,
            lineHeight: "normal",
            px: 5,
          }}
        >
          Experience our top picks on PC
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "scroll",
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {gameData.map((app) => (
            <Cards key={app.id} app={app} />
          ))}
        </Box>
      </Box>

      {/* Game Cards Section */}
      <Box sx={{ backgroundColor: "#000", p: 4 }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "26px",
            fontWeight: 500,
            lineHeight: "normal",
            px: 5,
          }}
        >
          Join thefun and don't miss this favorite on pc
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "scroll",
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {gameData.map((app) => (
            <Cards key={app.id} app={app} />
          ))}
        </Box>
      </Box>

      <Box>
        <VideoBackgroundComponent />
      </Box>

      <Box sx={{ backgroundColor: "#000", p: 4 }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "26px",
            fontWeight: 500,
            lineHeight: "normal",
            px: 5,
          }}
        >
          Experience our top VR games
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "scroll",
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {gameData.map((app) => (
            <Cards key={app.id} app={app} />
          ))}
        </Box>
      </Box>
      <Box>
        <VrIllustrations />
      </Box>

      <GameFooter />
    </>
  );
}
