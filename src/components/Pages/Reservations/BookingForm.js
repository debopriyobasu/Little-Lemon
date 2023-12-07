import React, { useState, useEffect } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [time, setTime] = useState(availableTimes[0]);
  const [people, setPeople] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validateForm();
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { date, time };
    submitForm(formData);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    validateForm();
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
    validateForm();
  };

  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
    validateForm();
  };
  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
    validateForm();
  };
  const validateForm = () => {
    if (date && time && people && occasion) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <form className="grid max-w-[300px] gap-5 mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        className="border-2 rounded-md p-2 border-gray-300 focus:border-lemongreen focus:outline-none focus:ring-0"
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required
        className="border-2 rounded-md p-2 border-gray-300 focus:border-lemongreen focus:outline-none focus:ring-0"
        onChange={handleTimeChange}
      >
        {availableTimes.map((time, index) => (
          <option key={index}>{time}</option>
        ))}
      </select>
      <label htmlFor="res-people">Number of people</label>
      <input
        type="number"
        id="res-people"
        min="1"
        max="10"
        value={people}
        required
        className="border-2 rounded-md p-2 border-gray-300 focus:border-lemongreen focus:outline-none focus:ring-0"
        onChange={handlePeopleChange}
      />
      <label htmlFor="res-occasion">Choose Occasion</label>
      <select
        id="res-occasion"
        value={occasion}
        required
        className="border-2 rounded-md p-2 border-gray-300 focus:border-lemongreen focus:outline-none focus:ring-0"
        onChange={handleOccasionChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <button type="submit" disabled={!isValid} className="btn">
        Submit
      </button>
    </form>
  );
}

export default BookingForm;
