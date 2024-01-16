import React from "react";

const BookingsCard = ({ booking, setBookings, bookings }) => {
  const { img, date, price, _id, status } = booking;
  const handleDelete = (id) => {
    console.log(id);
    const proceed = confirm("Are you sure you want to delete this ");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete success");
            const remaining = bookings.filter((book) => book._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-24 h-20">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>{price}</td>
      <td>{date}</td>
      <td>
        {status === "confirm" ? (
          "Confirmed"
        ) : (
          <button onClick={() => handleUpdate(_id)}>Please Confirm</button>
        )}
      </td>
      <td>
        {" "}
        <button
          onClick={() => handleDelete(_id)}
          className="bg-slate-500 hover:bg-gray-800 p-3 rounded-md text-white"
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default BookingsCard;
