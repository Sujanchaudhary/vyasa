"use client";
import React from "react";
import HomeCard from "./HomeCard";

const CardList = () => {
  const dummyData = [
    {
      id: 1,
      title: "Introduction to Podcasting",
      description:
        "In this episode, we introduce the world of podcasting and discuss its history and evolution.",
      dateTime: "2023-03-01 10:00 AM",
    },
    {
      id: 2,
      title: "Interview with a Tech Innovator",
      description:
        "Join us as we interview a prominent tech innovator and discuss their journey and insights into the industry.",
      dateTime: "2023-03-05 2:30 PM",
    },
    {
      id: 3,
      title: "Exploring the Future of Artificial Intelligence",
      description:
        "In this episode, we delve into the future of AI, its potential impact on various industries, and ethical considerations.",
      dateTime: "2023-03-10 1:00 PM",
    },
    // Add more podcast episodes as needed
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {dummyData.map((data) => (
        <HomeCard key={data.id} {...data} />
      ))}
    </div>
  );
};

export default CardList;
