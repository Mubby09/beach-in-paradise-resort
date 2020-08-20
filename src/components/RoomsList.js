import React from "react";
import Room from "../components/Room";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        Unfortunately, no rooms match your filtered parameter..Try something
        else!
      </div>
    );
  }
  return (
    <section className="rooms-list">
      <div className="roomslist-center">
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
