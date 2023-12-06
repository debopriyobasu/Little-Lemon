import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import greekSaladImage from "../assets/greek-salad.jpg";
import bruschettaImage from "../assets/bruschetta.jpg";
import lemonDessertImage from "../assets/lemon-dessert.jpg";
import testimonialSecond from "../assets/pexels-tim-douglas-6567336.jpg";
import testimonialFirst from "../assets/pexels-apunto-group-agencia-de-publicidad-7752810.jpg";
import testimonialFourth from "../assets/pexels-monstera-production-5876513.jpg";
import testimonialThird from "../assets/pexels-tima-miroshnichenko-5452201.jpg";
export const NAV_ITEMS = {
  Home: "/",
  About: "/about",
  Menu: "/menu",
  Reservations: "/reservations",
  "Order Online": "/order-online",
  Login: "/login",
};
export const SOCIAL_HANDLES = [
  {
    icon: FaFacebookF,
    url: "https://facebook.com",
  },
  {
    icon: FaTwitter,
    url: "https://twitter.com",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com",
  },
  {
    icon: FaYoutube,
    url: "https://youtube.com",
  },
];
export const RESTAURANT_CONTACT_INFO = [
  {
    icon: <FaLocationDot />,
    info: "123 Lemon Lane, Chicago, IL 60601",
  },
  {
    icon: <FaPhone />,
    info: "(312) 555-1234",
  },
  {
    icon: <TbMailFilled />,
    info: "info@littlelemonchicago.com",
  },
];
export const menuList = [
  {
    name: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    imgURL: greekSaladImage,
  },
  {
    name: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    imgURL: bruschettaImage,
  },
  {
    name: "Lemon Dessert",
    price: 6.99,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    imgURL: lemonDessertImage,
  },
];
export const TESTIMONIAL_DATA = [
  {
    name: "John Doe",
    imgUrl: testimonialFirst,
    rating: 4.5,
    review: "Great service! I'm very satisfied with my purchase.",
  },
  {
    name: "Jane Smith",
    imgUrl: testimonialSecond,
    rating: 5,
    review: "Excellent product quality. Will definitely buy again!",
  },
  {
    name: "Alice Johnson",
    imgUrl: testimonialThird,
    rating: 4,
    review: "Good value for money. Fast delivery.",
  },
  {
    name: "Bob Williams",
    imgUrl: testimonialFourth,
    rating: 4.7,
    review: "Impressive customer service. Highly recommended.",
  },
];
