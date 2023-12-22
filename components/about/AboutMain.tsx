import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import React from "react";
import SocialMediaIcons from "./SanjaySocialMedia";

const AboutMain = () => {
  return (
    <Box sx={{ background: "#191919", py: 10 }}>
      {/* <Typography
        color="white"
        align="center"
        sx={{ fontSize: "44px", fontWeight: "700", py:3 }}
      >
        Recent Guest
      </Typography> */}
      <Box
        sx={{
          width: "70%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box
          sx={{
            maxWidth: "800px",
            maxHeight: "800px",
            width: "100%",
            height: "100%",
            overflow: "hidden", // Add overflow hidden to prevent content overflow
          }}
        >
          <picture
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <img
              src="/sanjay.jpeg"
              alt=""
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
          </picture>
        </Box>
        <Typography
          sx={{ fontSize: "22px", fontWeight: "700", color: "wheat" }}
        >
          Sanjay Silwal
        </Typography>
        <Typography variant="subtitle2" color={"white"}>
          Born and raised in Kathmandu, Sanjay Gupta, also known as, Sanjay
          Silwal Gupta is a nationwide acclaimed actor, radio and television
          presenter, Master Of Ceremonies, podcaster and, content creator based
          in Kathmandu, Nepal. Sanjay uses his platforms to inspire and motivate
          people pursue their passion on-stage, off-stage and everywhere in
          between. He has been proactive in the media since 2008 and has been
          providing with notable expertise to various brands and events of
          Nepal. Sanjay’s work can be found in number of outlets such as cinema,
          radio, television, and other major social media platforms.
        </Typography>
        <SocialMediaIcons />
      </Box>
    </Box>
  );
};

export default AboutMain;
