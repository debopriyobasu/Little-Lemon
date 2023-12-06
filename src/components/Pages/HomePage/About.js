import ImageStack from "./ImageStack";
import image1 from "../../../assets/chefs-mario-and-adrian_a.jpeg";
import image2 from "../../../assets/chefs-mario-and-adrian_b.jpg";
const About = () => {
  return (
    <div className="bg-white text-lemongreen">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:container lg:mx-auto lg:max-w-screen-lg pt-20 pb-40 gap-10">
        <div>
          <h2 className="text-4xl font-extrabold">About Little Lemon</h2>
          <h3 className="text-3xl py-3">Chicago</h3>
          <p className="font-markazi text-xl">
            Nestled in the heart of Chicago, the Little Lemon Restaurant is a
            culinary gem that offers an authentic Mediterranean experience. The
            dynamic duo, Adrian and Mario, have poured their heart and soul into
            this quaint eatery, infusing every dish with a taste of their
            heritage. Their passion for Mediterranean cuisine and commitment to
            their craft is evident in the vibrant flavors and meticulously
            crafted dishes that grace the tables of Little Lemon. From the
            moment you step through the door, you're not just a customer -
            you're family. So, come join us at Little Lemon, where every meal is
            a celebration of food, family, and the flavors of the Mediterranean.
          </p>
        </div>
        <ImageStack image1={image1} image2={image2} />
      </div>
    </div>
  );
};

export default About;
