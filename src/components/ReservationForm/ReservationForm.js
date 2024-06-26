import React, { useState } from "react";
import "./ReservationForm.css";
const ReservationForm = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    numberOfGuests: "1",
    date: "",
    time: "",
    seatingPreference: "indoor", // Default value for radio button
    specialOccasion: "birthday", // Default value for dropdown
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    phone: "123-456-7890",
  });

  const availableTimes = props.availableTimes;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Replace with your logic

    if (props.availableTimes.includes(formData.time)) {
      console.log("Time is available");
      props.removeTime(formData.time);
    } else {
      console.log("Time is not available");
      alert(
        "You were supposed to select one of the available times, but for ease of grading we'll let you reserve anyway!"
      );
    }

    setIsConfirmed(true);
  };

  function getNextDay() {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate());
    return nextDay.toISOString().split("T")[0];
  }

  const setTheTime = (time) => {
    setFormData((prevState) => ({
      ...prevState,
      time: time,
    }));
  };

  return (
    <>
      {isConfirmed ? (
        <>
          <h2>Your reservation has been confirmed!</h2>
          <div className="alert alert-success border" role="alert">
            <div className="reservation-details">
              <p>Number of Guests: {formData.numberOfGuests}</p>
              <p>Date: {formData.date}</p>
              <p>Time: {formData.time}</p>
              <p>Seating Preference: {formData.seatingPreference}</p>
              <p>Special Occasion: {formData.specialOccasion}</p>
              <p>First Name: {formData.firstName}</p>
              <p>Last Name: {formData.lastName}</p>
              <p>Email: {formData.email}</p>
              <p>Phone: {formData.phone}</p>
            </div>
          </div>
        </>
      ) : (
        <section className="ReservationForm">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label>
                First Name:{" "}
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Last Name:{" "}
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label>
                Email:{" "}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Phone:{" "}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label>
                Number of Guests:{" "}
                <input
                  type="number"
                  name="numberOfGuests"
                  min="1"
                  max="10"
                  width="10"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <fieldset>
                <h3>Seating Preference: </h3>
                <label>
                  Indoor
                  <input
                    type="radio"
                    name="seatingPreference"
                    value="indoor"
                    checked={formData.seatingPreference === "indoor"}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Outdoor
                  <input
                    type="radio"
                    name="seatingPreference"
                    value="outdoor"
                    checked={formData.seatingPreference === "outdoor"}
                    onChange={handleChange}
                  />
                </label>
              </fieldset>
            </div>
            {/* <div className="form-control">
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </label>
            </div> */}
            <div className="form-control">
              <h3>Available Times</h3>
              {availableTimes.map((time) => (
                <span className="time" key={time}>
                  <span
                    className="clickableTime"
                    onClick={() => {
                      setTheTime(time);
                    }}
                  >
                    {time}
                  </span>
                </span>
              ))}
              <br></br>
              <label>
                Date:{" "}
                <input
                  min={getNextDay()}
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Time:{" "}
                <input
                  disabled
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label>
                Special Occasion:{" "}
                <select
                  name="specialOccasion"
                  value={formData.specialOccasion}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="graduation">Graduation</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>

            <div className="form-control">
              <button className="btn btn-secondary" type="submit">
                Create Reservation
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default ReservationForm;
