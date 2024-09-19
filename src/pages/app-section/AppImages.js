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

const AppImages = () => {
  const [open, setOpen] = useState(false); // State to manage dialog visibility
  const [selectedIndex, setSelectedIndex] = useState(null); // Track the index of the selected image

  const handleClickOpen = (index) => {
    setSelectedIndex(index); // Set the clicked image index
    setOpen(true); // Open the dialog
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
    setSelectedIndex(null); // Reset the selected index
  };

  const handlePrevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const handleNextImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Keyboard navigation logic
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

    // Attach the event listener to the document when the dialog is open
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the dialog is closed
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
      {items.map((item, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: "150px", // Increase card size slightly
            flexShrink: 0,
            backgroundColor: "red",
            padding: "16px",
            borderRadius: "8px",
            textAlign: "center",
            color: "white",
            cursor: "pointer", // Make it look clickable
          }}
          onClick={() => handleClickOpen(index)} // Open dialog with image index
        >
          <CardMedia
            component="img"
            image={item.img}
            alt={item.text}
            sx={{ height: "220px", objectFit: "contain" }} // Increase image height
          />
        </Card>
      ))}

      {/* Dialog for previewing the selected card */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent
          sx={{
            backgroundColor: "red", // Set the red background for the dialog
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px", // Add padding around the card
            height: "60vh", // Make the dialog responsive
            width: "60vh", // Make the dialog responsive
          }}
        >
          {/* Left navigation button */}
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

          {/* Display the selected card */}
          {/* <Card
            sx={{
              width: "80%", // Increased size for the preview
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "red",
            }}
          > */}
          <CardMedia
            component="img"
            image={items[selectedIndex]?.img}
            alt="Preview"
            sx={{
              height: "50vh",
              width: "50vh",
              objectFit: "contain",
              marginBottom: "16px",
            }} // Larger preview image
          />
          {/* </Card> */}

          {/* Right navigation button */}
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
