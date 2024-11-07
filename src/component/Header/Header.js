import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import applogowhite from "../../Images/appverse-white-logo.png";
import homeicon from "../../Images/home-icon.svg";
import appsicon from "../../Images/app-icon.png";
import gameicon from "../../Images/game-icon.png";
import categoryicon from "../../Images/category-icon.png";
import userProfileImage from "../../Images/profile.png";
import api from "../../api/api";

function Header() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imgurl, setImgurl] = useState("");
  const [username, setUsername] = useState("");
  let name = localStorage.getItem("name");
  const id = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get(`/api/user/profile/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("all data", response.data);
        setImgurl(response.data.avatar);
        setUsername(response.data.fullName);
      } catch (err) {
        setError("Failed to load profile data");
        console.error(err);
      }
    };

    fetchProfile();
    // Check if the token is present in localStorage
    if (token) {
      setIsLoggedIn(true);
    }
  }, [[id, token]]);

  // Function to get initials from the name
  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.trim().split(" ");
    const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || "";
    const lastInitial =
      nameParts.length > 1
        ? nameParts[nameParts.length - 1].charAt(0).toUpperCase()
        : "";
    return firstInitial + lastInitial;
  };

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
          <Button
            color="inherit"
            href={"/"}
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "1vh",
            }}
          >
            <img
              src={homeicon}
              alt={`home Icon`}
              style={{
                width: "2vw",
                height: "2vw",
                marginBottom: "0.5vh",
              }}
            />
            Home
          </Button>
          <Button
            color="inherit"
            href={"/games"}
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "1vh",
            }}
          >
            <img
              src={gameicon}
              alt={`home Icon`}
              style={{
                width: "3vw",
                height: "2vw",
                marginBottom: "0.5vh",
              }}
            />
            Game
          </Button>
          <Button
            color="inherit"
            href={"/apps"}
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "1vh",
            }}
          >
            <img
              src={appsicon}
              alt={`home Icon`}
              style={{
                width: "2vw",
                height: "2vw",
                marginBottom: "0.5vh",
              }}
            />
            Apps
          </Button>
          <Button
            color="inherit"
            href={"/categories"}
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "1vh",
            }}
          >
            <img
              src={categoryicon}
              alt={`home Icon`}
              style={{
                width: "2vw",
                height: "2vw",
                marginBottom: "0.5vh",
              }}
            />
            Categories
          </Button>

          {/* ))} */}
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
              {imgurl ? (
                <img
                  src={imgurl}
                  alt="User Profile"
                  style={{
                    width: "3.5vw",
                    height: "3.5vw",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <Avatar
                  sx={{
                    width: "3.5vw",
                    height: "3.5vw",
                    backgroundColor: "grey",
                    fontSize: "1vw",
                    fontWeight: "bold",
                  }}
                >
                  {getInitials(username)}
                </Avatar>
              )}
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

export default Header;
