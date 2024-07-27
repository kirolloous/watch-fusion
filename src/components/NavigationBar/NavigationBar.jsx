import { Badge } from "@nextui-org/react";
import { CiHeart, CiMenuBurger } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Settings from "./Settings/Settings";
import "./NavigationBar.css";
const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log("menu ===", isOpen);
  return (
    <nav className="flex flex-row justify-between w-full h-10  p-10 items-center ">
      <div className="flex flex-row  justify-center items-center gap-2">
        <Link to="/" className=" font-headerTitle text-2xl">
          WATCH FUSION
        </Link>
      </div>
      <div className=" hidden md:flex  font-light text-sm">
        <ul className="flex flex-row gap-10">
          <li>
            <NavLink to="/watches">WATCHES</NavLink>
          </li>
          <li>
            <NavLink to="/warranty">WARRANTY & SERVICE</NavLink>
          </li>
          <li>
            <NavLink to="/stores">STORES</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-10 text-sm ">
        <Settings />
        <div className="flex flex-row  ">
          <Badge content="5" color="default" placement="bottom-left">
            <CiHeart size={30} />
          </Badge>
          <Badge content="5" color="default" placement="bottom-left">
            <MdOutlineShoppingBag size={30} color="" />
          </Badge>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
