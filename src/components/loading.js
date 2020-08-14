import React from "react";
import Giphy from "../images/gif/giphy.gif";

const loading = () => {
  return (
    <div className="loading">
      <h4>Rooms data loading...</h4>
      <img src={Giphy} alt="" />
    </div>
  );
};

export default loading;
