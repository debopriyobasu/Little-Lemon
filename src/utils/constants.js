import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

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
