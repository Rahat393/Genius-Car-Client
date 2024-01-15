import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { img, price, title, _id } = service;
  // console.log(service);
  return (
    <div>
      <img className="w-80" src={img} alt="" />
      <p className="text-center font-semibold text-xl">{title}</p>
      <p>Price: {price}</p>
      <Link to={`/services/${_id}`}>
        <button className="btn btn-success">Book now</button>
      </Link>
    </div>
  );
};

export default ServicesCard;
