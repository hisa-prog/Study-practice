import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import "swiper/css";
import Container from "../wrappers/gridContainer";
import { useState } from "react";
import { TestimonialsData, TestimonialsMobileData } from "../data/testimonialsData";
import useResolution from "../hooks/useResolution";
import { FormattedHTMLMessage } from "../atoms/FormattedMessage";

export default function Testimonials() {
    const [swiperInstance, setSwiperInstance] = useState() as any
    const screenType = useResolution();

    return (
        <>
            <Container className="h-screen">
                <div className={`col-span-full flex justify-between items-start relative`}>
                    <div className="flex flex-col justify-center">
                        <p className={`font-bold text-4xl lg:text-[60px] uppercase`}>
                            {/* Testimonials */}
                            <FormattedHTMLMessage id='page.main.testimonials.title' />
                        </p>
                        <p className="hidden md:block font-lexendDeca font-light text-base mt-5 text-gray-text">
                            {/* More than 100 different companies trust us! <br/>
                            And We can safely say that we are making a quality product thanks <br/>
                            to our partners and users who help the project achieve specific goals <br/> and objectives. */}
                            <FormattedHTMLMessage id='page.main.testimonials.subtitle' />
                        </p>
                    </div>
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
                {!screenType.isMobile && (
                    <div className="col-span-full hidden lg:block">
                        <Swiper
                            speed={700}
                            modules={[Mousewheel, Pagination, Navigation]}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            //     el: '.swiper-pagination',
                            // }}
                            // mousewheel={true}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => setSwiperInstance(swiper)}
                        >
                            {TestimonialsData.map((item, index) => (
                                <SwiperSlide key={index} className={`hidden lg:block`}>
                                    <div className={`hidden lg:grid grid-cols-2 gap-7`}>
                                        <div className={`grid grid-cols-12 h-[300px]`}>
                                            <img className={`w-auto absolute top-[15%]`} src={item.img1} alt='' />
                                            {/* <img className={`w-auto absolute bottom-4 left-8`}
                                                src={item.logo1}
                                                alt='' /> */}
                                            <div className={`flex col-start-6 col-span-7 flex-col justify-between py-6`}>
                                                <p className={`text-sm font-lexendDeca font-light`}>{item.description1}</p>
                                                <div>
                                                    <p className={`text-2xl-md font-lexendDeca`}>{item.shortName1}</p>
                                                    <p className={`text-thin-m mt-1.5 font-lexendDeca uppercase tracking-02em text-gray-text`}>{item.company1}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`grid grid-cols-12 h-[300px]`}>
                                            <img className={`w-auto absolute top-[15%]`} src={item.img2} alt='' />
                                            {/* <img className={`w-auto absolute bottom-4 left-8`}
                                                src={item.logo2}
                                                alt='' /> */}
                                            <div className={`flex col-start-6 col-span-7 flex-col justify-between py-6`}>
                                                <p className={`text-sm font-lexendDeca font-light`}>{item.description2}</p>
                                                <div>
                                                    <p className={`text-2xl-md font-lexendDeca`}>{item.shortName2}</p>
                                                    <p className={`text-thin-m mt-1.5 font-lexendDeca uppercase tracking-02em text-gray-text`}>{item.company2}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                            {/* <div className={`hidden lg:flex justify-center w-full`}>
                                <div className={`swiper-pagination flex justify-center`} />
                            </div> */}
                        </Swiper>
                    </div>
                )}
                {screenType.isMobile && (
                    <div className={`col-span-full lg:hidden h-full -mt-20`}>
                        <Swiper
                            speed={700}
                            modules={[Mousewheel, Pagination, Navigation]}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            //     dynamicBullets: true,
                            // }}
                            // mousewheel={true}
                            spaceBetween={50}
                            slidesPerView={1}
                        >
                            {TestimonialsMobileData.map((item, index) => (
                                <SwiperSlide key={index} className={`lg:hidden pb-0`}>
                                    <div className={` flex flex-col h-[525px]`}>
                                        <div className={`relative`}>
                                            <img className={`mb-4`} src={item.img} alt='' />
                                            <img className={`absolute bottom-4 left-8 w-[120px]`} src={item.logo} alt='' />
                                        </div>
                                        <div className={`flex flex-col justify-between h-full`}>
                                            <p className={`text-sm font-lexendDeca font-light`}>{item.description}</p>
                                            <div className={``}>
                                                <p className={`text-2xl-md font-lexendDeca`}>{item.shortName}</p>
                                                <p className={`text-thin-m mt-1.5 font-lexendDeca uppercase tracking-02em text-gray-text`}>{item.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}     
                        </Swiper>
                    </div>
                )}
            </Container>
            <div className="flex items-center mb-5 px-4 md:hidden -mt-20">
                    <p className="text-xs font-lexendDeca uppercase">Swipe</p>
                    <img src='images/careers/arrow-right.svg' alt='arrow-right' className="ml-2 w-4" />
            </div>
        </>
    )
}