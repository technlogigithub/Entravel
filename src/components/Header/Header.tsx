import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconUserFilled } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { IconCheckedCircle } from "../iocns/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CurrencyDialog from "./CurrencyDialog";
import AllLanguagesDialog from "./AllLanguagesDialog";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isLoggedIn = true;

  return (
    <div>
      <div
        className={`flex gap-4 fixed w-full h-20 px-20 items-center justify-between top-0 z-30 transition-colors duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <Link to="/">
          <IconCheckedCircle />
        </Link>
        <ul className="flex gap-5 items-center">
          <li>
           <AllLanguagesDialog/>
          </li>
          <li>
          <CurrencyDialog/>
           
          </li>
          <li className="h-8 bg-lightBorder w-[1px]"></li>
          <li>
            <Button variant="link" className="text-black px-0">
              Blog
            </Button>
          </li>
          <li>
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="uppercase font-semibold gap-1 rounded-xl">
                    <IconUserFilled className="size-4" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-96" align="end">
                  <DropdownMenuLabel>Andrew Jons</DropdownMenuLabel>
                  <DropdownMenuItem>andrew.jones@mail.com</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Bookings</DropdownMenuItem>
                    <DropdownMenuItem>Favourites</DropdownMenuItem>
                    <DropdownMenuItem>Wallet balance</DropdownMenuItem>
                    <DropdownMenuItem>Personal information</DropdownMenuItem>
                    <DropdownMenuItem>Account settings</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => {}}>
                      Affiliate dashboard
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => {}}>
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="link"
                className="uppercase font-semibold text-black"
              >
                Sign in
              </Button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
