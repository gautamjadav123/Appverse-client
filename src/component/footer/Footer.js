import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import applogowhite from "../../Images/appverse-white-logo.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#6F32D3",
        color: "white",
        py: 6,
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              <Box component="span" sx={{ color: "#00bcd4" }}>
                <img
                  src={applogowhite}
                  alt="Appverse Logo"
                  style={{ width: "6vw" }}
                />{" "}
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              &copy; 2020 Company
            </Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Typography variant="h8" mr={2} gutterBottom>
              About us
            </Typography>
            <Typography variant="h8" mr={2} gutterBottom>
              Help & Support
            </Typography>
            <Typography variant="h8" mr={2} gutterBottom>
              Terms of use
            </Typography>
            <Typography variant="h8" mr={2} gutterBottom>
              Privacy Policy
            </Typography>
            <Typography variant="h8" mr={2} gutterBottom>
              Developers
            </Typography>
            <Typography variant="h8" gutterBottom>
              Setting
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Social media
            </Typography>
            <Grid sx={{ display: "flex" }}>
              <Link href="#" color="inherit" sx={{ display: "flex" }}>
                <Twitter sx={{ mr: 1 }} hovor />
              </Link>
              <br />
              <Link href="#" color="inherit" sx={{ display: "flex" }}>
                <Facebook sx={{ mr: 1 }} />
              </Link>
              <br />
              <Link href="#" color="inherit" sx={{ display: "flex" }}>
                <Instagram sx={{ mr: 1 }} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
