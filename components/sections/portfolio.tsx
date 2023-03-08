import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import "swiper/css";
import Container from "../wrappers/gridContainer";
import React, { useState } from "react";
import { PotrfolioData } from "../data/potrfolioData";
import Line from "../atoms/line";
import PortfolioCard from "../atoms/portfolioCard";
import { FormattedHTMLMessage } from "../atoms/FormattedMessage";

export default function Portfolio() {
    const [swiperInstance, setSwiperInstance] = useState() as any

    return (
        <>
            <Line />
            <Container>
                <div id="ourPortfolio" className={`col-span-full flex justify-between items-center relative`}>
                    <p className={`font-bold text-4xl lg:text-[60px] uppercase`}>
                        {/* Portfolio */}
                        <FormattedHTMLMessage id='page.main.portfolio.title' />
                    </p>
                    <div className={`hidden lg:flex`}>
                        <div
                            onClick={() => swiperInstance.slidePrev()}
                            className={`swiper-button-prev cursor-pointer flex justify-center items-center rounded-full w-[50px] h-[50px] bg-lines-primary hover:bg-lines-gray mr-8`}>
                            <img
                                src="/images/arrow.svg"
                                alt=""
                                className=""
                            />
                        </div>
                        <div
                            onClick={() => swiperInstance.slideNext()}
                            className={`swiper-button-next cursor-pointer flex justify-center items-center rounded-full w-[50px] h-[50px] bg-lines-primary hover:bg-lines-gray`}>
                            <img
                                src="/images/arrow.svg"
                                alt=""
                                className="transform rotate-180 "
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-full">
                    <Swiper
                        speed={700}
                        modules={[Mousewheel, Pagination, Navigation]}
                        loop={true}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                        // mousewheel={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                    >
                        {PotrfolioData.map((item, index) => (
                            <SwiperSlide key={index} className={`grid grid-cols-3 lg:grid-cols-6 items-center gap-7`}>
                                {item.slide1?.map((item, index) => (
                                    // <div key={index} className={`col-span-1`}>
                                    //     <a className={``} href={item.link} target='_blank'>
                                    //         <img src={item.img} alt="" className="" />
                                    //     </a>
                                    // </div>
                                    <PortfolioCard index={index} img={item.img} link={item.link}/>
                                ))}
                                {item.slide2?.map((item, index) => (
                                    <PortfolioCard index={index} img={item.img} link={item.link} className={item?.className}/>
                                ))}
                            </SwiperSlide>
                        ))}
                        <div className={`flex justify-center w-full mt-10 lg:mt-0`}>
                            <div className={`swiper-pagination flex justify-center`} />
                        </div>
                    </Swiper>
                </div>
            </Container>
            <Line />
        </>
    )
}