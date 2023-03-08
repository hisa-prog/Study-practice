import React from "react";
import { FormattedHTMLMessage } from "../../atoms/FormattedMessage";
import useResize from "../../hooks/useResolution";

export default function MainScreen() {
  const {isMobile} = useResize()
  return (
    <>
      <div className="w-full h-[89vh] lg:h-[100vh] flex flex-col items-start px-4 lg:px-15">
        <p className="mx-4 lg:mx-auto w-full text-2xl-xs-s lg:text-6xl-lg lg:text-center font-bold capitalize font-mono mt-[20%] lg:mt-[8.5%] mb-6">
          <FormattedHTMLMessage id="page.mev.title" />
        </p>
        <div className="flex flex-col lg:flex-row">
          <p className="font-mono text-sm lg:text-base lg:mr-10 mb-6 lg:mb-0 lg:w-[180%]">
            <FormattedHTMLMessage id="page.mev.subtitle1" />
          </p>
          <p className="font-mono text-sm lg:text-base lg:ml-10">
            <FormattedHTMLMessage id="page.mev.subtitle2" />
          </p>
        </div>
      </div>
      <div
        className={"bottom-0 left-0 absolute flex justify-center w-full z-0"}
      >
        <img
          loading="lazy"
          src={
            isMobile ? "/images/mainImageMobile.png" : "/images/mainImage.png"
          }
          alt="mainImage"
          className="z-0 w-screen pointer-events-none"
        />
      </div>
    </>
  );
}
