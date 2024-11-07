import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Rating,
  Button,
  Typography,
} from "@mui/material";

const ReviewPopup = ({ open, onClose, onSubmit }) => {
  const [userRating, setUserRating] = useState(0);
  const [title, setTitle] = useState(""); // Store the title
  const [description, setDescription] = useState(""); // Store the description

  // Handle user rating change
  const handleRatingChange = (event, newValue) => {
    setUserRating(newValue);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Create the review object
    const newReview = {
      rating: userRating,
      title,
      description,
    };

    // Call the parent function to handle adding the review
    onSubmit(newReview);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{ backgroundColor: "#e0e7ff", color: "#333", fontWeight: "bold" }}
      >
        Review Box
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: "#e0e7ff" }}>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
        >
          <Rating
            value={userRating}
            onChange={handleRatingChange}
            sx={{ color: "#FFD700" }}
          />
          <Typography variant="body2" sx={{ marginLeft: "8px", color: "#333" }}>
            Your Rating: {userRating} star{userRating !== 1 && "s"}
          </Typography>
        </Box>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          placeholder="Give your review a title (optional)"
          value={title} // Controlled input for title
          onChange={(e) => setTitle(e.target.value)} // Update title state
          sx={{
            marginBottom: "16px",
            backgroundColor: "#fff",
            borderRadius: "4px",
          }}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Share your experience with this app (optional)"
          value={description} // Controlled input for description
          onChange={(e) => setDescription(e.target.value)} // Update description state
          sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
        />
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#e0e7ff" }}>
        <Button
          onClick={handleSubmit} // Call handleSubmit when the user clicks submit
          sx={{
            backgroundColor: "#4285F4",
            color: "#FFF",
            "&:hover": { backgroundColor: "#3367d6" },
          }}
        >
          Submit
        </Button>
        <Button
          onClick={onClose}
          sx={{
            backgroundColor: "#f5f5f5",
            color: "#333",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewPopup;
