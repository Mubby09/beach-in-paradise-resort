import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";

const Home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="LUXURIOUS ROOMS"
          subtitle="DELUXE ROOMS STARTING AT $299"
        >
          <Link to="/roomspage" className="btn-primary">
            GO TO ROOMS
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </div>
  );
};

export default Home;
