import React from "react";
import { FormattedHTMLMessage } from "../atoms/FormattedMessage";
import Line from "../atoms/line";

const Mission = () => {
  return (
    <div className="mt-20">
      <Line />
      <div className={`flex flex-col lg:flex-row lg:justify-between relative my-10 lg:my-20 mx-4 lg:mx-15`}>
        <p className="font-bold text-3xl-h-s lg:text-6xl-mg uppercase mb-10 lg:mb-0">Mission</p>
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col justify-center lg:w-fit lg:mr-7">
                <p className="text-gray-text font-light text-base lg:text-xl font-lexendDeca lg:w-[18vw] mb-6 lg:mb-8">Web3 will dramatically change the lives of people all over the world.</p>
                <p className="text-gray-text font-light text-base lg:text-xl font-lexendDeca lg:w-[22vw] mb-6 lg:mb-0">It allows for lower costs, better coordination and ownership, and novel use cases.</p>
            </div>
            <div className="flex flex-col justify-center lg:w-max">
                <p className="text-gray-text font-light text-base lg:text-xl font-lexendDeca lg:w-[18vw] mb-6 lg:mb-8">Everyone will benefit from Web3 products. The same way they did by accessing the internet and mobile phones</p>
                <p className="text-gray-text font-light text-base lg:text-xl font-lexendDeca lg:w-[22vw] ">Our mission is thus simple: we were founded to accelerate this transition.</p>
            </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default Mission;
