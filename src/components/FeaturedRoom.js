import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "../components/loading";
import Room from "../components/Room";
import Title from "../components/Title";

class FeaturedRoom extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
export default FeaturedRoom;
