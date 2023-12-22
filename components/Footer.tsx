import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import React from "react";
import SocialMediaIcons from "./home/SocialMediaIcons";

const navItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Episode",
    link: "/",
  },
  {
    text: "About",
    link: "/",
  },
  {
    text: "Contact",
    link: "/",
  },
];

const Footer = () => {
  return (
    <Box sx={{ background: "black", py: 10 }}>
      <Box sx={{ width: "80%", margin: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <picture>
                <img src="/logo.jpeg" alt="" />
              </picture>
              <SocialMediaIcons />
            </Box>
          </Grid>

          <Grid item md={6}>
            <Typography
              color={"white"}
              pb={2}
              fontWeight={700}
              fontSize={"22px"}
            >
              Pages
            </Typography>
            <Box
              sx={{ display: "flex", gap: 3, flexDirection: "column", pb: 2 }}
            >
              {navItems.map((nav) => {
                return (
                  <Link
                    href={nav.link}
                    key={nav.text}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    {nav.text}
                  </Link>
                );
              })}
            </Box>
            <Typography color={"white"} fontWeight={700}>
              Disclaimer:
            </Typography>
            <Typography color={"white"}>
              All views and opinions expressed on this site are those of the
              hosts, guests, and authors and are not affiliated with any
              institution.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
