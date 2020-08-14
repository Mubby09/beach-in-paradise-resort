import React, { Component } from "react";
import Title from "../components/Title";
import {
  FaShuttleVan,
  FaBeer,
  FaHiking,
  FaCocktail,
  FaGolfBall
} from "react-icons/fa";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaShuttleVan />,
        title: " Free daily shuttle",
        info:
          "You do not have to walk all the way into the woods or into town as our free shuttle vans are always on standby to take you around the entire premises."
      },
      {
        icon: <FaBeer />,
        title: "Free Beers at night",
        info:
          "Whatever type of beer you like, be rest assured that we've got you covered."
      },
      {
        icon: <FaHiking />,
        title: "Free Hiking",
        info:
          "You will be guided by the world leading professionals during your hiking experience at the resort."
      },
      {
        icon: <FaCocktail />,
        title: "World's Best Cocktails",
        info:
          "We provide to you the creme de la creme of the cocktails in the world for free at night as you relax and enjoy yourself."
      },
      {
        icon: <FaGolfBall />,
        title: "Golf course",
        info:
          "Take a walk into our state of the art golf course and make the most of your time with us"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
