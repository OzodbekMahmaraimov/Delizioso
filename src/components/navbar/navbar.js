import { useState } from "react";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import Button from "../button/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="mx-auto max-w-[1300px] font-poppins md:px-5 px-4">
        <nav className="flex justify-between py-10">
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="bg-[#FF8A00] py-2 px-4 rounded-full text-2xl"
            >
              D
            </a>
            <span className="font-semibold text-lg">
              Delizi<span className="text-[#FF8A00]">oso</span>
            </span>
          </div>
          <ul className="hidden md:flex items-center gap-12">
            <li className="text-[#FF8A00]">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/order">Order online</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="flex p-3 bg-[#FBFAFA] rounded-full cursor-pointer relative">
              <SlBasket className="text-xl" />
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </div>
            </div>
            <Button className="hidden md:block bg-[#3FA72F] px-8 text-white hover:bg-[#3FA00F]">
              Log in
            </Button>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                {isOpen ? <AiOutlineClose className="text-3xl" /> : <AiOutlineMenu className="text-3xl" />}
              </button>
            </div>
          </div>
        </nav>
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center gap-4">
              <li className="text-[#FF8A00]">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/order">Order online</Link>
              </li>
              <li>
                <Link to="/reservation">Reservation</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <Button className="bg-[#3FA72F] px-8 text-white hover:bg-[#3FA00F]">
                tugma
              </Button>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
