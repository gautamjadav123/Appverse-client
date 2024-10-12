import axios from "axios";

const api = axios.create({
  // baseURL: "https://appverse-server.onrender.com/auth",
  baseURL: "http://localhost:8080/auth",
});

export default api;
// #9c1313

// import { Box, Grid, Typography } from "@mui/material";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../../component/Header/Header";
// import Searchbox from "../../component/Search-box/Searchbox";
// import {
//   appData,
//   gamesdata,
//   trendingappsdata,
//   musicapps,
//   newreleased,
// } from "../../component/Categories/data";
// import NewReleaseApp from "../../component/Categories/NewReleaseApps";
// import PopularGames from "../../component/Categories/PopularGames";
// import TrendingApps from "../../component/Categories/TrendingApps";
// import Footer from "../../component/Footer";
// import NewReleased from "../../component/Categories/NewReleased";
// import Advertisment from "../../component/Categories/Advertisment";

// const Home = () => {
//   const navigate = useNavigate();
//   const half = Math.ceil(trendingappsdata.length / 2);
//   const firstRowApps = trendingappsdata.slice(0, half);
//   const secondRowApps = trendingappsdata.slice(half);

//   return (
//     <Box
//       style={{
//         backgroundColor: "#fff",
//         overflowY: "scroll",
//         scrollbarWidth: "none",
//         msOverflowStyle: "none",
//         "&::-webkit-scrollbar": {
//           display: "none",
//         },
//       }}
//     >
//       <Header />

//       {/* Search box */}
//       <Box>
//         <Searchbox />
//       </Box>
//       {/* Search box */}

//       {/* New Released Apps */}
//       <Box>
//         <Typography
//           sx={{
//             color: "black",
//             fontSize: "26px",
//             fontWeight: 500,
//             lineHeight: "normal",
//             px: 5,
//           }}
//         >
//           New Released
//         </Typography>
//         <Box
//           sx={{
//             padding: 4,
//             overflowX: "scroll",
//             display: "flex",
//             gap: 2,
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//             "&::-webkit-scrollbar": {
//               display: "none",
//             },
//             mx: 5,
//           }}
//         >
//           {appData.map((app, index) => (
//             <Box key={index} sx={{ flexShrink: 0 }}>
//               <NewReleaseApp app={app} />
//             </Box>
//           ))}
//         </Box>
//       </Box>
//       {/* New Released Apps */}

//       <Grid container>
//         {/* Main Content Area */}
//         <Grid item xs={12} md={10}>
//           {/* Popular Games */}
//           <Box>
//             <Typography
//               sx={{
//                 color: "black",
//                 fontSize: "26px",
//                 fontWeight: 500,
//                 lineHeight: "normal",
//                 px: 5,
//               }}
//             >
//               Popular Games
//             </Typography>
//             <Box
//               sx={{
//                 padding: 4,
//                 ml: 5,
//                 overflowX: "scroll",
//                 display: "flex",
//                 gap: 2,
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//                 "&::-webkit-scrollbar": {
//                   display: "none",
//                 },
//               }}
//             >
//               {gamesdata.map((app, index) => (
//                 <Box key={index} sx={{ flexShrink: 0 }}>
//                   <PopularGames app={app} />
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//           {/* Popular Games */}

//           {/* Trending Apps */}
//           <Box>
//             <Typography
//               sx={{
//                 color: "black",
//                 fontSize: "26px",
//                 fontWeight: 500,
//                 lineHeight: "normal",
//                 px: 5,
//               }}
//             >
//               Trending Apps
//             </Typography>
//             <Box
//               sx={{
//                 padding: 2,
//                 ml: 5,
//                 overflowX: "scroll",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//                 "&::-webkit-scrollbar": {
//                   display: "none",
//                 },
//                 display: "flex",
//                 gap: 2,
//               }}
//             >
//               <Grid
//                 container
//                 spacing={2}
//                 sx={{ flexWrap: "nowrap", flexDirection: "column" }}
//               >
//                 <Grid container item spacing={2} sx={{ flexWrap: "nowrap" }}>
//                   {firstRowApps.map((app, index) => (
//                     <Grid
//                       item
//                       key={index}
//                       sx={{ minWidth: 400, flexWrap: "nowrap" }}
//                     >
//                       <TrendingApps app={app} />
//                     </Grid>
//                   ))}
//                 </Grid>
//                 <Grid
//                   container
//                   item
//                   spacing={2}
//                   sx={{ flexWrap: "nowrap", marginTop: 2 }}
//                 >
//                   {secondRowApps.map((app, index) => (
//                     <Grid item key={index} sx={{ minWidth: 400 }}>
//                       <TrendingApps app={app} />
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//           {/* Trending Apps */}

