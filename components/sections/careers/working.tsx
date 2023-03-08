import React from "react";
import { FormattedHTMLMessage } from "../../atoms/FormattedMessage";
import useResize from "../../hooks/useResolution";

const WorkingCareers = () => {
  const res = useResize()
  return (
    <div className={`${!res.isMobile && 'h-screen'} grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-4 px-4 md:px-16 w-full relative`}>
      <div className="md:col-span-9 col-span-4 mt-[10%] flex flex-col">
        <p className="font-blinker text-3xl-h md:text-7xl-h font-semibold uppercase mb-4 md:mb-8">
            <FormattedHTMLMessage id='page.careers.workingCareers.title' />
        </p>
        <p className="md:w-[60%] text-base md:text-xl font-lexendDeca font-normal">
            <FormattedHTMLMessage id='page.careers.workingCareers.subtitle' />
        </p>
        <div className="flex flex-col mt-8 md:mt-[24%]">
            <p className="font-lexendDeca text-lg md:text-2xl mb-2">Nataliya Lebedeva</p>
            <p className="font-lexendDeca text-gray-text text-xs md:text-sm">
              <FormattedHTMLMessage id='page.careers.workingCareers.career' />
            </p>
        </div>
      </div>
      <img src='/images/careers/workingCareers.png' alt=''  className={`${res.isMobile ? 'col-span-full w-full -mt-10' : 'absolute right-0 bottom-0'}`}/>
    </div>
  );
};

export default WorkingCareers;