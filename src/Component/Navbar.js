import React from "react";
import logo from "../images/image 2.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LinearScaleIcon from '@mui/icons-material/LinearScale';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  return (
    <>
      <div className="z-50    ">
        <header style={{ backgroundcolor: "transparent" }}>
          <nav className="mx-auto flex items-center justify-between gap-x-6 p-6 max-w-[1440px] lg:px-8">
            <div className="flex">
              <NavLink
                to="/"
                className="-m-1.5 p-1.5 text-white flex justify-center items-center "
              >
                <span className="sr-only">Your Company</span>
                <img
                  alt="images"
                  className="w-[58px] h-[56px] rounded-[500px ] border-solid border-1 "
                  src={logo}
                />
                <div className="text-white  text-[22px] font-bold mx-2">
                  Maalaxmi
                </div>
              </NavLink>
            </div>
            <div className="hidden gap-x-6 lg:flex justify-center items-center xl:gap-x-12">
              <NavLink
                to="/createNew"
                className="text-white font-medium text-md  cursor-pointer "
              >
                Create
              </NavLink>
              <NavLink
                to="/auction"
                className="text-white  text-md  font-medium cursor-pointer "
              >
                Auction
              </NavLink>
              <NavLink
                to="/profile"
                className="text-white  text-md  font-medium cursor-pointer "
              >
                Profile
              </NavLink>

              <NavLink
                to="/sell"
                className="text-white  text-md  font-medium cursor-pointer "
              >
                Sell
              </NavLink>

              <NavLink
                to="/products"
                className="text-white  text-md  font-medium cursor-pointer "
              >
                Products
              </NavLink>
              <NavLink
                to="/marketplace"
                className="text-white  text-md  font-medium cursor-pointer "
              >
                <span className="font-bold rounded-full bgName text-md text-black px-1.5">
                  +
                </span>
                <span className="name mx-2">Marketplace </span>
              </NavLink>

              <div className="flex justify-center items-center">
                <div className=" ">
                  <button
                    className="font-bold text-white text-xs xl:text-sm"
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <span className="flex rounded-md items-center space-x-3 boxbgColor  py-3 px-4 lg:px-6 xl:py-4 xl:px-8  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                      Connect Wallet
                    </span>
                  </button>
                </div>
                <div className=" ">
                  <button
                    className="font-bold text-white text-xs xl:text-sm "
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      setToggle2(!toggle2);
                    }}
                  >
                    {" "}
                    <span className="flex rounded-full items-center space-x-3 boxbgColor  p-2 xl:p-3 mx-1  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                      <PermIdentityIcon className="text-white font-bold " />{" "}
                    </span>
                    {toggle2 && (
                    <div className="flex flex-col absolute  z-50  dropMenu">
                    <ul className="flex flex-col   text-white w-full">
                      <li className="w-full p-3 hover:text-[#9F6809] font-medium hover:bg-white rounded-xl">Deskboard</li>
                      <li className="w-full p-3 hover:text-[#9F6809] font-medium hover:bg-white rounded-xl ">Setting</li>


                    </ul>
                  </div>
                    )}
                  </button>
                  
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <span className="w-fit">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </nav>
          {toggle && (
            <div className="lg:hidden">
              <div className="fixed inset-y-0 right-0 z-40 w-screen  bg-black/50 px-6 py-4  sm:ring-1 sm:ring-gray-900/10">
                <div className="fixed inset-y-0 right-0 z-50 w-full  bg-black px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="gap-x-6 flex justify-between ">
                    <NavLink
                      to="/"
                      className="-m-1.5 p-1.5 text-white flex justify-center items-center "
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      <span className="sr-only">Your Company</span>
                      <img
                        alt="images"
                        className="w-[58px] h-[56px] rounded-[500px ] border-solid border-1 "
                        src={logo}
                      />
                      <div className="text-white  text-[22px] font-bold mx-2">
                        Maalaxmi
                      </div>
                    </NavLink>
                    <button
                      className="-m-2.5 rounded-md p-2.5 text-white"
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      <span className="sr-only">Close menu</span>
                      <span className="w-fit">
                        <svg
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-5 py-6">
                        <NavLink
                          to="/createNew"
                          className="text-white  text-sm  cursor-pointer -mx-3 block rounded-lg px-3 py-2  font-bold leading-7 "
                          onClick={() => {
                            setToggle(!toggle);
                          }}
                        >
                          Create
                        </NavLink>
                        <NavLink
                          to="/auction"
                          className="text-white  text-sm  cursor-pointer -mx-3 block rounded-lg px-3 py-2  font-bold leading-7 "
                          onClick={() => {
                            setToggle(!toggle);
                          }}
                        >
                          Auction
                        </NavLink>
                        <NavLink
                          to="/profile"
                          className="text-white  text-sm  cursor-pointer -mx-3 block rounded-lg px-3 py-2  font-bold leading-7 "
                          onClick={() => {
                            setToggle(!toggle);
                          }}
                        >
                          Profile
                        </NavLink>
                        <NavLink
                          to="/sell"
                          className="text-white  text-sm  cursor-pointer -mx-3 block rounded-lg px-3 py-2  font-bold leading-7 "
                          onClick={() => {
                            setToggle(!toggle);
                          }}
                        >
                          Sell
                        </NavLink>
                        <NavLink
                          to="/products"
                          className="text-white  text-sm  cursor-pointer -mx-3 block rounded-lg px-3 py-2  font-bold leading-7 "
                          onClick={() => {
                            setToggle(!toggle);
                          }}
                        >
                          Products
                        </NavLink>
                        <NavLink
                          to="/marketplace"
                          className="text-white  text-sm  cursor-pointer -mx-3 block rounded-lg px-3 py-2  font-bold leading-7 "
                          onClick={() => {
                            setToggle(!toggle);
                          }}
                        >
                          <span className="font-bold rounded-full bgName text-sm text-black px-1">
                            +
                          </span>
                          <span className="name mx-2">Marketplace </span>
                        </NavLink>

                        <div className="my-20 flex justify-start items-start">
                          <div
                            className=" mx-1"
                            onClick={() => {
                              setToggle(!toggle);
                            }}
                          >
                            <button className="font-bold text-white text-xs xl:text-sm">
                              {" "}
                              <span className="flex rounded-md items-center space-x-3 boxbgColor  py-3 px-4 lg:px-6 xl:py-4 xl:px-8  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                                Connect Wallet
                              </span>
                            </button>
                          </div>
                          <div
                            className=" mx-1"
                           
                          >
<button
                    className="font-bold text-white text-xs xl:text-sm  relative"
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      setToggle2(!toggle2);
                    }}
                  >
                    {" "}
                    <span className="flex rounded-full items-center space-x-3 boxbgColor  p-2 xl:p-3 mx-1  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                      <PermIdentityIcon className="text-white font-bold " />{" "}
                    </span>
                    {toggle2 && (
                    <div className="flex flex-col absolute  z-50  dropMenuMobile">
                    <ul className="flex flex-col   text-white w-full">
                      <li className="w-full p-3 hover:text-[#9F6809] font-medium hover:bg-white rounded-xl"  onClick={() => {
                              setToggle(!toggle);
                            }}>Deskboard</li>
                      <li className="w-full p-3 hover:text-[#9F6809] font-medium hover:bg-white rounded-xl "  onClick={() => {
                              setToggle(!toggle);
                            }}>Setting</li>


                    </ul>
                  </div>
                    )}
                  </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Navbar;
