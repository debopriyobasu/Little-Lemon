import { FaMotorcycle } from "react-icons/fa6";
import { Link } from "react-router-dom";
const MenuCard = ({ name, price, description, imgUrl, index }) => {
  return (
    <article className="rounded-lg bg-lemonwhite shadow-md flex flex-col overflow-hidden">
      <img src={imgUrl} alt={name} className="h-48 w-full object-cover" />
      <div className="flex flex-col justify-between h-full p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-extrabold text-xl">{name}</h3>
          <h3 className="text-xl text-lemonred">{price}</h3>
        </div>
        <p className="font-markazi text-xl mb-3">{description}</p>
        <Link
          to="/order-online"
          className="flex items-center gap-3 font-extrabold font-markazi text-xl hover:text-lemonyellow hover:fill-lemonyellow"
        >
          Order a delivery <FaMotorcycle />
        </Link>
      </div>
    </article>
  );
};

export default MenuCard;
