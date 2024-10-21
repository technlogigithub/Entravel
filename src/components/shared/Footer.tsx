
import { IconCheckedCircle } from "../iocns/Icons";
import { Link } from "react-router-dom";
import { IconBrandDiscordFilled, IconBrandTelegram, IconBrandX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

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
const Footer = ({isMobileHeader = true, isBlack} : {isMobileHeader?: boolean, isBlack?: boolean}) => {
  return (
    <div className={cn(isMobileHeader ? `px-6 md:px-12 py-12 md:py-20 ${isBlack ? "bg-white" : " bg-bgOne"}` : "p-0")}>
      <div className="flex justify-between max-md:flex-wrap">
        {isMobileHeader && (
            <div className="md:pr-4 max-md:mb-12">
            <Link to="/">
              <IconCheckedCircle className="max-md:h-5 max-md:w-56"/>
            </Link>
            <p className="pt-8 font-normal">
              A truly revolutionary hotel booking concept.
            </p>
          </div>
        )}
        
        {/* Right Section */}
        <div className={cn("gap-12 md:gap-8 lg:gap-20", isMobileHeader ? "grid md:flex" : "grid")}>
            <ul>
                {menuLinks.map((item) => (
                    <li key={item.id} className="pb-4 last:pb-0"><Link to={item.url} className="text-base font-medium text-black hover:text-blue">{item.label}</Link></li>
                ))}
            </ul>
            <ul>
                {menuSecondLinks.map((item) => (
                    <li key={item.id} className="pb-4 last:pb-0"><Link to={item.url} className="text-base font-medium hover:text-blue text-black">{item.label}</Link></li>
                ))}
            </ul>
            <ul className={cn(!isMobileHeader ? "flex gap-7" : "hidden md:flex gap-7")}>
                {socialLinks.map((item) => (
                    <li key={item.id} className="pb-4 last:pb-0"><Link to={item.url} className="w-6 h-6 text-base font-medium hover:text-blue text-black">{item.icon}</Link></li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
