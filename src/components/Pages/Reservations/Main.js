import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, action) {
  return fetchAPI(new Date(action.date));
}

function Main() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed-booking");
    }
  };
  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initialTimes,
    initializeTimes
  );

  return (
    <div className="py-10">
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default Main;
