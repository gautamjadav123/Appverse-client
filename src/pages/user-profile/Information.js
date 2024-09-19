import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Avatar,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import profileimg from "../../Images/profile.png";

const ProfileInformation = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: 4,
          marginTop: 5,
          maxWidth: 900,
          margin: "auto",
          flexGrow: 1,
        }}
      >
        <Typography variant="h5">Information</Typography>
        <Typography variant="h6">Wallet amount - 00</Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          marginTop: 5,
          maxWidth: 900,
          margin: "auto",
          flexGrow: 1,
          backgroundColor: "#FFFBFB",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                src={profileimg}
                alt="Profile Picture"
                sx={{ width: 100, height: 100, marginBottom: 2 }}
              />
              <Typography
                variant="caption"
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                Change Profile picture
              </Typography>
              <Typography
                variant="caption"
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                Add Avatar
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Username"
                  defaultValue="Ashlin"
                  fullWidth
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  defaultValue="Ashlin George"
                  fullWidth
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Id"
                  defaultValue="ashlin.e@gqmail.com"
                  fullWidth
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mobile no"
                  defaultValue="9876543210"
                  fullWidth
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Country"
                  select
                  defaultValue=""
                  fullWidth
                  disabled={!isEditing}
                >
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="Country1">Country 1</MenuItem>
                  <MenuItem value="Country2">Country 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="State"
                  select
                  defaultValue=""
                  fullWidth
                  disabled={!isEditing}
                >
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="State1">State 1</MenuItem>
                  <MenuItem value="State2">State 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  select
                  defaultValue=""
                  fullWidth
                  disabled={!isEditing}
                >
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="City1">City 1</MenuItem>
                  <MenuItem value="City2">City 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Postal Code"
                  defaultValue="000000"
                  fullWidth
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="DOB"
                  defaultValue="DD/MM/YYY"
                  fullWidth
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              </Grid>
              <Grid item xs={10}>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleEditClick}
                    startIcon={<EditIcon />}
                    sx={{ marginRight: 4 }}
                  >
                    {isEditing ? "Save" : "Edit Information"}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProfileInformation;
