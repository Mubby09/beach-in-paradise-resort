import React, { Component } from "react";
import defaultBcg from "../images/room-3.jpeg";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/styledHero";

class SingleRoomPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No rooms could be found</h3>
          <Link to="/roomspage" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      extras,
      breakfast,
      pets,
      images,
      info,
      price
    } = room;
    return (
      <div>
        <StyledHero bgImg={images[0] || defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/roomspage" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {images
              .filter((img, index) => index < 3)
              .map((img, index) => (
                <img key={index} src={img} alt={name} />
              ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>{info}</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>Pets : {pets ? "Pets allowed" : "No pets allowed"}</h6>
              <h6>
                {breakfast ? " Free Breakfast service" : "No breakfast service"}
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((extra, index) => {
              return <li key={index}>{extra}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default SingleRoomPage;
