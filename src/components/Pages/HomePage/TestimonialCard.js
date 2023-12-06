import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const starRating = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return stars;
};
const TestimonialCard = ({ name, imgUrl, rating, review }) => {
  return (
    <article className="rounded-lg bg-lemonwhite text-lemongreen shadow-md flex flex-col p-3">
      <h3 className="font-bold text-xl flex pb-3">{starRating(rating)}</h3>
      <div className="flex items-center gap-3">
        <img
          src={imgUrl}
          alt={name}
          className="rounded-full object-cover w-2/4 mx-auto flex-1"
        />
        <h3 className="font-extrabold text-xl font-karla flex-1">{name}</h3>
      </div>

      <div className="flex flex-col justify-between h-full p-4">
        <p className="text-lg text-center font-markazi">
          &ldquo;{review}&rdquo;
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;
