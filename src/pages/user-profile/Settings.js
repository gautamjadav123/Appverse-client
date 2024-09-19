import React, { useState } from "react";
import { Switch, Typography, Box, Divider, Button } from "@mui/material";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Settings
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
        Store Permissions
      </Typography>
      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        <Typography>Notifications</Typography>
        <Switch
          checked={notificationsEnabled}
          onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          color="primary"
        />
      </Box>
      <Divider />

      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        <Typography>Location</Typography>
        <Switch
          checked={locationEnabled}
          onChange={() => setLocationEnabled(!locationEnabled)}
          color="primary"
        />
      </Box>
      <Divider />

      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        <Typography>Theme</Typography>
        <Box>
          <Button
            variant={theme === "light" ? "contained" : "outlined"}
            onClick={() => handleThemeChange("light")}
            sx={{ mr: 1 }}
          >
            Light
          </Button>
        </Box>
      </Box>
      <Divider sx={{ mb: 2 }} />

      <Typography variant="subtitle1" sx={{ mt: 3 }}>
        Legal
      </Typography>
      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        <Typography>Terms and Conditions</Typography>
        <Button variant="text">{" > "}</Button>
      </Box>
      <Divider />

      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        <Typography>Privacy Policy</Typography>
        <Button variant="text">{" > "}</Button>
      </Box>
    </Box>
  );
};

export default Settings;
