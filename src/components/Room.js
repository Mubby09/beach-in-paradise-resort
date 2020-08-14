import React from "react";
import { Link } from "react-router-dom";
import ImageOnError from "../images/room-2.jpeg";
import PropTypes from "prop-types";

const Room = ({ room }) => {
  console.log(room);
  const { name, images, price, slug } = room;
  return (
    <article className="room">
      <h6 className="room-info">{name}</h6>
      <div className="img-container">
        <img src={images[0] || ImageOnError} alt="single-room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>Per/Night</p>
        </div>
        <Link to={`/roomspage/${slug}`} className="btn-primary room-link">
          FEATURES
        </Link>
      </div>
    </article>
  );
};

export default Room;

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
