import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Checkbox,
  IconButton,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import StarIcon from "@mui/icons-material/Star";
import Advertisment from "../../component/Categories/Advertisment";

const apps = [
  {
    name: "Domino's",
    size: "250 MB",
    status: "Installed",
    rating: 4.6,
    image: "dominosIcon",
    // image: require("../../Images/new-app/adobe.png"),
  },
  {
    name: "Swiggy",
    size: "150 MB",
    status: "Installed",
    rating: 4.3,
    image: "swiggyIcon",
  },
  {
    name: "Phone Pe",
    size: "200 MB",
    status: "Installing",
    rating: 4.4,
    image: "phonepeIcon",
  },
  {
    name: "Amazon",
    size: "300 MB",
    status: "Installed",
    rating: 4.0,
    image: "amazonIcon",
  },
  {
    name: "Amazon",
    size: "300 MB",
    status: "Installed",
    rating: 4.0,
    image: "amazonIcon",
  },
  {
    name: "Amazon",
    size: "300 MB",
    status: "Installed",
    rating: 4.0,
    image: "amazonIcon",
  },
  {
    name: "Amazon",
    size: "300 MB",
    status: "Installed",
    rating: 4.0,
    image: "amazonIcon",
  },
  {
    name: "Amazon",
    size: "300 MB",
    status: "Installed",
    rating: 4.0,
    image: "amazonIcon",
  },
  {
    name: "Amazon",
    size: "300 MB",
    status: "Installed",
    rating: 4.0,
    image: "amazonIcon",
  },
  {
    name: "Amazon",
    size: "300 MB",
    status: "Installed",
    rating: 4.0,
    image: "amazonIcon",
  },
  {
    name: "Amazon",
    size: "300 MB",
    status: "Installed",
    rating: 4.0,
    image: "amazonIcon",
  },
];

const DownloadedApps = () => {
  const [checkedApps, setCheckedApps] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheck = (appName) => {
    setCheckedApps((prev) =>
      prev.includes(appName)
        ? prev.filter((name) => name !== appName)
        : [...prev, appName]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setCheckedApps([]);
    } else {
      setCheckedApps(apps.map((app) => app.name));
    }
    setSelectAll(!selectAll);
  };

  return (
    <Box sx={{ py: 2, backgroundColor: "#f5f5f5" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Downloaded Apps
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Total Downloaded Apps-220
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          justifyContent: "right",
          mr: 33,
        }}
      >
        <Typography variant="body1">Select All</Typography>
        <Checkbox
          checked={selectAll}
          onChange={handleSelectAll}
          sx={{ marginRight: 1 }}
        />
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Grid container>
        {" "}
        <Grid item xs={10} md={9}>
          <Divider />
          {apps.map((app) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                backgroundColor: "#fff",
                borderRadius: 1,
                boxShadow: 1,
                mb: 2,
              }}
            >
              <img
                src={app.image}
                alt={app.name}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  marginBottom: "8px",
                  marginRight: "10px",
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "rgba(0, 0, 0, 0.45)" }}
                >
                  {app.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: 1, color: "#666" }}
                  >
                    {app.rating}{" "}
                  </Typography>
                  <StarIcon sx={{ color: "#ffc107", fontSize: "small" }} />
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: "#e0e0e0",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: "70%",
                      height: "100%",
                      backgroundColor: "#ffc107",
                    }}
                  />
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "#666", minWidth: "70px", mx: 10 }}
              >
                {app.size}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", minWidth: "80px", marginLeft: "20px" }}
              >
                {app.status}
              </Typography>
              <Checkbox
                sx={{
                  mr: 2,
                  color: "#666",
                  marginLeft: "20px",
                  "&.Mui-checked": {
                    color: "#007bff",
                  },
                }}
              />
              <CheckCircleIcon sx={{ color: "#00c853", marginLeft: "10px" }} />
            </Box>
          ))}
        </Grid>
        <Grid
          item
          xs={10}
          md={3}
          sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          {" "}
          <Advertisment />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DownloadedApps;
