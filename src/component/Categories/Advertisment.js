import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import api from "../../api/api";

const Advertisment = () => {
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/api/apps/new-released");
      console.log("new released", response.data);
      setNewRelease(response.data);
    } catch (err) {
      console.log("not fetch products", err);
    }
  };
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
            fontSize: "14px",
            fontWeight: 700,
            mb: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          Advertise with us
        </Typography>

        <Typography sx={{ p: 1, fontWeight: 400, fontSize: "12px" }}>
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
              width: "7vw",
              height: "5vh",
              fontSize: "10px",
              "&:hover": {
                backgroundColor: "#00f",
              },
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
          {newRelease.map((app, index) => (
            <Box sx={{ ml: "30%" }}>
              <img
                src={app.icon}
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
