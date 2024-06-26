// ReservationForm.test.js

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

test("load initial state works", async () => {
  submitAPI({ date: "2024-01-01", time: "1730" });
  let reservation = localStorage.getItem("reservation-2024-01-01-1730");
  expect(reservation).toBeDefined();
});
