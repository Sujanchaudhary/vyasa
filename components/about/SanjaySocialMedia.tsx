import React from "react";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Facebook, Twitter, Instagram, YouTube, LinkTwoTone } from "@mui/icons-material";

const SocialMediaIcons = () => {
  return (
    <div>
      <Box sx={{ marginTop: "20px", display: "flex", gap: 2 }}>
        <Link
          href={"https://www.facebook.com/becomingsanjay"}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <IconButton sx={{ bgcolor: "red", borderRadius: "50%" }}>
            <Facebook sx={{ color: "white" }} />
          </IconButton>
        </Link>

        <Link
          href={"https://www.instagram.com/becomingsanjay/"}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <IconButton sx={{ bgcolor: "red", borderRadius: "50%" }}>
            <Instagram sx={{ color: "white" }} />
          </IconButton>{" "}
        </Link>
       
        <Link
          href={"https://www.youtube.com/user/becomingsanjay"}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <IconButton sx={{ bgcolor: "red", borderRadius: "50%" }}>
            <YouTube sx={{ color: "white" }} />
          </IconButton>
        </Link> <Link
          href={"https://www.becomingsanjay.com/"}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <IconButton sx={{ bgcolor: "red", borderRadius: "50%" }}>
            <LinkTwoTone sx={{ color: "white" }} />
          </IconButton>
        </Link>
      </Box>
    </div>
  );
};

export default SocialMediaIcons;
