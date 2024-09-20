import React from "react";
import { Box, Button, Typography, Card, CardMedia } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function FoodCard({ app }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: 4,
        boxShadow: 3,
        margin: 2,
        p: 1,
        position: "relative",
      }}
    >
      <CardMedia component="img" image={app.banner} alt={app.title} />
      <Box sx={{ display: "flex" }}>
        <Box>
          <CardMedia
            component="img"
            image={app.thumbnail}
            alt={app.title}
            sx={{
              width: 80,
              height: 80,
              borderRadius: 2,
              marginRight: 1,
              boxShadow: 1,
            }}
          />
        </Box>
        <Box sx={{ width: "45%", height: "100%" }}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(33, 33, 33, 0.5)",
                fontSize: "17px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              {app.title}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              mt: 3,
              mr: 2,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography variant="body2" sx={{ marginLeft: 1 }}>
                {app.rating}
              </Typography>
              <StarIcon
                sx={{ color: "grey", marginLeft: "4px", fontSize: "16px" }}
              />
            </Box>
            <Typography variant="body2" color="textSecondary">
              {app.price}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            size="small"
            variant="contained"
            sx={{
              position: "absolute",
              right: 16,
              bottom: 16,
              backgroundColor: "#3f51b5",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#303f9f",
              },
            }}
          >
            Install
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
