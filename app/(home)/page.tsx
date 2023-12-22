import CardList from "@/components/home/CardList";
import InterestedGuest from "@/components/home/InterestedGuest";
import LatestContent from "@/components/home/LatestContent";
import MainSection from "@/components/home/MainSection";
import PopularGuest from "@/components/home/PopularGuest";
import RecentGuest from "@/components/home/RecentGuest";
import React from "react";

const page = () => {
  return (
    <>
      <MainSection />
      <LatestContent />
      <PopularGuest />
      <RecentGuest />
      <InterestedGuest />
    </>
  );
};

export default page;
