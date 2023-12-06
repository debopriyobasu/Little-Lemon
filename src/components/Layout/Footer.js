import FooterLogo from "../../assets/footer-logo.png";
import { NAV_ITEMS } from "../../utils/constants";
import { RESTAURANT_CONTACT_INFO } from "../../utils/constants";
import { Link } from "react-router-dom";
import { SOCIAL_HANDLES } from "../../utils/constants";

const socialHandles = () => {
  return (
    <div className="flex gap-7 py-2">
      {SOCIAL_HANDLES.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="hover:fill-lemonyellow" size={20} />
          </a>
        );
      })}
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="w-full bg-lemongreen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-3 py-5 lg:container lg:mx-auto lg:max-w-screen-lg text-white gap-5">
        <section className="">
          <img
            src={FooterLogo}
            alt="Little Lemon Restaurant"
            width={100}
            height={100}
          />
        </section>
        <section>
          <h4 className="uppercase font-karla text-lg font-bold tracking-wider">
            sitemap
          </h4>
          <ul className="py-2">
            {Object.entries(NAV_ITEMS).map(([item, path]) => (
              <li key={item} className="py-1 hover:text-lemonyellow text-lg">
                <Link to={path} className="font-markazi">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4 className="uppercase font-karla text-lg font-bold tracking-wider">
            contact us
          </h4>
          <ul className="py-2">
            {RESTAURANT_CONTACT_INFO.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-x-1.5 py-1 font-markazi text-lg"
              >
                {item.icon} {item.info}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4 className="uppercase font-karla text-lg font-bold tracking-wider">
            connect with us
          </h4>
          {socialHandles()}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
