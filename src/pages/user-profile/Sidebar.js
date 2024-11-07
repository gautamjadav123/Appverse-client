import React, { useEffect, useState } from "react";
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import {
  Info as InfoIcon,
  Star as RewardsIcon,
  History as HistoryIcon,
  GetApp as DownloadIcon,
  CreditCard as WalletIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const [imgurl, setImgurl] = useState("");
  const [username, setUsername] = useState("");
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
        console.error(err);
      }
    };

    fetchProfile();
  }, [[id, token]]);

  // Function to get initials from the name
  const getInitials = (username) => {
    if (!username) return "";
    const nameParts = username.trim().split(" ");
    const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || "";
    const lastInitial =
      nameParts.length > 1
        ? nameParts[nameParts.length - 1].charAt(0).toUpperCase()
        : "";
    return firstInitial + lastInitial;
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        backgroundColor: "#F2F4F5",
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          position: "relative",
          height: "100vh",
          backgroundColor: "#F2F4F5",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "20px 0",
          ml: 3,
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
              marginRight: "20px",
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
              marginRight: "20px",
            }}
          >
            {getInitials(username)}
          </Avatar>
        )}
        <Typography variant="h6">{username}</Typography>
      </Box>
      <Divider />
      <List>
        {/* Link each ListItem to its corresponding route */}
        <ListItem button component={Link} to="information">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Information" />
        </ListItem>
        <Divider />

        <ListItem button component={Link} to="rewards">
          <ListItemIcon>
            <RewardsIcon />
          </ListItemIcon>
          <ListItemText primary="Rewards" />
        </ListItem>
        <Divider />

        <ListItem button component={Link} to="purchase-history">
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Purchase history" />
        </ListItem>
        <Divider />

        <ListItem button component={Link} to="downloaded-apps">
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
          <ListItemText primary="Downloaded apps" />
        </ListItem>
        <Divider />

        <ListItem button component={Link} to="wallet-payment">
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Wallet & Payment" />
        </ListItem>
        <Divider />

        <ListItem button component={Link} to="settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />

        <ListItem
          button
          onClick={() => {
            navigate("/login");
            localStorage.removeItem("token");
            localStorage.removeItem("name");
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
};

export default Sidebar;
