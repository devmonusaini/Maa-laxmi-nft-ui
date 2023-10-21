import React from "react";
import { LiveAuctionData } from "./Data";
import LiveAuctionCard from "./LiveAuctionCard";
import Aos from "aos";
import { useEffect } from "react";

const LiveAuction = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className=" max-w-7xl mx-auto gap-x-10  gap-y-10   xl:gap-x-20 flex  flex-col  px-3 ">
        <div className=" gap-x-10  gap-y-10   xl:gap-x-20 flex  justify-between items-center px-2 my-4">
          <div>
            <h1 className="text-white text-xl lg:text-2xl 2xl:text-4xl  font-bold">
              Live Auctions
            </h1>
          </div>

          <div className=" ">
            <button className="font-bold text-white text-xs xl:text-sm">
              {" "}
              <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                Get Started
              </span>
            </button>
          </div>
        </div>
        <div className="sm:grid max-w-7xl mx-auto gap-x-10   grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4  md:gap-x-5 lg:gap-x-16 xl:gap-x-5 gap-5 flex flex-col  justify-center items-center  sm:p-0 p-3">
          {LiveAuctionData.map((item, index) => (
            <LiveAuctionCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default LiveAuction;
