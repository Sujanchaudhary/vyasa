import React from "react";
import { Box, Typography } from "@mui/material";

const VideoBackground = ({ videoId, typographyText }: any) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          background: `url(${"https://source.unsplash.com/random"})`,
          height:'100%',
          width:'100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          {typographyText}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoBackground;