//           {/* Music Apps */}
//           <Box>
//             <Typography
//               sx={{
//                 color: "black",
//                 fontSize: "26px",
//                 fontWeight: 500,
//                 lineHeight: "normal",
//                 px: 5,
//                 mt: 4,
//               }}
//             >
//               Music Apps
//             </Typography>
//             <Box
//               sx={{
//                 px: 4,
//                 pt: 2,
//                 ml: 5,
//                 overflowX: "scroll",
//                 display: "flex",
//                 gap: 2,
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//                 "&::-webkit-scrollbar": {
//                   display: "none",
//                 },
//               }}
//             >
//               {musicapps.map((app, index) => (
//                 <Box key={index} sx={{ flexShrink: 0 }}>
//                   <NewReleaseApp app={app} />
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//           {/* Music Apps */}

//           {/* New Released */}
//           <Box>
//             <Typography
//               sx={{
//                 color: "black",
//                 fontSize: "26px",
//                 fontWeight: 500,
//                 lineHeight: "normal",
//                 px: 5,
//                 mt: 4,
//               }}
//             >
//               New Released
//             </Typography>
//             <Box
//               sx={{
//                 pt: 2,
//                 ml: 5,
//                 overflowX: "scroll",
//                 display: "flex",
//                 gap: 2,
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//                 "&::-webkit-scrollbar": {
//                   display: "none",
//                 },
//               }}
//             >
//               {newreleased.map((app, index) => (
//                 <NewReleased
//                   key={index}
//                   title={app.title}
//                   subtitle={app.subtitle}
//                   imgSrc={app.imgSrc}
//                   buttontitle={app.buttontitle}
//                 />
//               ))}
//             </Box>
//           </Box>
//           {/* New Released */}
//         </Grid>

//         {/* Ad Section */}
//         <Grid
//           item
//           xs={12}
//           md={2}
//           sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
//         >
//           <Advertisment />
//         </Grid>
//       </Grid>
//       <Footer />
//     </Box>
//   );
// };

// export default Home;

// // import { Box, Grid, Typography, IconButton } from "@mui/material";
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import CloseIcon from "@mui/icons-material/Close"; // Import close icon
// // import Header from "../../component/Header/Header";
// // import Searchbox from "../../component/Search-box/Searchbox";
// // import {
// //   appData,
// //   gamesdata,
// //   trendingappsdata,
// //   musicapps,
// //   newreleased,
// // } from "../../component/Categories/data";
// // import NewReleaseApp from "../../component/Categories/NewReleaseApps";
// // import PopularGames from "../../component/Categories/PopularGames";
// // import TrendingApps from "../../component/Categories/TrendingApps";
// // import Footer from "../../component/Footer";
// // import NewReleased from "../../component/Categories/NewReleased";
// // import Advertisment from "../../component/Categories/Advertisment";

// // const Home = () => {
// //   const navigate = useNavigate();
// //   const half = Math.ceil(trendingappsdata.length / 2);
// //   const firstRowApps = trendingappsdata.slice(0, half);
// //   const secondRowApps = trendingappsdata.slice(half);

// //   const [showPopup, setShowPopup] = useState(true); // State to manage popup visibility

// //   return (
// //     <Box
// //       style={{
// //         backgroundColor: "#fff",
// //         overflowY: "scroll",
// //         scrollbarWidth: "none",
// //         msOverflowStyle: "none",
// //         "&::-webkit-scrollbar": {
// //           display: "none",
// //         },
// //       }}
// //     >
// //       <Header />

// //       {/* Search box */}
// //       <Box>
// //         <Searchbox />
// //       </Box>
// //       {/* Search box */}

// //       {/* New Released Apps */}
// //       <Box>
// //         <Typography
// //           sx={{
// //             color: "black",
// //             fontSize: "26px",
// //             fontWeight: 500,
// //             lineHeight: "normal",
// //             px: 5,
// //           }}
// //         >
// //           New Released
// //         </Typography>
// //         <Box
// //           sx={{
// //             padding: 4,
// //             overflowX: "scroll",
// //             display: "flex",
// //             gap: 2,
// //             scrollbarWidth: "none",
// //             msOverflowStyle: "none",
// //             "&::-webkit-scrollbar": {
// //               display: "none",
// //             },
// //             mx: 5,
// //           }}
// //         >
// //           {appData.map((app, index) => (
// //             <Box key={index} sx={{ flexShrink: 0 }}>
// //               <NewReleaseApp app={app} />
// //             </Box>
// //           ))}
// //         </Box>
// //       </Box>
// //       {/* New Released Apps */}

// //       <Grid container spacing={2}>
// //         {/* Main Content Area with full width */}
// //         <Grid item xs={12} md={10}>
// //           {/* Popular Games */}
// //           <Box>
// //             <Typography
// //               sx={{
// //                 color: "black",
// //                 fontSize: "26px",
// //                 fontWeight: 500,
// //                 lineHeight: "normal",
// //                 px: 5,
// //               }}
// //             >
// //               Popular Games
// //             </Typography>
// //             <Box
// //               sx={{
// //                 padding: 4,
// //                 overflowX: "scroll",
// //                 display: "flex",
// //                 gap: 2,
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //                 "&::-webkit-scrollbar": {
// //                   display: "none",
// //                 },
// //                 ml: 5,
// //               }}
// //             >
// //               {gamesdata.map((app, index) => (
// //                 <Box key={index} sx={{ flexShrink: 0 }}>
// //                   <PopularGames app={app} />
// //                 </Box>
// //               ))}
// //             </Box>
// //           </Box>
// //           {/* Popular Games */}

