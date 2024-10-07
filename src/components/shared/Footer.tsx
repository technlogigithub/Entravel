
import { IconCheckedCircle } from "../iocns/Icons";
import { Link } from "react-router-dom";
import { IconBrandDiscordFilled, IconBrandTelegram, IconBrandX } from "@tabler/icons-react";

const menuLinks = [
    {
        id: 1,
        label: "Contact us",
        url: "/contact-us",
    },
    {
        id: 2,
        label: "Privacy policy",
        url: "/privacy-policy",
    },
    {
        id: 3,
        label: "Terms and Conditions",
        url: "/terms-and-conditions",
    },
]
const menuSecondLinks = [
    {
        id: 1,
        label: "FAQ & Docs",
        url: "/faq",
    },
    {
        id: 2,
        label: "Blog",
        url: "/blog",
    }
]

const socialLinks = [
    {
        id: 1,
        icon: <IconBrandX />,
        url: "/",
    },
    {
        id: 2,
        icon: <IconBrandTelegram />,
        url: "/",
    },
    {
        id: 3,
        icon: <IconBrandDiscordFilled />,
        url: "/",
    }
]
const Footer = () => {
  return (
    <div className="px-12 py-20">
      <div className="flex justify-between">
        <div className="pr-4">
          <Link to="/">
            <IconCheckedCircle />
          </Link>
          <p className="pt-8 font-normal">
            A truly revolutionary hotel booking concept.
          </p>
        </div>
        {/* Right Section */}
        <div className="flex gap-8 lg:gap-20">
            <ul>
                {menuLinks.map((item) => (
                    <li key={item.id} className="pb-4 last:pb-0"><Link to={item.url} className="text-base font-medium hover:text-blue">{item.label}</Link></li>
                ))}
            </ul>
            <ul>
                {menuSecondLinks.map((item) => (
                    <li key={item.id} className="pb-4 last:pb-0"><Link to={item.url} className="text-base font-medium hover:text-blue">{item.label}</Link></li>
                ))}
            </ul>
            <ul className="flex gap-7">
                {socialLinks.map((item) => (
                    <li key={item.id} className="pb-4 last:pb-0"><Link to={item.url} className="w-6 h-6 text-base font-medium hover:text-blue">{item.icon}</Link></li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
