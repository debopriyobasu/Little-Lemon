import React from "react";
import heroImage from "../../../assets/restaurant-food.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="bg-lemongreen text-white px-3">
      <div className="grid md:grid-cols-2 gap-5 lg:container lg:mx-auto lg:max-w-screen-lg py-10">
        <div className="pb-5 lg:pb-0">
          <h1 className="text-5xl font-karla text-lemonyellow font-extrabold tracking-wide">
            Little Lemon
          </h1>
          <h3 className="text-3xl font-karla py-3">Chicago</h3>
          <p className="text-2xl font-markazi py-3">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to={"/reservations"} className="btn mt-7">
            Reserve a table
          </Link>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            alt="Hero"
            className="rounded-2xl object-cover h-[300px] md:h-80 w-full md:w-10/12 relative md:absolute mb-auto md:-mb-8 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
