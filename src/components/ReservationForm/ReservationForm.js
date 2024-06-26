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
    if (name === "date" && value) {
      console.log("use fetchAPI here");
      console.log(value);
      props.setDate(new Date(value));
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitAPI = function (formData) {
    let doesAlreadyExist = localStorage.getItem(
      "reservation-" + formData.date + "-" + formData.time
    );

    if (doesAlreadyExist) {
      console.log("reservation already exists");
      alert(
        "Your reservation could not be completed, there is a stored reservation for this date / time. Please select a different time."
      );
      return false;
    }

    console.log("reservation-" + formData.date + "-" + formData.time);
    localStorage.setItem(
      "reservation-" + formData.date + "-" + formData.time,
      JSON.stringify(formData)
    );
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Replace with your logic

    let canSubmit = submitAPI(formData);

    if (!canSubmit) {
      if (window.confirm("Would you like to clear the stored reservations?")) {
        localStorage.clear();
      }
      return;
    }

    if (props.availableTimes.includes(formData.time)) {
      console.log("Time is available");
      props.removeTime(formData.time, formData.date);
      //alert("Your reservation was completed");
    } else {
      console.log("Time is not available");
      alert(
        "Your reservation could not be completed. The selected time is no longer available. Please select a different time."
      );
      return;
    }

    setIsConfirmed(true);
  };

  function getNextDay() {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    return nextDay.toISOString().split("T")[0];
  }

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
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Number of Guests</th>
                <th>Date</th>
                <th>Time</th>
                <th>Seating Preference</th>
                <th>Special Occasion</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Number of Guests: {formData.numberOfGuests}</td>
                <td>Date: {formData.date}</td>
                <td>Time: {formData.time}</td>
                <td>Seating Preference: {formData.seatingPreference}</td>
                <td>Special Occasion: {formData.specialOccasion}</td>
                <td>First Name: {formData.firstName}</td>
                <td>Last Name: {formData.lastName}</td>
                <td>Email: {formData.email}</td>
                <td>Phone: {formData.phone}</td>
              </tr>
            </tbody>
          </table>
          After the booking, here are the remaining Available Times:
          {props.availableTimes.map((time) => (
            <span className="time" key={time}>
              <span className="clickableTime">{time}</span>
            </span>
          ))}
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
              {/* <h3>Available Times</h3>
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
              <br></br> */}
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
                <select
                  required
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
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
