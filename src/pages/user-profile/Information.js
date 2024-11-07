import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Avatar,
  Typography,
  Grid,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import profileimg from "../../Images/profile.png";
import api from "../../api/api";
import Select from "react-select"; // Import react-select
import { Country, State, City } from "country-state-city";
import axios from "axios";

// Access environment variables securely
const CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

console.log("name", CLOUDINARY_CLOUD_NAME);
const ProfileInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    fullName: "",
    email: "",
    mobile: "",
    country: "Country", // Set default value
    state: "State", // Set default value
    city: "City", // Set default value
    postalCode: "",
    dob: "",
    avatar: "",
  });

  const id = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  console.log("id", id);
  console.log("token", token);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [loadingAvatar, setLoadingAvatar] = useState(false); // Avatar loading state

  const [imgurl, setImgurl] = useState("");
  const [username, setUsername] = useState("");

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get(`/api/user/profile/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const { dob, country, state, city } = response.data;
        setImgurl(response.data.avatar);

        setUsername(response.data.fullName);

        console.log("all data", response.data);

        setProfileData({
          ...response.data,
          dob: dob ? new Date(dob).toISOString().split("T")[0] : "", // Convert date to yyyy-mm-dd
          country: country
            ? {
                value: country,
                label: Country.getCountryByCode(country)?.name || "None",
              }
            : "None",
          state: state
            ? {
                value: state,
                label:
                  State.getStateByCodeAndCountry(state, country)?.name ||
                  "None",
              }
            : "None",
          city: city ? { value: city, label: city } : "None",
        });

        if (country) {
          const states = State.getStatesOfCountry(country).map((state) => ({
            value: state.isoCode,
            label: state.name,
          }));
          setStateOptions(states);
        }

        if (country && state) {
          const cities = City.getCitiesOfState(country, state).map((city) => ({
            value: city.name,
            label: city.name,
          }));
          setCityOptions(cities);
        }
      } catch (err) {
        setError("Failed to load profile data");
        console.error(err);
      }
    };

    fetchProfile();
    loadCountries();
  }, [id, token]);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoadingAvatar(true); // Show loader during image upload
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Using env var for pre set
      console.log("Cloudinary Cloud Name:", CLOUDINARY_CLOUD_NAME);
      console.log("Cloudinary Upload Preset:", CLOUDINARY_UPLOAD_PRESET);

      try {
        // Upload image to Cloudinary
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );
        const imageUrl = response.data.secure_url; // Cloudinary image URL

        // Check if imageUrl exists before updating state
        if (imageUrl) {
          setProfileData({ ...profileData, avatar: imageUrl }); // Set avatar URL
          console.log("Image uploaded successfully:", imageUrl);
        } else {
          setError("Failed to upload avatar"); // Show error if image URL isn't present
        }
        setLoadingAvatar(false); // Hide loader after upload
      } catch (error) {
        console.error("Error uploading image:", error);
        setError("Failed to upload avatar");
        setLoadingAvatar(false); // Hide loader if error
      }
    }
  };

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const nameParts = fullName.trim().split(" ");
    const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || "";
    const lastInitial =
      nameParts.length > 1
        ? nameParts[nameParts.length - 1].charAt(0).toUpperCase()
        : "";
    return firstInitial + lastInitial;
  };

  const loadCountries = () => {
    const countries = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountryOptions(countries);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: name === "mobileNo" ? value.replace(/\D/g, "") : value,
    });
  };

  const handleSave = async () => {
    console.log(profileData.mobile);
    if (isEditing) {
      setLoading(true);

      try {
        await api.put(
          "/api/profile/update-profile",
          {
            name: profileData.fullName,
            fullName: profileData.fullName,
            email: profileData.email,
            mobileNo: profileData.mobile,
            country: profileData.country?.value,
            state: profileData.state?.value,
            city: profileData.city?.value,
            postalCode: profileData.postalCode,
            dob: profileData.dob ? profileData.dob : "",
            avatar: profileData.avatar, // Include avatar URL if available
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLoading(false);
        setIsEditing(false); // Switch back to view mode
        console.log("update successfully");
      } catch (err) {
        setError("Failed to update profile");
        setLoading(false);
        console.error(err);
      }
    }
  };

  const handleCountryChange = (selectedCountry) => {
    setProfileData({
      ...profileData,
      country: selectedCountry,
      state: null,
      city: null,
    });
    const states = State.getStatesOfCountry(selectedCountry.value).map(
      (state) => ({
        value: state.isoCode,
        label: state.name,
      })
    );
    setStateOptions(states);
    setCityOptions([]); // Clear cities when country changes
  };

  // Handle state selection
  const handleStateChange = (selectedState) => {
    setProfileData({ ...profileData, state: selectedState, city: null });
    const cities = City.getCitiesOfState(
      profileData.country?.value,
      selectedState.value
    ).map((city) => ({
      value: city.name,
      label: city.name,
    }));
    setCityOptions(cities);
  };

  const handleCityChange = (selectedCity) => {
    setProfileData({ ...profileData, city: selectedCity });
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: 4,
          marginTop: 5,
          maxWidth: 900,
          margin: "auto",
          flexGrow: 1,
        }}
      >
        <Typography variant="h5">Information</Typography>
        <Typography variant="h6">Wallet amount - 00</Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          marginTop: 5,
          maxWidth: 900,
          margin: "auto",
          flexGrow: 1,
          backgroundColor: "#FFFBFB",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              {loadingAvatar ? (
                <CircularProgress />
              ) : imgurl ? (
                <Avatar
                  src={profileData.avatar || profileimg}
                  alt="Profile Picture"
                  sx={{ width: 100, height: 100, marginBottom: 2 }}
                />
              ) : (
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: "grey",
                    fontSize: "4vw",
                    fontWeight: "bold",
                  }}
                >
                  {getInitials(profileData.fullName)}
                </Avatar>
              )}

              <input
                type="file"
                accept="image/*"
                id="avatar-upload"
                style={{ display: "none" }}
                onChange={handleAvatarChange}
              />
              <label htmlFor="avatar-upload">
                <Typography
                  variant="caption"
                  color="primary"
                  sx={{ cursor: "pointer" }}
                >
                  {loadingAvatar ? "Uploading..." : "Change Profile Picture"}
                </Typography>
              </label>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="name"
                  name="fullName"
                  value={profileData.fullName}
                  fullWidth
                  onChange={handleInputChange}
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Id"
                  name="email id"
                  value={profileData.email}
                  fullWidth
                  onChange={handleInputChange}
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mobile no"
                  name="mobile"
                  value={profileData.mobile}
                  fullWidth
                  onChange={handleInputChange}
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="date"
                  label="DOB"
                  name="dob"
                  value={profileData.dob} // This should be in yyyy-mm-dd format
                  fullWidth
                  onChange={handleInputChange}
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  options={countryOptions}
                  value={profileData.country}
                  onChange={handleCountryChange}
                  placeholder="Select Country"
                  isDisabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  options={stateOptions}
                  value={profileData.state}
                  onChange={handleStateChange}
                  placeholder="Select State"
                  isDisabled={!isEditing || !profileData.country}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  options={cityOptions}
                  value={profileData.city}
                  onChange={handleCityChange}
                  placeholder="Select City"
                  isDisabled={!isEditing || !profileData.state}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Postel code"
                  name="postalCode"
                  value={profileData.postalCode}
                  fullWidth
                  onChange={handleInputChange}
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              </Grid>

              <Grid item xs={10}>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={isEditing ? handleSave : handleEditClick}
                    startIcon={<EditIcon />}
                    sx={{ marginRight: 4 }}
                    disabled={loading}
                  >
                    {isEditing
                      ? loading
                        ? "Saving..."
                        : "Save"
                      : "Edit Information"}
                  </Button>
                </Box>
                {error && <Typography color="error">{error}</Typography>}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProfileInformation;
