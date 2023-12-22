import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import React from "react";

const RecentGuest = () => {
  return (
    <Box sx={{ background: "#191919", py: 10 }}>
      <Typography
        color="white"
        align="center"
        sx={{ fontSize: "44px", fontWeight: "700", py:3 }}
      >
        Recent Guest
      </Typography>
      <Box
        sx={{
          width: "70%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap:3
        }}
      >
        <picture>
          <img src="/amun.jpeg" alt="" />
        </picture>
        <Typography sx={{fontSize:'22px', fontWeight:'700', color:'wheat'}}>Aman Thapa</Typography>
        <Typography variant="subtitle2" color={'white'}>
          Amun Thapa is the co-founder of SastoDeal.com, one of the most popular
          eCommerce sites in Nepal. He started SastoDeal from a rented garage in
          2011 and has never looked back since then. In 2014, he co-founded
          another company, Anthropose, a social-good company that aspires to
          recognize and identify social problems in the developing world and
          create viable, sustainable, and scalable entrepreneurial solutions to
          counter these. He is also the co-owner of Chhahari Production and
          Sasto Book. He holds a Bachelors degree in Business Administration
          (Marketing and Customer Psychology) from the University of Central
          Oklahoma.
        </Typography>
      </Box>
    </Box>
  );
};

export default RecentGuest;
