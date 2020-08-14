import React, { Component } from "react";
import defaultBcg from "../images/room-3.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";

class SingleRoomPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;
  render() {
    return <div>single room page</div>;
  }
}

export default SingleRoomPage;
