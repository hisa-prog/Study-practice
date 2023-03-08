import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import Container from "../wrappers/gridContainer";
import React, { useLayoutEffect, useState } from "react";
import Line from "../atoms/line";
import useResolution from "../hooks/useResolution";
import { FormattedHTMLMessage } from "../atoms/FormattedMessage";

const partners = [
  ["1", "2"],
  ["3", "4"],
  ["5", "6"],
  ["7", "8"],
  ["9", "10"],
  ["11", "12"],
];

const runningLine1: Array<{ img: string; link: string }> = [
  { img: "7", link: "https://britishblockchainassociation.org" },
  { img: "6", link: "daoconsensus.com" },
  { img: "5", link: "https://www.softwareworld.co" },
  { img: "4", link: "https://www.topdevelopers.co" },
  { img: "2", link: "https://www.goodfirms.co" },
  { img: "3", link: "https://clutch.co" },
  { img: "7", link: "https://britishblockchainassociation.org" },
  { img: "6", link: "daoconsensus.com" },
  { img: "5", link: "https://www.softwareworld.co" },
  { img: "4", link: "https://www.topdevelopers.co" },
  { img: "2", link: "https://www.goodfirms.co" },
  { img: "3", link: "https://clutch.co" },
];

const runningLine2: Array<{ img: string; link: string }> = [
  { img: "1", link: "https://www.ieee.org" },
  { img: "12", link: "https://www.angellist.com" },
  { img: "11", link: "https://www.crunchbase.com/" },
  { img: "10", link: "https://britishblockchainassociation.org" },
  { img: "9", link: "https://blockchainindustrygroup.org" },
  { img: "8", link: "https://cryptovalley.swiss" },
  { img: "1", link: "https://www.ieee.org" },
  { img: "12", link: "https://www.angellist.com" },
  { img: "11", link: "https://www.crunchbase.com/" },
  { img: "10", link: "https://britishblockchainassociation.org" },
  { img: "9", link: "https://blockchainindustrygroup.org" },
  { img: "8", link: "https://cryptovalley.swiss" },
];

export default function Recognition() {
  const screenType = useResolution();

  const [slidesPerView, setSlidesPerView] = useState(0);

  useLayoutEffect(() => {
    for (let [key, value] of Object.entries(screenType)) {
      if (value) {
        switch (key) {
          case "isMobile":
            return setSlidesPerView(2);
          case "isTablet":
            return setSlidesPerView(3);
          case "isNetbook":
            return setSlidesPerView(4);
          case "isLaptop":
            return setSlidesPerView(5);
          case "isPc":
            return setSlidesPerView(6);
        }
      }
    }
  }, [screenType]);

  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 w-full mx-auto px-4 md:px-8 lg:px-16 overflow-hidden mt-20 mb-20">
        <div className={`col-span-full flex justify-start relative`}>
        <p className={`font-bold text-4xl lg:text-6xl-mg uppercase w-[90%]`}>
          {/* Recognition, Membership in Associations and Professional Rewards */}
          <FormattedHTMLMessage id='page.main.recognition.title' />
        </p>
        </div>
        <div className={"marqueeReverse py-15 lg:py-18.5 h-80"}>
          <div className={"w-[3000%] flex py-4 bg-gray"}>
            <span className={"w-[150%] flex justify-around items-center"}>
              {runningLine1.map((partners, index) => (
                <a
                  href={partners.link} target="_blank"
                  className="flex items-center justify-center h-32 p-8"
                >
                  <img
                    key={index + partners.link}
                    src={`/images/recognition/${partners.img}.png`}
                    alt={partners.link}
                    className="max-h-32 max-w-[240px]"
                  />
                </a>
              ))}
            </span>
          </div>
        </div>
        <div className={"marquee py-15 lg:py-18.5 h-80 mt-[250%] lg:mt-[190%]"}>
          <div className={"w-[3000%] flex py-4 bg-gray"}>
            <span className={"w-[150%] flex justify-around"}>
              {runningLine2.map((partners, index) => (
                <a
                  href={partners.link} target="_blank"
                  className="flex items-center justify-center h-32 p-8"
                >
                  <img
                    key={index + partners.link}
                    src={`/images/recognition/${partners.img}.png`}
                    alt={partners.link}
                    className="max-h-32"
                  />
                </a>
              ))}
            </span>
          </div>
        </div>
        {/* <div className="col-span-full">
                    <Swiper
                        speed={700}
                        modules={[Mousewheel, Pagination, Navigation]}
                        loop={true}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                        // mousewheel={true}
                        slidesPerView={slidesPerView}
                        // onSwiper={(swiper) => setSwiperInstance(swiper)}
                    >
                        {partners.map((slide, index) => (
                            <SwiperSlide key={index} className={`flex flex-col items-center gap-5`}>
                                {slide.map((item, index) => (
                                    <div key={index}
                                         className={`overflow-hidden relative h-50 w-41.5 md:h-60 md:w-50 flex items-center justify-center px-4 border border-lines-primary`}>
                                        <img
                                            className={`max-h-24.5 md:max-h-30 max-w-32.5 md:max-w-[10.75rem]`}
                                            src={`/images/recognition/${item}.png`}
                                            alt=""/>
                                        <img src="/images/recognition/hero-bg.svg" alt="hero-bg"
                                             className={'absolute -bottom-12 w-[200%] h-[122px]'}/>
                                    </div>
                                ))}

                            </SwiperSlide>
                        ))}

                        {!screenType.isPc && (
                            <div className={`flex justify-center w-full`}>
                                <div className={`swiper-pagination flex justify-center`}/>
                            </div>)}
                    </Swiper>
                </div> */}
      </div>
      <Line />
    </>
  );
}
