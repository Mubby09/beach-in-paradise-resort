import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";

//to get all unique values

const getUniqueValue = (roomsParameters, value) => {
  return [
    ...new Set(roomsParameters.map((roomsParameter) => roomsParameter[value]))
  ];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);

  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    handleChange,
    breakfast,
    pets
  } = context;

  let types = getUniqueValue(rooms, "type");
  types = ["all", ...types];

  types = types.map((type, index) => (
    <option key={index} value={type}>
      {type}
    </option>
  ));

  let capacities = getUniqueValue(rooms, "capacity");

  capacities = capacities.map((capacity, index) => (
    <option key={index} value={capacity}>
      {capacity}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {capacities}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price : {price}</label>
          <input
            type="range"
            name="price"
            id="price"
            value={price}
            className="form-control"
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pets">Pets</label>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              value={pets}
              checked={pets}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="breakfast">Breakfast</label>
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                value={breakfast}
                checked={breakfast}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* end of select type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
