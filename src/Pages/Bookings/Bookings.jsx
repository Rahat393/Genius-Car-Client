import React, { useContext, useEffect, useState } from "react";
import BookingsCard from "../../components/BookingsCard";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  //   const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center font-semibold text-3xl  ">
        All of my bookings {bookings?.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Favorite Color</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <BookingsCard
                key={booking._id}
                setBookings={setBookings}
                bookings={bookings}
                booking={booking}
              ></BookingsCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
