import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import { menuList } from "../../../utils/constants";
const Specials = () => {
  return (
    <div className="bg-white text-lemongreen px-3">
      <div className="lg:container lg:mx-auto lg:max-w-screen-lg pt-5 pb-5 md:pt-16">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-extrabold">Specials</h2>
          <Link to={"/order-online"} className="btn">
            Online Menu
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
          {menuList.map((item, index) => (
            <MenuCard
              key={index}
              name={item.name}
              price={item.price}
              description={item.description}
              imgUrl={item.imgURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specials;
