import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import applogowhite from "../../Images/appverse-white-logo.png";
import appsicon from "../../Images/app-icon.png";
import gameicon from "../../Images/game-section/home/game-icon.svg";
import categoryicon from "../../Images/category-icon.png";
import userProfileImage from "../../Images/profile.png";

function GamesHeader() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let name = localStorage.getItem("name");

  useEffect(() => {
    // Check if the token is present in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AppBar
      position="static"
      style={{
        background: "#1E1E1E",
        // background:
        //   "linear-gradient( 90deg, rgba(83, 121, 246, 1) 66.1%, rgba(228, 67, 50, 1) 98.1%)",
        height: "12.5vh",
        justifyContent: "center",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h8"
          style={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
            fontSize: "3vw",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          <img
            src={applogowhite}
            alt="Appverse Logo"
            style={{ width: "4vw" }}
          />
          Appverse
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4vw",
            mr: "7vw",
          }}
        >
          <Button
            color="inherit"
            href="/"
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "1vh",
            }}
          >
            <img
              src={
                require("../../Images/game-section/home/home-icon.svg").default
              }
              alt="Game Icon"
              style={{ width: "2vw", marginBottom: "0.5vh" }}
            />
            Home
          </Button>
          <Button
            color="inherit"
            href="/games"
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "1vh 0",
              marginTop: "6px",
            }}
          >
            <img
              src={
                require("../../Images/game-section/home/game-icon.svg").default
              }
              alt="Game Icon"
              style={{ width: "2vw", marginBottom: "0.5vh" }}
            />
            Games
          </Button>
          <Button
            color="inherit"
            href="/apps"
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "1vh",
            }}
          >
            <img
              src={
                require("../../Images/game-section/home/apps-icon.svg").default
              }
              alt="App Icon"
              style={{ width: "2vw", marginBottom: "0.4vh" }}
            />
            Apps
          </Button>
          <Button
            color="inherit"
            href="/categories"
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "1vh",
            }}
          >
            <img
              src={
                require("../../Images/game-section/home/category-icon.svg")
                  .default
              }
              alt="Category Icon"
              style={{ width: "2vw", marginBottom: "0.5vh" }}
            />
            Categories
          </Button>
        </Box>

        {isLoggedIn ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "2vw",
              marginLeft: "14vw",
              padding: "0.5vw 1vw",
            }}
          >
            <img
              src={userProfileImage}
              alt="User Profile"
              style={{
                width: "2.5vw",
                height: "2.5vw",
                borderRadius: "50%",
              }}
            />
            <Typography
              variant="h8"
              style={{ color: "white", textAlign: "center" }}
            >
              {name}
            </Typography>
          </Box>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2vw",
              marginRight: "2vw",
            }}
          >
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "1vh 2vw",
                borderRadius: "0.5vw",
                width: "9vw",
                height: "5vh",
              }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </Button>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "1vh 2vw",
                borderRadius: "0.5vw",
                width: "9vw",
                height: "5vh",
              }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default GamesHeader;
