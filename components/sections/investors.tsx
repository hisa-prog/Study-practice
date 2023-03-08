import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import Container from "../wrappers/gridContainer";
import React, { useState } from "react";
import { InvestorsData } from "../data/investorsData";
import Line from "../atoms/line";
import InvestorsCard from "../atoms/investorsCard";
import useResolution from "../hooks/useResolution";
import { FormattedHTMLMessage } from "../atoms/FormattedMessage";

export default function Investors() {
  const [swiperInstance, setSwiperInstance] = useState() as any;
  const screenType = useResolution();

  return (
    <>
      <Line />
      <Container className="h-screen">
        <div
          className={`col-span-full flex justify-between items-center relative`}
        >
          <p
            className={`font-bold text-3xl-h leading-[40px] lg:text-[60px] lg:leading-[60px] uppercase`}
          >
            {/* We co-invested with a number of reputable ventures with various
            investment theses and ticket sizes. */}
            <FormattedHTMLMessage id='page.main.investors.title' />
          </p>
        </div>
        <div className="col-span-full">
          <Swiper
            speed={700}
            modules={[Mousewheel, Pagination, Navigation]}
            loop={true}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            // mousewheel={true}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {InvestorsData.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`grid grid-cols-3 lg:grid-cols-5 gap-7`}
              >
                {item.slide1?.map((item, index) => (
                  <InvestorsCard
                    index={index}
                    img={item.img}
                    link={item.link}
                  />
                ))}
                {item.slide2?.map((item, index) => (
                  <InvestorsCard
                    index={index}
                    img={item.img}
                    link={item.link}
                  />
                ))}
                {item.slide3?.map((item, index) => (
                  <InvestorsCard
                    index={index}
                    img={item.img}
                    link={item.link}
                  />
                ))}
                {item.slide4?.map((item, index) => (
                  <InvestorsCard
                    index={index}
                    img={item.img}
                    link={item.link}
                  />
                ))}
                {item.slide5?.map((item, index) => (
                  <InvestorsCard
                    index={index}
                    img={item.img}
                    link={item.link}
                  />
                ))}
                {item.slide6?.map((item, index) => (
                  <InvestorsCard
                    index={index}
                    img={item.img}
                    link={item.link}
                  />
                ))}
                {item.slide7?.map((item, index) => (
                  <InvestorsCard
                    index={index}
                    img={item.img}
                    link={item.link}
                  />
                ))}
              </SwiperSlide>
            ))}
            <div className={`${screenType.isMobile && 'h-4 mt-10'} flex justify-center lg:justify-between w-full`}>
              <div className={`swiper-pagination flex lg:justify-start justify-center lg:mt-20`}/>
            </div>
          </Swiper>
          <div className={`hidden lg:flex -mt-9 justify-end z-10 relative`}>
            <div
              onClick={() => swiperInstance.slidePrev()}
              className={`swiper-button-prev cursor-pointer flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[#474747] mr-8`}
            >
              <img src="/images/arrow.svg" alt="" className="" />
            </div>
            <div
              onClick={() => swiperInstance.slideNext()}
              className={`swiper-button-next cursor-pointer flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[#474747]`}
            >
              <img
                src="/images/arrow.svg"
                alt=""
                className="transform rotate-180 "
              />
            </div>
          </div>
        </div>
      </Container>
      <Line />
    </>
  );
}
