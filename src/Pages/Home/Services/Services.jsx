import React, { useEffect, useRef, useState } from "react";
import ServicesCard from "../../../components/ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        // console.log(data);
      });
  }, [asc, search]);
  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };
  return (
    <div>
      <p>length: {services.length}</p>
      <h1 className="text-center text-3xl font-semibold">Our Service Area</h1>
      <div className="join">
        <div>
          <div>
            <input
              ref={searchRef}
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="indicator">
          <button onClick={handleSearch} className="btn join-item">
            Search
          </button>
        </div>
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary text-center mx-auto"
          onClick={() => setAsc(!asc)}
        >
          {asc ? "Price high to low" : "Price low to high "}
        </button>
      </div>
      <div className="lg:grid grid-cols-3">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
