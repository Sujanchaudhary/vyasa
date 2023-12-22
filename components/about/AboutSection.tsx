import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HeroSectionAbout = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/o.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white", // Change the text color to your preference
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography sx={{ borderBottom: "1px solid white", fontSize:'34px', fontWeight:'700' }}>
        About
      </Typography>
    </Box>
  );
};

export default HeroSectionAbout;
