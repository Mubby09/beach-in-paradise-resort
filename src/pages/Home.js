import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";

const Home = ({ title, subtitle }) => {
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
    </div>
  );
};

export default Home;
