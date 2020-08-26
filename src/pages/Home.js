import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";

const Home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="LUXURIOUS ROOMS"
          subtitle="DELUXE ROOMS STARTING AT $299"
        ></Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </div>
  );
};

export default Home;
