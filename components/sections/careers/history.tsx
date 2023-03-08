import React from "react";
import useResize from "../../hooks/useResolution";

const HistoryCareers = () => {
  const res = useResize()
  return (
    <div className={`${!res.isMobile && 'h-screen'} grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-4 px-4 md:px-16 w-full relative mt-36`}>
        {!res.isMobile ? (
            <img src="/images/careers/history-bg.png" alt='bg' className="col-span-4" />
        ) : (
            <img src="/images/careers/history-bg-mobile.png" alt='bg' className="col-span-4" />
        )}
        <div className="lg:col-start-6 col-span-4 lg:col-span-6 flex flex-col">
            <p className="font-bold text-3xl-h-s lg:text-6xl-mg uppercase mb-4 lg:mb-5 mt-6 lg:mt-0">History</p>
            <p className="font-light text-sm lg:text-lg text-gray-text font-lexendDeca mb-10 lg:mb-15">The DA was founded in March 2020 by a team of crypto veterans in partnership with top tier trading and venture firms.</p>
            <p className="font-normal text-base lg:text-xl font-lexendDeca mb-6 lg:mb-8">Ecosystems saw the premise of the Platinum VC and started supporting our founders. In Q2/2021 Coinbase joined the Platinum VC ahead of its public listing.</p>
            <p className="font-normal text-base lg:text-xl font-lexendDeca mb-6 lg:mb-8">Since then the Platinum VC has grown exponentially. In Q3/2021 we experimented with expanding our scope to include games. The success of this cohort, VC, was the spark for our migration to a fully fledged Web 3 accelerator.</p>
            <p className="font-normal text-base lg:text-xl font-lexendDeca mb-6 lg:mb-8">Today we've built the most founder-friendly Web3 network. We're humbled by the quality and enthusiasm of builders that joined our movement.</p>
            <p className="font-normal text-base lg:text-xl font-lexendDeca">They support each other every day. And they're building technology that will impact the lives of billions of people.</p>
        </div>
    </div>
  );
};

export default HistoryCareers;