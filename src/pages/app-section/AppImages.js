import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const items = [
  {
    img: require("../../Images/app-images/image1.png"),
    text: "Some Text 1",
  },
  {
    img: require("../../Images/app-images/image2.png"),
    text: "Some Text 2",
  },
  {
    img: require("../../Images/app-images/image3.png"),
    text: "Some Text 3",
  },
  {
    img: require("../../Images/app-images/image4.png"),
    text: "Some Text 4",
  },
  {
    img: require("../../Images/app-images/image1.png"),
    text: "Some Text 1",
  },
  {
    img: require("../../Images/app-images/image2.png"),
    text: "Some Text 2",
  },
  {
    img: require("../../Images/app-images/image3.png"),
    text: "Some Text 3",
  },
  {
    img: require("../../Images/app-images/image4.png"),
    text: "Some Text 4",
  },
  {
    img: require("../../Images/app-images/image1.png"),
    text: "Some Text 1",
  },
  {
    img: require("../../Images/app-images/image2.png"),
    text: "Some Text 2",
  },
  {
    img: require("../../Images/app-images/image3.png"),
    text: "Some Text 3",
  },
  {
    img: require("../../Images/app-images/image4.png"),
    text: "Some Text 4",
  },
];

const AppImages = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClickOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedIndex(null);
  };

  const handlePrevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.mediaUrls.length - 1
    );
  };

  const handleNextImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < data.mediaUrls.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (open) {
        if (event.key === "ArrowLeft") {
          handlePrevImage();
        } else if (event.key === "ArrowRight") {
          handleNextImage();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, selectedIndex]);

  return (
    <Box
      sx={{
        mx: 2,
        display: "flex",
        overflowX: "auto",
        gap: "16px",
        padding: "16px 0",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {data.mediaUrls ? (
        data.mediaUrls.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "150px",
              flexShrink: 0,
              backgroundColor: "red",
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => handleClickOpen(index)}
          >
            <CardMedia
              component="img"
              image={item}
              alt={"img"}
              sx={{ height: "220px", objectFit: "contain" }}
            />
          </Card>
        ))
      ) : (
        <Typography>No images available</Typography> // Fallback if mediaUrls is undefined
      )}

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent
          sx={{
            backgroundColor: "red",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            height: "60vh",
            width: "60vh",
          }}
        >
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          {selectedIndex !== null && data.mediaUrls[selectedIndex] ? (
            <CardMedia
              component="img"
              image={data.mediaUrls[selectedIndex]} // Removed .img, now it directly accesses the URL
              alt="Preview"
              sx={{
                height: "50vh",
                width: "50vh",
                objectFit: "contain",
                marginBottom: "16px",
              }}
            />
          ) : (
            <Typography>No image selected</Typography> // Fallback if selectedIndex is null
          )}

          <IconButton
            onClick={handleNextImage}
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AppImages;
