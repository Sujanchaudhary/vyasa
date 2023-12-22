import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button  from "@mui/material/Button";

const MainSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${"https://source.unsplash.com/random"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        backgroundAttachment:'fixed'
      }}
    >
      <Box sx={{ width: "80%", margin: "0 auto" }}>
        <Box
          sx={{
            maxWidth: "430px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "40px", wordWrap: "break-word", fontWeight: "700" }}
          >
            Science and sport, with those who play.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "13px" }}>
            Connecting theory and practice, host Mike Jorgensen uses the athlete
            experience as a platform to explore current topics in sport science.
          </Typography>
          <Button
            sx={{
              background: "#FF4742",
              border: "1px solid #FF4742",
              borderRadius: "6px",
              boxShadow: "rgba(0, 0, 0, 0.1) 1px 2px 4px",
              boxSizing: "border-box",
              color: "#FFFFFF",
              cursor: "pointer",
              display: "inline-block",
              fontFamily:
                'nunito, roboto, proxima-nova, "proxima nova", sans-serif',
              fontSize: "16px",
              fontWeight: 800,
              lineHeight: "16px",
              minHeight: "40px",
              outline: 0,
              padding: "12px 14px",
              textAlign: "center",
              textRendering: "geometricprecision",
              textTransform: "none",
              userSelect: "none",
              WebkitUserSelect: "none",
              touchAction: "manipulation",
              verticalAlign: "middle",
              width:'200px',
              "&:hover, &:active": {
                backgroundColor: "initial",
                backgroundPosition: "0 0",
                color: "#FF4742",
              },
              "&:active": {
                opacity: 0.5,
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainSection;
