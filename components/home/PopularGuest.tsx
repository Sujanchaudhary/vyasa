import React from "react";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";

const PopularGuest = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://source.unsplash.com/random"})`, // Replace with the path to your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: {
            md: '100vh',
            sm: '150vh',
            xs: "160vh"
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      {/* Left side with content and social media icons */}
      <Box
        sx={{
          width: {
            md: "80%",
            sm: "90%",
            xs: "95%",
          },
          margin: "0 auto",
          bgcolor: "rgb(25, 25, 25, 0.5)",
          p: 2,
        }}
      >
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid item md={6}>
            <Box
              sx={{
                padding: "20px",
                borderRadius: "8px",
                width: "100%",

                display: "flex",
                gap: 3,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                align="center"
                variant="h4"
                color="white"
                sx={{ fontWeight: 700, fontSize: "36px" }}
              >
                Social Media
              </Typography>

              <Typography
                align="center"
                variant="body1"
                sx={{
                  color: "#dcdcdc",
                  wordBreak: "break-word",
                  width: "270px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Follow our social media channels for updates and new content!
              </Typography>

              <Typography sx={{ color: "white", textAlign: "center" }}>
                #becomingsanjay
              </Typography>
              {/* Social media icons */}
              <SocialMediaIcons />
            </Box>
            <Box>
              <iframe
                src="https://www.youtube.com/embed/UQBWAuoppkw?si=8TUligiDHEQfyfdz"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                style={{ border: "none", height: "300px", width: "100%" }}
              ></iframe>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  maxWidth: "500px",
                  maxHeight: "400px",
                }}
              >
                <picture>
                  <img
                    src="/logo.jpeg" // Replace with the path to your other image
                    alt="Other Image"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                      objectFit: "contain",
                    }}
                  />
                </picture>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Right side with image */}
    </Box>
  );
};

export default PopularGuest;
