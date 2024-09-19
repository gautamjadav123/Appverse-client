import React, { useState } from "react";
import { Box, Typography, LinearProgress, Rating, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ReviewPopup from "./ReviewPopup"; // Import the ReviewPopup component

const AppRatings = () => {
  const rating = 4.5;
  const totalRatings = 2024;

  // Mock data for ratings breakdown
  const ratingsData = [
    { star: 5, value: 80 },
    { star: 4, value: 60 },
    { star: 3, value: 30 },
    { star: 2, value: 10 },
    { star: 1, value: 5 },
  ];

  // Mock data for reviews
  const reviewsData = [
    {
      id: 1,
      text: "Zomato is indispensable for any foodie! The app offers an excellent range of options for discovering restaurants and cafes.",
      rating: 5,
      user: "Userabc123",
      time: "a month ago",
    },
    {
      id: 2,
      text: "Great experience using the app. The customer support is also very responsive.",
      rating: 4,
      user: "Userxyz456",
      time: "2 weeks ago",
    },
    {
      id: 3,
      text: "The rewards system keeps me coming back, highly recommended!",
      rating: 5,
      user: "Userpqr789",
      time: "3 weeks ago",
    },
    {
      id: 4,
      text: "Some improvements could be made, but overall it’s a solid app for ordering food.",
      rating: 4,
      user: "Usermno123",
      time: "a week ago",
    },
  ];

  const [showFullText, setShowFullText] = useState(false);
  const [open, setOpen] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(1); // Track how many reviews to show

  // Function to toggle the text visibility
  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  // Function to open the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Function to show more reviews
  const handleShowMoreReviews = () => {
    setVisibleReviews((prev) => prev + 3); // Show 3 more reviews
  };

  // Function to show less reviews
  const handleShowLessReviews = () => {
    setVisibleReviews(1); // Reset back to 1 visible review
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "24px",
        borderRadius: "8px",
        color: "#333",
        m: 2,
      }}
    >
      {/* Review and Ratings Title */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "bold",
          marginBottom: "16px",
          color: "#333333",
        }}
      >
        Review and Ratings
      </Typography>

      <Box
        sx={{ display: "flex", alignItems: "flex-start", marginBottom: "24px" }}
      >
        {/* Overall Rating */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            marginRight: "5vw",
            fontSize: "6rem",
            lineHeight: "1.2",
            color: "#333333",
          }}
        >
          {rating}
        </Typography>

        {/* Star Rating Breakdown */}
        <Box sx={{ flexGrow: 1 }}>
          {ratingsData.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "30vw",
                display: "flex",
                alignItems: "center",
                marginBottom: index !== ratingsData.length - 1 ? "8px" : 0,
              }}
            >
              <Typography
                variant="body2"
                sx={{ width: "20px", color: "#333333", display: "flex" }}
              >
                {item.star}
                <StarIcon
                  sx={{
                    color: "#FFD700",
                    marginRight: "4px",
                    fontSize: "20px",
                  }}
                />
              </Typography>

              <LinearProgress
                variant="determinate"
                value={item.value}
                sx={{
                  flexGrow: 1,
                  height: "8px",
                  borderRadius: "3px",
                  width: "150px",
                  marginLeft: "2vw",
                  backgroundColor: "#FFE08A",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#FFD700",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Number of Ratings */}
      <Typography
        variant="body2"
        sx={{
          ml: 3,
          marginBottom: "16px",
          color: "#888888",
          fontWeight: "bold",
        }}
      >
        {totalRatings} RATINGS
      </Typography>

      {/* Reviews Section */}
      {reviewsData.slice(0, visibleReviews).map((review) => (
        <Box
          key={review.id}
          sx={{
            marginTop: "16px",
            color: "#333333",
            width: "45vw",
            backgroundColor: "#ffffff",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "16px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              marginBottom: "8px",
              color: "#333333",
            }}
          >
            {review.text}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#FFD700",
              marginTop: "16px",
            }}
          >
            <Rating
              value={review.rating}
              readOnly
              sx={{ marginRight: "8px", color: "#FFD700", fontSize: "16px" }}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", marginRight: "8px", color: "#333333" }}
            >
              {review.user}
            </Typography>
            <Typography variant="body2" sx={{ color: "#888888" }}>
              {review.time}
            </Typography>
          </Box>
        </Box>
      ))}

      {/* Show More/Show Less Button */}
      {visibleReviews < reviewsData.length ? (
        <Button
          onClick={handleShowMoreReviews}
          sx={{ marginTop: "16px", textAlign: "right" }}
        >
          Show More Reviews
        </Button>
      ) : (
        <Button
          onClick={handleShowLessReviews}
          sx={{ marginTop: "16px", textAlign: "right" }}
        >
          Show Less Reviews
        </Button>
      )}

      {/* Add Review Button */}
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Button onClick={handleClickOpen}>Add Review</Button>
      </Box>

      {/* Use the ReviewPopup component */}
      <ReviewPopup open={open} onClose={handleClose} />
    </Box>
  );
};

export default AppRatings;
