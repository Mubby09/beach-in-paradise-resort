import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero hero="errorBanner">
      <Banner title="404" subtitle="PAGE NOT FOUND">
        <Link to="/" className="btn-primary">
          GO BACK TO HOMEPAGE
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
