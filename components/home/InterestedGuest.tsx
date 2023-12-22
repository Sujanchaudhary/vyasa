import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const InterestedGuest = () => {
  return (
    <Box
      sx={{
        height: "500px",
        backgroundImage: 'url("/banner.jpeg")', // Replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontWeight: "bold",
          marginBottom: "10px",
          color: "white",
        }}
      >
        Interested in being a guest on the podcast?
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "1.2em", color: "white" }}>
        We are always looking to expand our network and connect with people to
        discuss interesting areas of research, personal experiences, and key
        perspectives on current topics in sport science.
      </Typography>
    </Box>
  );
};

export default InterestedGuest;
