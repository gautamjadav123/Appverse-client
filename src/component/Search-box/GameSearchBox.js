import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function GameSearchbox() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "submit") {
      if (searchTerm.toLowerCase() === "food") {
        navigate("/search-results"); // Navigate to the search results page
      }
    }
    if (event.key === "Enter" || event.type === "submit") {
      if (searchTerm.toLowerCase() === "food") {
        navigate("/search-results"); // Navigate to the search results page
      }
    }
    if (event.key === "Enter" || event.type === "submit") {
      if (searchTerm.toLowerCase() === "food") {
        navigate("/search-results"); // Navigate to the search results page
      }
    }
    if (event.key === "Enter" || event.type === "submit") {
      if (searchTerm.toLowerCase() === "food") {
        navigate("/search-results"); // Navigate to the search results page
      }
    }
    if (event.key === "Enter" || event.type === "submit") {
      if (searchTerm.toLowerCase() === "food") {
        navigate("/search-results"); // Navigate to the search results page
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 5,
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search apps, games and more..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
        sx={{
          width: "100%",
          height: "46px",
          maxWidth: "500px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "0.5px rgba(0, 0, 0, 0.35)",
          boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            height: "100%",
            paddingRight: "10px",
            paddingLeft: "15px",
            boxSizing: "border-box",
          },
          "& .MuiInputBase-input": {
            padding: 0,
            height: "100%",
            lineHeight: "46px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          px: 5,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon
                sx={{ width: "40px", height: "40px", color: "black" }}
                onClick={() => handleSearch({ type: "submit" })}
                style={{ cursor: "pointer" }}
              />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