// //           {/* Trending Apps */}
// //           <Box>
// //             <Typography
// //               sx={{
// //                 color: "black",
// //                 fontSize: "26px",
// //                 fontWeight: 500,
// //                 lineHeight: "normal",
// //                 px: 5,
// //               }}
// //             >
// //               Trending Apps
// //             </Typography>
// //             <Box
// //               sx={{
// //                 padding: 2,
// //                 overflowX: "scroll",
// //                 scrollbarWidth: "none",
// //                 "&::-webkit-scrollbar": {
// //                   display: "none",
// //                 },
// //                 display: "flex",
// //                 gap: 2,
// //                 ml: 5,
// //               }}
// //             >
// //               <Grid
// //                 container
// //                 spacing={2}
// //                 sx={{ flexWrap: "nowrap", flexDirection: "column" }}
// //               >
// //                 <Grid container item spacing={2} sx={{ flexWrap: "nowrap" }}>
// //                   {firstRowApps.map((app, index) => (
// //                     <Grid
// //                       item
// //                       key={index}
// //                       sx={{ minWidth: 400, flexWrap: "nowrap" }}
// //                     >
// //                       <TrendingApps app={app} />
// //                     </Grid>
// //                   ))}
// //                 </Grid>
// //                 <Grid
// //                   container
// //                   item
// //                   spacing={2}
// //                   sx={{ flexWrap: "nowrap", marginTop: 2 }}
// //                 >
// //                   {secondRowApps.map((app, index) => (
// //                     <Grid item key={index} sx={{ minWidth: 400 }}>
// //                       <TrendingApps app={app} />
// //                     </Grid>
// //                   ))}
// //                 </Grid>
// //               </Grid>
// //             </Box>
// //           </Box>
// //           {/* Trending Apps */}

// //           {/* Music Apps */}
// //           <Box>
// //             <Typography
// //               sx={{
// //                 color: "black",
// //                 fontSize: "26px",
// //                 fontWeight: 500,
// //                 lineHeight: "normal",
// //                 px: 5,
// //                 mt: 4,
// //               }}
// //             >
// //               Music Apps
// //             </Typography>
// //             <Box
// //               sx={{
// //                 px: 4,
// //                 pt: 2,
// //                 overflowX: "scroll",
// //                 display: "flex",
// //                 gap: 2,
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //                 "&::-webkit-scrollbar": {
// //                   display: "none",
// //                 },
// //                 ml: 5,
// //               }}
// //             >
// //               {musicapps.map((app, index) => (
// //                 <Box key={index} sx={{ flexShrink: 0 }}>
// //                   <NewReleaseApp app={app} />
// //                 </Box>
// //               ))}
// //             </Box>
// //           </Box>
// //           {/* Music Apps */}

// //           {/* New Released */}
// //           <Box>
// //             <Typography
// //               sx={{
// //                 color: "black",
// //                 fontSize: "26px",
// //                 fontWeight: 500,
// //                 lineHeight: "normal",
// //                 px: 5,
// //                 mt: 4,
// //               }}
// //             >
// //               New Released
// //             </Typography>
// //             <Box
// //               sx={{
// //                 pt: 2,
// //                 overflowX: "scroll",
// //                 display: "flex",
// //                 gap: 2,
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //                 "&::-webkit-scrollbar": {
// //                   display: "none",
// //                 },
// //                 ml: 5,
// //               }}
// //             >
// //               {newreleased.map((app, index) => (
// //                 <NewReleased
// //                   key={index}
// //                   title={app.title}
// //                   subtitle={app.subtitle}
// //                   imgSrc={app.imgSrc}
// //                   buttontitle={app.buttontitle}
// //                 />
// //               ))}
// //             </Box>
// //           </Box>
// //           {/* New Released */}
// //         </Grid>

// //         {/* Advertisement Section */}
// //         <Grid item xs={12} md={2} sx={{}}>
// //           {showPopup && (
// //             <Box
// //               sx={{
// //                 width: "100%",
// //                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
// //                 backgroundColor: "white",
// //                 padding: 2,
// //               }}
// //             >
// //               <Advertisment />
// //               <IconButton
// //                 onClick={() => setShowPopup(false)}
// //                 sx={{
// //                   position: "absolute",
// //                   top: 5,
// //                   right: 5,
// //                   color: "black",
// //                 }}
// //               >
// //                 <CloseIcon />
// //               </IconButton>
// //             </Box>
// //           )}
// //         </Grid>
// //       </Grid>

// //       <Footer />
// //     </Box>
// //   );
// // };

// // export default Home;
