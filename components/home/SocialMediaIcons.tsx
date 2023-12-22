import React from "react";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const SocialMediaIcons = () => {
  return (
    <div>
      <Box sx={{ marginTop: "20px", display: "flex", gap: 2 }}>
        <Link
          href={"https://www.facebook.com/vyasamedianetwork"}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <IconButton sx={{ bgcolor: "red", borderRadius: "50%" }}>
            <Facebook sx={{ color: "white" }} />
          </IconButton>
        </Link>

        <Link
          href={"https://www.instagram.com/vyasa.media/"}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <IconButton sx={{ bgcolor: "red", borderRadius: "50%" }}>
            <Instagram sx={{ color: "white" }} />
          </IconButton>{" "}
        </Link>
        <Link
          href={"https://www.instagram.com/vyasa.media/"}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <IconButton sx={{ bgcolor: "red", borderRadius: "50%" }}>
            <YouTube sx={{ color: "white" }} />
          </IconButton>
        </Link>
      </Box>
    </div>
  );
};

export default SocialMediaIcons;
