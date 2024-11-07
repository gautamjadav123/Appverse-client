import {
  Box,
  Button,
  Grid,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header/Header";
import Searchbox from "../../component/Search-box/Searchbox";
import {
  trendingappsdata,
  musicapps,
  newreleased,
} from "../../component/Categories/data";
import NewReleaseApp from "../../component/Categories/NewReleaseApps";
import PopularGames from "../../component/Categories/PopularGames";
import TrendingApps from "../../component/Categories/TrendingApps";
import Footer from "../../component/footer/Footer";
import Advertisment from "../../component/Categories/Advertisment";
import NewReleased from "../../component/Categories/NewReleased";
import api from "../../api/api";

const Home = () => {
  const navigate = useNavigate();
  const half = Math.ceil(trendingappsdata.length / 2);
  const firstRowApps = trendingappsdata.slice(0, half);
  const secondRowApps = trendingappsdata.slice(half);

  const [newRelease, setNewRelease] = useState([]);
  const [populargames, setPopulargames] = useState([]);
  const [musicApps, setMusicApps] = useState([]);
  const [upcomingApp, setUpcomingApps] = useState([]);

  const [loading, setLoading] = useState(true); // Loader state
  const [error, setError] = useState(null); // Error state
  const [openError, setOpenError] = useState(false); // Snackbar for error

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true); // Start loader
    try {
      await Promise.all([
        fetchProducts(),
        fetchgames(),
        fetchmusic(),
        fetchupcoming(),
      ]);
    } catch (err) {
      setError("Failed to fetch data");
      setOpenError(true); // Open the snackbar if there's an error
    } finally {
      setLoading(false); // End loader
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await api.get("/api/apps/new-released");
      setNewRelease(response.data);
    } catch (err) {
      throw new Error("Error fetching new releases");
    }
  };

  const fetchgames = async () => {
    try {
      const response = await api.get("/api/apps/popular-games");
      setPopulargames(response.data);
    } catch (err) {
      throw new Error("Error fetching popular games");
    }
  };

  const fetchmusic = async () => {
    try {
      const response = await api.get("/api/apps/music-apps");
      setMusicApps(response.data);
    } catch (err) {
      throw new Error("Error fetching music apps");
    }
  };

  const fetchupcoming = async () => {
    try {
      const response = await api.get("/api/apps/upcoming-and-available");
      setUpcomingApps(response.data);
    } catch (err) {
      throw new Error("Error fetching upcoming apps");
    }
  };

  const handleCloseError = () => {
    setOpenError(false);
  };

  return (
    <Box
      style={{
        backgroundColor: "#fff",
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Header />

      {/* Loader */}
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {/* Error Popup */}
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error">
          {error}
        </Alert>
      </Snackbar>

      {!loading && (
        <>
          {/* Search box */}
          <Box>
            <Searchbox />
          </Box>

          {/* New  Released Apps */}
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "26px",
                fontWeight: 500,
                lineHeight: "normal",
                px: 5,
              }}
            >
              New Upcoming Apps
            </Typography>
            <Box
              sx={{
                padding: 4,
                overflowX: "scroll",
                display: "flex",
                gap: 2,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                mx: 5,
              }}
            >
              {newRelease.map((app, index) => (
                <Box key={index} sx={{ flexShrink: 0 }}>
                  <Button
                    color="inherit"
                    onClick={() => {
                      navigate("/app/zomato");
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "0.1vh",
                    }}
                  >
                    <NewReleaseApp app={app} />
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Popular Games */}
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "26px",
                fontWeight: 500,
                lineHeight: "normal",
                px: 5,
              }}
            >
              Popular Games
            </Typography>
            <Box
              sx={{
                padding: 4,
                ml: 5,
                overflowX: "scroll",
                display: "flex",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {populargames.map((app, index) => (
                <Box key={index} sx={{ flexShrink: 0 }}>
                  <PopularGames app={app} />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Trending Apps */}
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "26px",
                fontWeight: 500,
                lineHeight: "normal",
                px: 5,
              }}
            >
              Trending Apps
            </Typography>
            <Box
              sx={{
                padding: 2,
                ml: 5,
                overflowX: "scroll",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                display: "flex",
                gap: 2,
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{ flexWrap: "nowrap", flexDirection: "column" }}
              >
                <Grid container item spacing={2} sx={{ flexWrap: "nowrap" }}>
                  {firstRowApps.map((app, index) => (
                    <Grid
                      item
                      key={index}
                      sx={{ minWidth: 400, flexWrap: "nowrap" }}
                    >
                      <TrendingApps app={app} />
                    </Grid>
                  ))}
                </Grid>
                <Grid
                  container
                  item
                  spacing={2}
                  sx={{ flexWrap: "nowrap", marginTop: 2 }}
                >
                  {secondRowApps.map((app, index) => (
                    <Grid item key={index} sx={{ minWidth: 400 }}>
                      <TrendingApps app={app} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Music Apps */}
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "26px",
                fontWeight: 500,
                lineHeight: "normal",
                px: 5,
                mt: 4,
              }}
            >
              Music Apps
            </Typography>
            <Box
              sx={{
                px: 4,
                pt: 2,
                ml: 5,
                overflowX: "scroll",
                display: "flex",
                gap: 2,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {musicApps.map((app, index) => (
                <Box key={index} sx={{ flexShrink: 0 }}>
                  <NewReleaseApp app={app} />
                </Box>
              ))}
            </Box>
          </Box>

          {/* New Released */}
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "26px",
                fontWeight: 500,
                lineHeight: "normal",
                px: 5,
                mt: 4,
              }}
            >
              New Released
            </Typography>
            <Box
              sx={{
                pt: 2,
                ml: 5,
                overflowX: "scroll",
                display: "flex",
                gap: 2,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {newreleased.map((app, index) => (
                <NewReleased app={app} />
              ))}
            </Box>
          </Box>
        </>
      )}

      <Footer />
    </Box>
  );
};

export default Home;
