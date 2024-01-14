import React, { useEffect, useState } from "react";
import ServicesCard from "../../../components/ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        // console.log(data);
      });
  }, []);
  return (
    <div>
      <p>length: {services.length}</p>
      <h1 className="text-center text-3xl font-semibold">Our Service Area</h1>
      {services.map((service) => (
        <ServicesCard key={service._id} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
