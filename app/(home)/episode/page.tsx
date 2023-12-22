import EpidsodeCard from "@/components/episode/EpisodeCard";
import HeroSectionEpisode from "@/components/episode/EpisodeMain";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import React from "react";

const EpisodePage = () => {
  return (
    <Box sx={{ background: "#191919" }}>
      <HeroSectionEpisode />
      <Box sx={{ py: 8 }}>
        <Typography
          sx={{
            fontSize: "44px",
            fontWeight: "700",
            textAlign: "center",
            color: "white",
            py: 4,
          }}
        >
          Epidsodes
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "90%",
            margin: "auto",
            gap: "40px 20px",
          }}
        >
          <EpidsodeCard
            title={"On Air With Sanjay #114 - Balen Shah"}
            description={
              "A distinguished name in the Nepali rap industry, Balen is a man who leveled up Nephop game with his extraordinary rapping style and title of Second season of the Raw Barz. Structural engineer by profession but social activist by heart, he has worked on post-earthquake reconstructions and damage assessment programs all over Nepal. Creating beat-busting songs like “Marpha Ko Madira” and “Local Thito” is only the musician side of him and now he has announced his candidacy for the Mayor of Kathmandu. In this episode of On Air, we talk with him about his run for contributions to the society, Mayor, Raw Barz & Nephop, his past projects and many more."
            }
            videoId={"UQBWAuoppkw"}
          />{" "}
          <EpidsodeCard
            title={"On Air With Sanjay #265 - 4K Gaming Nepal"}
            description={
              "4K Gaming Nepal, also known as Pawan Jung Shahi Thakuri is a PUBG mobile gamer and streamer. He is best known for his humor and gameplay clips and streams."
            }
            videoId={"UQBWAuoppkw"}
          />{" "}
          <EpidsodeCard
            title={"On Air With Sanjay #167 - Wiffeyy & CR7Horaa"}
            description={
              "Wiffeyy, aka Shreya Lama Maharjan, is a PUBG streamer, recognized for her subtle finishes in the game, who has been streaming since 2019 and leads Team Wiffeyy. Whereas CR7Horaa, aka Sanjan Gautam, is a YouTube streamer and gamer, well known for his PUBG gameplay and witty personality, and has his own squad, “Team Horaa”. In this episode of On Air, we talk with them about Korean dramas, gaming as a career, owning a team, 4K gaming, gaming addiction, PUBG ban in Nepal, late night streaming, and their gaming journey."
            }
            videoId={"KRuOp1QQgfk"}
          />{" "}
          <EpidsodeCard
            title={"On Air With Sanjay #256 - Young Artists"}
            description={
              "Akash Khadka, Samir Shrestha, and Prabesh Kumar Shrestha are young enthusiastic singer/songwriters of Nepal, who have given various songs like Bhulney Chaina, Thamana Haat, and Aau Timi"
            }
            videoId={"jbaZtkhrcdc"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EpisodePage;
