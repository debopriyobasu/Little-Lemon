import { useState } from "react";

const ImageStack = ({ image1, image2 }) => {
  const [topImage, setTopImage] = useState(image1);

  const handleClick = (image) => {
    setTopImage(image);
  };

  return (
    <div className="relative w-60 h-60 md:w-72 md:h-72 md:mx-auto">
      <img
        src={topImage === image1 ? image1 : image2}
        alt="Top"
        className="absolute w-full h-full object-cover cursor-pointer rounded-md shadow-md"
        onClick={() => handleClick(topImage === image1 ? image2 : image1)}
      />
      <img
        src={topImage === image1 ? image2 : image1}
        alt="Bottom"
        className="absolute w-full h-full object-cover cursor-pointer rounded-md mt-32 ml-32 shadow-md"
        onClick={() => handleClick(topImage === image1 ? image2 : image1)}
      />
    </div>
  );
};

export default ImageStack;
