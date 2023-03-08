import React, { useEffect, useState } from "react";
import { FormattedHTMLMessage } from "../../atoms/FormattedMessage";
import useResize from "../../hooks/useResolution";

const OurBigFamily = () => {
  const res = useResize();

  return (
    <>
      <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-4 px-4 md:px-16 w-full relative">
        <p className="col-span-full lg:col-span-3 mt-[8%] font-blinker text-3xl-h md:text-6xl-mg font-bold uppercase">
          <FormattedHTMLMessage id='page.careers.ourBigFamily.title' />
        </p>
        <div className="col-span-full lg:col-start-5 lg:col-span-4 flex flex-col mt-[8%]">
          <p className="font-semibold text-5xl">100+</p>
          <p className="mt-3 uppercase font-lexendDeca font-medium text-2xl tracking-03em">
            <FormattedHTMLMessage id='page.careers.ourBigFamily.tab1.title' /> 
          </p>
          <p className="mt-6 font-light font-lexendDeca text-lg text-gray-text pr-6">
            <FormattedHTMLMessage id='page.careers.ourBigFamily.tab1.subtitle' /> 
          </p>
        </div>
        <div className="col-span-full lg:col-span-4 flex flex-col mt-[8%]">
          <p className="font-semibold text-5xl">19+</p>
          <p className="mt-3 uppercase font-lexendDeca font-medium text-2xl tracking-03em">
            <FormattedHTMLMessage id='page.careers.ourBigFamily.tab2.title' /> 
          </p>
          <p className="mt-6 font-light font-lexendDeca text-lg text-gray-text pr-6">
            <FormattedHTMLMessage id='page.careers.ourBigFamily.tab2.subtitle' /> 
          </p>
        </div>
      </div>
      {res.isMobile ? (
        <div className="overflow-x-scroll hideScrollbar">
          <div className="w-[200%] flex items-center justify-center">
            <img
              id={"map"}
              src="/images/careers/bigFamily.png"
              alt=""
              className="mt-12 w-full lg:pointer-events-none"
            />
          </div>
        </div>
      ) : (
        <img
          src="/images/careers/bigFamily.png"
          alt=""
          className="mt-12 w-full pointer-events-none"
        />
      )}
      {res.isMobile && (
        <img
          src="/images/careers/swipe-icon.svg"
          alt="swipe"
          className="mx-auto mt-4"
        />
      )}
    </>
  );
};

export default OurBigFamily;
