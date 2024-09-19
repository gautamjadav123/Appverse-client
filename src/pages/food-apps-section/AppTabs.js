import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

export default function AppTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Apps" />
        <Tab label="Games" />
      </Tabs>
    </Box>
  );
}
