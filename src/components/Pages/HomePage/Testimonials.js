import TestimonialCard from "./TestimonialCard";
import { TESTIMONIAL_DATA } from "../../../utils/constants";
const Testimonials = () => {
  return (
    <div className="bg-lemongreen text-white px-3">
      <div className="lg:container lg:mx-auto lg:max-w-screen-lg py-5">
        <h2 className="text-4xl font-extrabold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
          {TESTIMONIAL_DATA.map((person, index) => (
            <TestimonialCard
              key={index}
              name={person.name}
              imgUrl={person.imgUrl}
              rating={person.rating}
              review={person.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
