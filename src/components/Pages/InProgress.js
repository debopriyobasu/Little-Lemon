import { FaPersonDigging } from "react-icons/fa6";

const InProgress = () => {
  return (
    <div className="h-screen w-full p-5 flex flex-col items-center bg-lemongreen justify-center">
      <FaPersonDigging size={150} className="fill-lemonyellow animate-pulse" />
      <h1 className="text-karla text-5xl text-white">
        This page is under construction
      </h1>
    </div>
  );
};

export default InProgress;
