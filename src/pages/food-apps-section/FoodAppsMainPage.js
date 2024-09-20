import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Searchbox from "../../component/Search-box/Searchbox";
import Banner from "./Banner";
import FoodCard from "./FoodCard";
import Header from "../../component/Header/Header";
import Footer from "../../component/footer/Footer";

const foodApps = [
  {
    id: 1,
    title: "Swiggy: Food Instamart Dineout",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/food-section/swiggy-logo.png"),
    banner: require("../../Images/food-section/swiggy.png"),
    Category: "food",
  },
  {
    id: 1,
    title: "Uber Eats: Food Delivery",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/food-section/uber-logo.png"),
    banner: require("../../Images/food-section/uber.png"),
    Category: "food",
  },
  {
    id: 1,
    title: "Domino's Pizza - Food Delivery",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/food-section/dominos-logo.png"),
    banner: require("../../Images/food-section/dominos.png"),
    Category: "food",
  },
  {
    id: 1,
    title: "Swiggy: Food Instamart Dineout",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/food-section/swiggy-logo.png"),
    banner: require("../../Images/food-section/swiggy.png"),
    Category: "food",
  },
  {
    id: 1,
    title: "Uber Eats: Food Delivery",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/food-section/uber-logo.png"),
    banner: require("../../Images/food-section/uber.png"),
    Category: "food",
  },
  {
    id: 1,
    title: "Domino's Pizza - Food Delivery",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/food-section/dominos-logo.png"),
    banner: require("../../Images/food-section/dominos.png"),
    Category: "food",
  },
];

export default function FoodAppsMainPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Header />
      <Searchbox />
      {/* <AppTabs /> */}
      <Typography variant="h5">"Food"</Typography>
      <Banner />
      <Grid container spacing={4} justifyContent="center">
        {foodApps.map((app, index) => (
          <Grid item key={index}>
            <FoodCard app={app} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Box>
  );
}
