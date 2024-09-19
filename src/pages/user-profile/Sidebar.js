import React from "react";
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
import profileimg from "../../Images/profile.png";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
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
        <Avatar
          alt="Ashlin"
          src={profileimg}
          sx={{ width: 40, height: 40, mr: 4 }}
        />
        <Typography variant="h6">Ashlin</Typography>
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
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            window.location.href = "/login"; // Navigate to login on logout
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
        <Divider />
      </List>
      <Box sx={{ position: "absolute", bottom: 10, left: 10 }}>
        <Typography variant="caption" color="textSecondary">
          • Privacy policy • Terms of use
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
