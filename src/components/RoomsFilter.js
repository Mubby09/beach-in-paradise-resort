import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";

const RoomsFilter = () => {
  const context = useContext(RoomContext);
  console.log(context);

  return <div>hello from Room filter</div>;
};

export default RoomsFilter;
