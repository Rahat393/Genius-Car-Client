import React from "react";

const ServicesCard = ({ service }) => {
  const { img, price, title } = service;
  console.log(service);
  return <div>{title}</div>;
};

export default ServicesCard;
