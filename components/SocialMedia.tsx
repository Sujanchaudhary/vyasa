import React from "react";
import Box from "@mui/material/Box";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <Box
      sx={{
        display: { md: "flex", sm: "none", xs: "none" },
        // justifyContent: 'space-between',
        width: "200px", // You can adjust the width according to your needs
        ml: 4,
        gap: 2,
        mt: 1,
      }}
    >
      <Link
        href={"https://www.facebook.com/vyasamedianetwork"}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <Facebook color="error" />
      </Link>

      <Link
        href={"https://www.instagram.com/vyasa.media/"}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <Instagram color="error" />
      </Link>

      {/* <Twitter color="error" /> */}
      <Link
        href={"https://www.instagram.com/vyasa.media/"}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <YouTube color="error" />
      </Link>
    </Box>
  );
};

export default SocialMediaIcons;
