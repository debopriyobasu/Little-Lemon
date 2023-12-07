import { GiConfirmed } from "react-icons/gi";

const ConfirmedBooking = () => {
  return (
    <div className="h-screen w-full p-5 flex flex-col items-center bg-lemongreen justify-center">
      <GiConfirmed size={150} className="fill-lemonyellow" />
      <h1 className="text-karla text-4xl text-white text-center">
        Your booking has been confirmed. Thank you!
      </h1>
    </div>
  );
};

export default ConfirmedBooking;
