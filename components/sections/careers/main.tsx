import React from "react";
import { FormattedHTMLMessage } from "../../atoms/FormattedMessage";
import useResize from "../../hooks/useResolution";

const MainCareers = () => {
  const res = useResize()
  return (
    <div className={`${!res.isMobile && 'h-[83.5vh] 2xl:h-[86vh]'} grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-4 px-4 md:px-16 w-full relative`}>
      <div className="md:col-start-6 md:col-span-6 col-span-4 mt-[20%]">
        <p className="uppercase font-bold font-blinker tracking-03em md:tracking-normal text-3xl-h md:text-6xl-mg">
          <FormattedHTMLMessage id='page.careers.main.title' />
        </p>
        <p className="mt-4 md:mt-8 font-normal font-lexendDeca text-base md:text-xl">
          <FormattedHTMLMessage id='page.careers.main.subtitle' />
        </p>
      </div>
      <img src='/images/careers/mainCareers.png' alt='' className={`${res.isMobile ? 'col-span-full w-full' : 'absolute left-0 bottom-0'}`}/>
    </div>
  );
};

export default MainCareers;
