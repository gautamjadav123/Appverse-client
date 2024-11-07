import React, { useState, useEffect } from "react";
import { Box, Typography, LinearProgress, Rating, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ReviewPopup from "./ReviewPopup"; // Import the ReviewPopup component
import api from "../../api/api";

const AppRatings = () => {
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [reviewsData, setReviewsData] = useState([]);
  const [ratingsData, setRatingsData] = useState([]);
  const [open, setOpen] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(1); // Track how many reviews to show

  const token = localStorage.getItem("token");

  // Fetch data from the API when the component mounts
  const fetchReviews = async () => {
    try {
      const response = await api.get("/api/appsdata/zomato/reviews");
      const data = response.data;
      console.log(data);
      setAverageRating(data.averageRating);
      setReviewsData(data.reviews); // Assuming the API returns an array of reviews
      setRating(parseFloat(data.rating));
      setTotalRatings(data.reviews.length);

      // Create ratings breakdown dynamically
      const breakdown = [0, 0, 0, 0, 0];
      data.reviews.forEach((review) => {
        breakdown[review.rating - 1]++;
      });
      setRatingsData(
        breakdown.map((count, index) => ({
          star: 5 - index,
          value: (count / data.reviews.length) * 100,
        }))
      );
    } catch (error) {
      console.error("Error fetching reviews", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Function to show more reviews
  const handleShowMoreReviews = () => {
    setVisibleReviews((prev) => prev + 3); // Show 3 more reviews
  };

  // Function to show less reviews
  const handleShowLessReviews = () => {
    setVisibleReviews(1); // Reset back to 1 visible review
  };

  // Function to handle adding a review
  const handleAddReview = async (newReview) => {
    try {
      await api.post("/api/appsdata/zomato/review", newReview, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOpen(false); // Close the popup after submitting
      fetchReviews(); // Refresh the reviews after adding the new one
    } catch (error) {
      console.error("Error adding review", error); // Check for any errors
    }
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
          {averageRating}
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
            {review.description}
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
              {review.username}
            </Typography>
            <Typography variant="body2" sx={{ color: "#888888" }}>
              {new Date(review.createdAt).toLocaleDateString()}
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
        <Button onClick={() => setOpen(true)}>Add Review</Button>
      </Box>

      {/* Review Popup */}
      <ReviewPopup
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleAddReview}
      />
    </Box>
  );
};

export default AppRatings;
