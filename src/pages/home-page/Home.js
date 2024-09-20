import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header/Header";
import Searchbox from "../../component/Search-box/Searchbox";
import {
  appData,
  gamesdata,
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

const Home = () => {
  const navigate = useNavigate();
  const half = Math.ceil(trendingappsdata.length / 2);
  const firstRowApps = trendingappsdata.slice(0, half);
  const secondRowApps = trendingappsdata.slice(half);

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

      {/* Search box */}
      <Box>
        <Searchbox />
      </Box>
      {/* Search box */}

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
          New Released
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
          {appData.map((app, index) => (
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
      {/* New Released Apps */}

      <Grid container>
        {/* Main Content Area */}
        <Grid item xs={12} md={10.5}>
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
              {gamesdata.map((app, index) => (
                <Box key={index} sx={{ flexShrink: 0 }}>
                  <PopularGames app={app} />
                </Box>
              ))}
            </Box>
          </Box>
          {/* Popular Games */}

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
          {/* Trending Apps */}

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
              {musicapps.map((app, index) => (
                <Box key={index} sx={{ flexShrink: 0 }}>
                  <NewReleaseApp app={app} />
                </Box>
              ))}
            </Box>
          </Box>
          {/* Music Apps */}

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
                <NewReleased
                  key={index}
                  title={app.title}
                  subtitle={app.subtitle}
                  imgSrc={app.imgSrc}
                  buttontitle={app.buttontitle}
                />
              ))}
            </Box>
          </Box>
          {/* New Released */}
        </Grid>

        {/* Ad Section */}
        <Grid
          item
          xs={12}
          md={1.5}
          sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <Advertisment />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Home;
