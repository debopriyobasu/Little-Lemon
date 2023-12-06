import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
const Specials = () => {
  return (
    <div className="bg-white text-lemongreen px-3">
      <div className="lg:container lg:mx-auto lg:max-w-screen-lg pt-5 md:pt-16">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">Specials</h2>
          <Link to={"/order-online"} className="btn">
            Online Menu
          </Link>
        </div>
        <MenuCard />
      </div>
    </div>
  );
};

export default Specials;
