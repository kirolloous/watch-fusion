import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Badge,
} from "@nextui-org/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Settings from "./Settings/Settings";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { title: "WATCHES", path: "/watches" },
    { title: "WARRANTY & SERVIES", path: "/warranty" },
    { title: "STORES", path: "/stores" },
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className=" text-left">
          <Link to="/" className=" font-headerTitle text-md md:text-2xl ">
            WATCH FUSION
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <NavLink to="/watches">WATCHES</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/warranty">WARRANTY & SERVIES</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/stores">STORES</NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Settings />
        <Badge content="5" placement="bottom-left">
          <CiHeart size={30} className=" cursor-pointer" />
        </Badge>
        <Badge content="5" placement="bottom-left">
          <LiaShoppingBagSolid size={30} className=" cursor-pointer" />
        </Badge>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink className="w-full" to={item.path}>
              {item.title}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
