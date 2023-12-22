import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function HomeCard({ title, description, dateTime }: any) {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: "#101010", color: "red" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dateTime}
          </Typography>
          <Typography color="white">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
