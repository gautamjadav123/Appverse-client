import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import applogowhite from "../../Images/appverse-white-logo.png";
import appsicon from "../../Images/app-icon.png";
import gameicon from "../../Images/game-icon.png";
import categoryicon from "../../Images/category-icon.png";
import userProfileImage from "../../Images/profile.png";

function Header() {
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
        background:
          "linear-gradient( 90deg, rgba(83, 121, 246, 1) 66.1%, rgba(228, 67, 50, 1) 98.1%)",
        height: "12.5vh",
        justifyContent: " center",
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
            fontSize: "2vw",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          <img
            src={applogowhite}
            alt="Appvers e Logo"
            style={{ width: "4vw" }}
          />
          Appverse
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4vw",
            mr: "13vw",
          }}
        >
          {[
            {
              label: "Home",
              href: "/",
              icon: require("../../Images/home-icon.svg").default,
            },
            { label: "Games", href: "/games", icon: gameicon },
            { label: "Apps", href: "/apps", icon: appsicon },
            { label: "Categories", href: "/categories", icon: categoryicon },
          ].map((item) => (
            <Button
              key={item.label}
              color="inherit"
              href={item.href}
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                padding: "1vh",
              }}
            >
              <img
                src={item.icon}
                alt={`${item.label} Icon`}
                style={{
                  width: "2vw", // Consistent width
                  height: "2vw", // Consistent height for all icons
                  marginBottom: "0.5vh", // Space between icon and text
                }}
              />
              {item.label}
            </Button>
          ))}
        </Box>

        {isLoggedIn ? (
          <Box
            sx={{
              // marginLeft: "10vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => navigate("/profile/information")}
          >
            {/* Remove img comment if needed */}
            {/* <img
    src={require("../../Images/store.svg").default}
    alt="Game Icon"
    style={{ width: "3vw", marginBottom: "0.5vh" }}
  /> */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "2vw",
                marginLeft: "10vw",
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
              o
              nClick={() => {
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

export default Header;
