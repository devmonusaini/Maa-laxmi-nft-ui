import React from "react";
import fire from "../images/001-fire.png";
import { useState } from "react";
import Aos from "aos";
import { useEffect } from "react";
import dontfire from "../images/Cards/LiveAuction/001-fires.png";
import RedHeart from "../images/Cards/LiveAuction/redheart.png";
import WhiteHeart from "../images/Cards/LiveAuction/heart.png";


const ExploreProductCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [toggle, setToggle] = useState();
  const changeToggle = (index) => {
    setToggle(index);
  };
  return (
    <>
          <div
        onMouseOver={() => changeToggle(1)}
        onMouseOut={() => changeToggle(0)}
        data-aos={props.data.animation}
      >
        <div className=" w-full rounded-xl     flex 3xl:justify-end justify-center items-center  mx-2  hover:scale-105 duration-500">
          <div className="w-full bg-gray-800  text-center px-6 py-2 sm:pt-3  HoverEffect rounded-xl relative ">
            <img alt="images" className="my-2 mt-4 max-w-[250px] min-w-full  h-[245px] rounded-2xl" src={props.data.image} />
            <div className="absolute top-12 right-10 h-8 w-8 bg-white rounded-full flex justify-center items-center">
              <img src={toggle === 1 ? RedHeart : WhiteHeart} alt="heart" />
            </div>

            <div className="flex justify-between items-center mt-5">
              <h1 className="text-white text-sm font-bold text-left ">
                {props.data.title}
              </h1>

              <p className="text-white text-right text-sm">
                {props.data.cretorName}
              </p>
            </div>
            <div className="flex justify-between items-center my-2 ">
              <div className="flex justify-center items-center ">
                <img
                  alt="images"
                  className="w-10 sm:w-12  "
                  src={props.data.icon}
                />

                <div className="flex justify-start mx-2 items-start flex-col">
                  <p className="text-white text-left text-sm">
                    {props.data.name}
                  </p>
                </div>
              </div>

              <div className="flex justify-end  items-end flex-col">
                <h1 className="text-white text-sm font-semibold  ">
                  {props.data.currency}
                </h1>
              </div>
            </div>
            <div className="flex justify-between items-center my-2">
              <h1 className="text-white text-sm font-bold text-left flex justify-center items-center ">
                <img
                  src={toggle === 1 ? dontfire : fire}
                  alt="images"
                  className="mx-2 w-5 h-5"
                />{" "}
                {props.data.time}
              </h1>

              <button
                className={
                  toggle === 1
                    ? "p-1 px-6 font-bold text-white buttons rounded-xl bg-gray-800 hover:bg-gray-800 "
                    : "p-1 px-6 font-bold text-white buttons rounded-xl boxbgColor hover:bg-gray-800 "
                }
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        onMouseOver={() => changeToggle(1)}
        onMouseOut={() => changeToggle(0)}
        data-aos={props.data.animation}
      >
        <div className="  rounded-xl py-6  mb-6  flex 3xl:justify-end justify-center items-center space-x-4 mx-2  hover:scale-105 duration-500">
          <div className="bg-gray-800 text-center px-6 py-2 sm:pt-3  HoverEffect rounded-xl relative">
            <img alt="images" className="my-2 mt-4" src={props.data.image} />
            {props.data.id === 2 ? (
              <div className="w-full flex justify-center items-center absolute bottom-[250px] left-[-2px]">
                <button className="font-bold text-md px-10 py-5 boxbgColor rounded-xl text-white ">
                  Place A Bid
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-center items-center absolute bottom-[180px] left-[-2px]">
                <div className="flex justify-center items-center bg-black p-2 px-5 rounded-2xl">
                  <img alt="images" src={fire} />
                  <span className="text-white font-bold px-1">
                    {props.data.time}
                  </span>
                </div>
              </div>
            )}
            <div className="flex justify-between items-center mt-5">
              <div className="text-white  sm:text-sm text-sm font-medium text-left ">
                {props.data.cretorName}
              </div>

              <div className="">
                <button
                  className={
                    toggle === 1
                      ? "p-1 px-5 font-bold text-white  text-md rounded-xl bg-gray-800  border-none "
                      : "p-1 px-5  font-bold text-white  text-md rounded-xl boxbgColor "
                  }
                >
                  BSC
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center my-2">
              <div className="flex justify-center items-center">
                <img
                  alt="images"
                  src={props.data.icon}
                  className="w-10 sm:w-12 object-cover  "
                />

                <div className="flex justify-start px-2 items-start flex-col">
                  <p className="text-white text-left text-sm">Cretor</p>
                  <h1 className="text-white text-lg font-medium text-left ">
                    {props.data.name}
                  </h1>
                </div>
              </div>

              <div className="flex justify-end px-2 items-end flex-col">
                <p className="text-white text-right text-sm">
                  {props.data.cretorName}
                </p>
                <h1 className="text-white text-lg font-bold  ">
                  {props.data.currency}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default ExploreProductCard;
