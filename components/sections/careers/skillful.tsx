import React from "react";
import { FormattedHTMLMessage } from "../../atoms/FormattedMessage";
import useResize from "../../hooks/useResolution";

const SkillFulCareers = () => {
  const res = useResize()
  return (
    <div className={`${!res.isMobile && 'h-screen'} grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-4 px-4 md:px-16 w-full relative`}>
      <div className="md:col-span-9 col-span-4 mt-[10%] flex flex-col">
        <img src="/images/logoHeader.svg" alt="" className="w-14 mb-8"/>
        <p className="font-blinker text-3xl-h md:text-7xl-h font-semibold uppercase mb-4 md:mb-8">
            <FormattedHTMLMessage id='page.careers.skillFulCareers.title' />
        </p>
        <p className="md:w-[55%] text-base md:text-xl font-lexendDeca font-normal">
            <FormattedHTMLMessage id='page.careers.skillFulCareers.subtitle' />
        </p>
      </div>
      <img src='/images/careers/skillful.png' alt='' className={`${res.isMobile ? 'col-span-full w-full' : 'absolute right-0 bottom-0'}`}/>
    </div>
  );
};

export default SkillFulCareers;