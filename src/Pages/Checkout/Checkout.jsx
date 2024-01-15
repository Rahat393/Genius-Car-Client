import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const services = useLoaderData();
  //   console.log(services);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;
    const orderInfo = { name, email, price, date, img: services.img };
    console.log(orderInfo);
    // console.log(img);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("booking success");
        }
      });
  };

  return (
    <div>
      <p className="text-center text-3xl">
        Booking for : <span className="font-semibold">{services.title}</span>
      </p>

      <form onSubmit={handleSubmit} className="card-body">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user ? user.displayName : "Unknown Person"}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="number"
              defaultValue={services.price}
              className="input input-bordered"
              name="price"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              defaultValue={new Date()}
              name="date"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            type="submit"
            value={"Place Order"}
            className="btn btn-primary"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
<p>book this: </p>;
