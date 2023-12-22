"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import SliderSection from "./Slider";
import CardList from "./CardList";

const LatestContent = () => {
  return (
    <Box sx={{ background: "#191919", py: 5 }}>
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
            py: 3,
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          Latest Content
        </Typography>
        <Box sx={{ width: {
          md: "75%", sm: '90%', xs: '90%'
        }, margin: "0 auto", }}>
          <SliderSection />
        </Box>
        <Box sx={{ py: 4 }}>
          <CardList />
        </Box>
      </Box>
    </Box>
  );
};

export default LatestContent;
