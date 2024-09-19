import React from "react";
import Header from "../../component/Header/Header";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import Footer from "../../component/footer/Footer";

const Profile = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", height: "calc(100vh - 64px)" }}>
        {/* Sidebar remains constant */}
        <Sidebar />

        {/* The main content area will render child routes */}
        <Box
          sx={{
            flexGrow: 1,
            padding: 2,
            overflowY: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <Outlet /> {/* This renders the child route components */}
        </Box>
      </Box>
      <Box sx={{ mt: 8 }}>
        <Footer />
      </Box>
    </>
  );
};

export default Profile;
