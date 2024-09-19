import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import Header from "../../component/Header/Header";
import AppSidebar from "./AppSidebar";
import Searchbox from "../../component/Search-box/Searchbox";
import AppImages from "./AppImages";
import AppDescription from "./AppDescription";
import AppRatings from "./AppRatings";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TabletIcon from "@mui/icons-material/Tablet";
import AppleIcon from "@mui/icons-material/Apple";
import AppsFAQ from "./AppsFAQ";
import Advertisment from "../../component/Categories/Advertisment";

export default function AppMainPage() {
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          overflowX: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {/* Sidebar Section */}
        <Box
          sx={{
            ml: 2,
            flexShrink: 0,
            position: "sticky",
            top: 0,
          }}
        >
          <AppSidebar />
        </Box>

        {/* Main Content Section */}
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Box sx={{ width: "100%", overflowX: "hidden" }}>
            <Box>
              <Searchbox />
            </Box>
            <Box>
              <AppImages />
            </Box>
            <Box>
              <AppDescription />
            </Box>
            <Box>
              <AppRatings />
            </Box>
            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                padding: "16px",
                borderRadius: "8px",
                alignItems: "center",
                m: 2,
              }}
            >
              {/* System Requirements Section */}
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  marginRight: "16px",
                  color: "#333333",
                }}
              >
                System Requirements
              </Typography>

              <Box sx={{ display: "flex", mt: 2 }}>
                {/* Requirements Chips */}
                <Box display={"flex"}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "30px",
                      flexGrow: 1,
                    }}
                  >
                    <Chip
                      icon={<PhoneAndroidIcon sx={{ color: "#333333" }} />}
                      label="Android"
                      sx={{
                        width: "10vw",
                        backgroundColor: "#e0e0e0",
                        color: "#333333",
                        fontWeight: "bold",
                        padding: "8px 12px",
                        borderRadius: "24px",
                        "& .MuiChip-icon": {
                          marginLeft: "8px",
                        },
                      }}
                    />
                    <Chip
                      icon={<TabletIcon sx={{ color: "#333333" }} />}
                      label="Tablet"
                      sx={{
                        width: "10vw",
                        backgroundColor: "#e0e0e0",
                        color: "#333333",
                        fontWeight: "bold",
                        padding: "8px 12px",
                        borderRadius: "24px",
                        "& .MuiChip-icon": {
                          marginLeft: "8px",
                        },
                      }}
                    />
                    <Chip
                      icon={<AppleIcon sx={{ color: "#333333" }} />}
                      label="iOS"
                      sx={{
                        width: "10vw",
                        backgroundColor: "#e0e0e0",
                        color: "#333333",
                        fontWeight: "bold",
                        padding: "8px 12px",
                        borderRadius: "24px",
                        "& .MuiChip-icon": {
                          marginLeft: "8px",
                        },
                      }}
                    />
                  </Box>

                  {/* Requirement Description */}
                  <Typography
                    variant="h9"
                    sx={{
                      marginLeft: "1vw",
                      color: "#333333",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      ml: 5,
                    }}
                  >
                    Active internet connection required for app functionality
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <AppsFAQ />
            </Box>
            <Box>
              <Box
                sx={{
                  backgroundColor: "#f5f5f5",
                  padding: "19px",
                  borderRadius: "8px",
                  maxWidth: "60vw",
                  margin: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 5 }} gutterBottom>
                  App Support
                </Typography>
                <Typography variant="body1" gutterBottom>
                  For support and assistance, please visit the Zomato Help
                  Center in the app or contact us via email at
                  support@zomato.com.
                </Typography>
                <Typography variant="body1">
                  You can also reach out through our social media channels for
                  quicker responses.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Advertisement Section */}
          <Box
            sx={{
              flexShrink: 0,
              width: "170px",
              padding: "16px",
              ml: 2,
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              mt: 15,
            }}
          >
            <Advertisment />
          </Box>
        </Box>
      </Box>
    </>
  );
}
