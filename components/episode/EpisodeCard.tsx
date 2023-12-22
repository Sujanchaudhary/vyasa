import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const EpidsodeCard = ({ title, description, videoId }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 400,
        // margin: "auto",
      }}
    >
      <Card
        sx={{
          bgcolor: "#101010",
          color: "red",
        }}
      >
        {/* Card Content */}
        <CardContent>
          {/* Title */}
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            color="white"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 3,
              height: "100px",
            }}
          >
            {description}
          </Typography>
        </CardContent>

        {/* YouTube Video */}
        <Box
          component={Paper}
          elevation={0}
          sx={{
            position: "relative",
            overflow: "hidden",
            paddingTop: "56.25%", // Aspect ratio 16:9
          }}
        >
          <iframe
            title="YouTube Video"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default EpidsodeCard;
