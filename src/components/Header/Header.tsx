import { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";
import {
  IconChevronLeft,
  IconMenu2,
  IconUserFilled,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { IconCheckedCircle } from "../iocns/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CurrencyDialog from "./CurrencyDialog";
import AllLanguagesDialog from "./AllLanguagesDialog";
import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import Footer from "../shared/Footer";
import AllLangaugeMenu from "./AllLangaugeMenu";
import CurrencyMenu from "./CurrencyMenu";

interface HeaderProps {
  isAuthenticated: boolean;
  isBlack?: boolean;
}
const AccountMenu = ({ isOpenMenu }: { isOpenMenu: boolean }) => {
  return (
    <>
      <ul className="flex flex-col gap-5 px-2 pb-2">
        <li>
          <Link to="/bookings" className="hover:text-blue">
            Bookings
          </Link>
        </li>
        <li>
          <Link to="/favourites" className="hover:text-blue">
            Favourites
          </Link>
        </li>
        <li>
          <Link to="/walletbalance" className="hover:text-blue">
            Wallet balance
          </Link>
        </li>
        <li>
          <Link to="/personalinformation" className="hover:text-blue">
            Personal information
          </Link>
        </li>
        <li>
          <Link to="/accountsettings" className="hover:text-blue">
            Account settings
          </Link>
        </li>
      </ul>
      <DropdownMenuSeparator className={cn(isOpenMenu && "mx-0")} />
      <ul className="px-2 py-2">
        <li>
          <Link to="/affiliatedashboard" className="hover:text-blue">
            {" "}
            Affiliate dashboard
          </Link>
        </li>
      </ul>
      <DropdownMenuSeparator className={cn(isOpenMenu && "mx-0")} />
      <Button
        variant={isOpenMenu ? "secondary" : "link"}
        onClick={() => {}}
        className={cn(isOpenMenu && "w-full bg-gray-dark h-12 my-4")}
      >
        Sign out
      </Button>
    </>
  );
};
const Header: FC<HeaderProps> = ({ isAuthenticated, isBlack = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLangugeOpenMenu, setIsLangugeOpenMenu] = useState(false);
  const [isCurrencyOpenMenu, setIsCurrencyOpenMenu] = useState(false);

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

  // const isLoggedIn = true;

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const handleOpenLangugeMenu = () => {
    setIsLangugeOpenMenu(!isLangugeOpenMenu);
  };

  const handleOpenCurrencyMenu = () => {
    setIsCurrencyOpenMenu(!isCurrencyOpenMenu);
  };
  return (
    <div>
      <div
        className={`flex gap-4 fixed w-full h-20 px-6 md:px-10 lg:px-20 items-center justify-between top-0 z-30 transition-colors duration-300 max-md:border-b max-md:border-gray-400 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        } ${isBlack && "!bg-black !text-white"}`}
      >
        {isBlack ? (
          <Link to="/">
            <img src="/icons/white_logo.png" alt="Entravel" />
          </Link>
        ) : (
          <Link to="/">
            <IconCheckedCircle />
          </Link>
        )}

        <ul className="hidden md:flex gap-5 items-center">
          <li>
            <AllLanguagesDialog isBlack={isBlack}/>
          </li>
          <li>
            <CurrencyDialog isBlack={isBlack}/>
          </li>
          <li className="h-8 bg-lightBorder w-[1px]"></li>
          <li>
            <Button
              variant="link"
              className={cn("px-0 text-black", isBlack && "text-white")}
            >
              Blog
            </Button>
          </li>
          <li>
            {isAuthenticated ? (
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
                  <AccountMenu isOpenMenu={false} />
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/login"
                className={cn(
                  "uppercase font-semibold text-black hover:text-blue inline-flex pt-[3px]",
                  isBlack && "text-white"
                )}
              >
                Sign in
              </Link>
              // <Button
              //   variant="link"
              //   className="uppercase font-semibold text-black"
              //   onClick={useNavigate("/login")}
              // >

              // </Button>
            )}
          </li>
        </ul>
        <Button onClick={handleOpenMenu} variant="link" className="md:hidden">
          <IconMenu2 className="size-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpenMenu && (
        <Drawer open={isOpenMenu} direction="left">
          <DrawerContent>
            <DrawerHeader>
              <div className="flex justify-between items-center bg-white shadow-three py-2.5">
                <Button variant="link" onClick={() => setIsOpenMenu(false)}>
                  <IconChevronLeft className="size-6" />
                </Button>
                <p>Menu</p>
                <div className="min-w-14"></div>
              </div>
            </DrawerHeader>
            <div className="p-6 overflow-y-auto">
              <div>
                <h6 className="text-sm font-medium text-text">Settings</h6>
                <ul className="mt-5">
                  <li className="pb-4 last:pb-0">
                    <Button
                      variant="link"
                      className="gap-3 text-sm p-0 h-auto w-full justify-between rounded-xl min-w-72 bg-transparent text-black"
                      onClick={handleOpenLangugeMenu}
                    >
                      <div className="flex items-center gap-3 text-base font-medium">
                        <div className="py-0.5 px-1.5 rounded-full bg-[#EEEFF2] text-xs">
                          <img
                            src="/icons/us_flag.png"
                            alt="icon"
                            className="w-6"
                          />
                        </div>
                        Language
                      </div>
                    </Button>
                  </li>
                  <li className="pb-4 last:pb-0">
                    <Button
                      variant="link"
                      className="gap-3 text-sm p-0 h-auto w-full justify-between rounded-xl min-w-72 bg-transparent text-black"
                      onClick={handleOpenCurrencyMenu}
                    >
                      <div className="flex items-center gap-3 text-base font-medium">
                        <div className="py-0.5 px-1.5 rounded-full bg-[#EEEFF2] text-xs">
                          USD
                        </div>
                        Currency
                      </div>
                    </Button>
                  </li>
                </ul>
              </div>
              <Separator />
              <div>
                <h6 className="text-sm font-medium text-text mb-5">Account</h6>
                <div className="-mx-2">
                  <AccountMenu isOpenMenu={true} />
                </div>
              </div>
              <Separator />
              <h6 className="text-sm font-medium text-text mb-5">
                Information
              </h6>
              <Footer isMobileHeader={false} />
            </div>
          </DrawerContent>
        </Drawer>
      )}

      {/* Langauge Drawer */}
      {isLangugeOpenMenu && (
        <Drawer open={isLangugeOpenMenu} direction="left">
          <DrawerContent>
            <DrawerHeader>
              <div className="flex justify-between items-center bg-white shadow-three py-2.5">
                <Button
                  variant="link"
                  onClick={() => setIsLangugeOpenMenu(false)}
                >
                  <IconChevronLeft className="size-6" />
                </Button>
                <p>All languages</p>
                <div className="min-w-14"></div>
              </div>
            </DrawerHeader>
            <div className="p-6 h-full overflow-y-auto bg-white">
              <AllLangaugeMenu isMobileMenu={true} />
            </div>
          </DrawerContent>
        </Drawer>
      )}

      {/* Langauge Drawer */}
      {isCurrencyOpenMenu && (
        <Drawer open={isCurrencyOpenMenu} direction="left">
          <DrawerContent>
            <DrawerHeader>
              <div className="flex justify-between items-center bg-white shadow-three py-2.5">
                <Button
                  variant="link"
                  onClick={() => setIsCurrencyOpenMenu(false)}
                >
                  <IconChevronLeft className="size-6" />
                </Button>
                <p>All languages</p>
                <div className="min-w-14"></div>
              </div>
            </DrawerHeader>
            <div className="p-6 h-full overflow-y-auto bg-white">
              <CurrencyMenu isMobileMenu={true} />
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default Header;
