import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-full p-5 flex flex-col items-center bg-lemongreen justify-center">
      <MdError size={100} className="fill-lemonred animate-pulse" />
      <h1 className="text-karla text-4xl text-white text-center py-3">
        The page you are looking for does not exist or has been moved.
      </h1>
      <Link to="/" className="btn py-3">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
