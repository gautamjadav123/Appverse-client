import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { advertisementData, appData } from "../../component/Categories/data";
import StarIcon from "@mui/icons-material/Star";

const Advertisment = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: 1,
          backgroundColor: "#fff",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "20px",
            fontWeight: 500,
            mb: 2,
            display: "fl     ex",
            justifyContent: "center",
          }}
        >
          Advertise with us
        </Typography>

        <Typography variant="subtitle1" sx={{ p: 1, fontWeight: 500 }}>
          Boost your business visibility with us! Reach over 6 million views on
          our platform. Click here to start taking your business to new heights.
        </Typography>
        <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              backgroundColor: "#00f",
              color: "#fff",
              padding: "1vh 2vw",
              borderRadius: "0.5vw",
              width: "6vw",
              height: "5vh",
            }}
          >
            Resister
          </Button>
        </Box>

        {/* Ad Placeholder */}
        <Typography
          variant="subtitle1"
          sx={{ p: 1, fontWeight: 500, ml: "12%" }}
        >
          App may you like
        </Typography>
        <Box
          sx={{
            mb: 4,
          }}
        >
          {advertisementData.map((app, index) => (
            <Box sx={{ ml: "30%" }}>
              <img
                src={app.image}
                alt={app.name}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  marginBottom: "8px",
                }}
              />
              <Typography variant="body1" alignSelf="start">
                {app.name}
              </Typography>
              <Box sx={{ display: "flex", mt: 1, mb: 3, alignSelf: "start" }}>
                <Typography variant="caption">{app.rating}</Typography>
                <StarIcon
                  sx={{ color: "grey", marginLeft: "4px", fontSize: "16px" }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Advertisment;

// import { Box, Button, Typography, IconButton } from "@mui/material";
// import React, { useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { advertisementData } from "../../component/Categories/data";
// import StarIcon from "@mui/icons-material/Star";

// const Advertisment = ({ onClose }) => {
//   return (
//     <Box sx={{ position: "relative", backgroundColor: "#fff", padding: 2 }}>
//       <IconButton
//         sx={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           zIndex: 1,
//         }}
//         onClick={onClose}
//       >
//         <CloseIcon />
//       </IconButton>
//       <Typography
//         sx={{
//           color: "black",
//           fontSize: "20px",
//           fontWeight: 500,
//           mb: 2,
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         Advertise with us
//       </Typography>

//       <Typography variant="subtitle1" sx={{ p: 1, fontWeight: 500 }}>
//         Boost your business visibility with us! Reach over 6 million views on
//         our platform. Click here to start taking your business to new heights.
//       </Typography>
//       <Button
//         sx={{
//           backgroundColor: "#00f",
//           color: "#fff",
//           padding: "1vh 2vw",
//           borderRadius: "0.5vw",
//           width: "9vw",
//           height: "5vh",
//           mx: "25%",
//           mb: 2,
//         }}
//       >
//         Register
//       </Button>

//       <Typography variant="subtitle1" sx={{ p: 1, fontWeight: 500, ml: "20%" }}>
//         App may you like
//       </Typography>
//       <Box sx={{ mb: 4 }}>
//         {advertisementData.map((app, index) => (
//           <Box sx={{ ml: "35%" }} key={index}>
//             <img
//               src={app.image}
//               alt={app.name}
//               style={{
//                 width: "60px",
//                 height: "60px",
//                 borderRadius: "16px",
//                 marginBottom: "8px",
//               }}
//             />
//             <Typography variant="body1" alignSelf="start">
//               {app.name}
//             </Typography>
//             <Box sx={{ display: "flex", marginTop: "4px", alignSelf: "start" }}>
//               <Typography variant="caption">{app.rating}</Typography>
//               <StarIcon
//                 sx={{ color: "grey", marginLeft: "4px", fontSize: "16px" }}
//               />
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Advertisment;
