import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingsCard from "../../components/BookingsCard";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          // todo: logOut then navigate
          navigate("/");
        }
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
              <th>Status</th>
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
