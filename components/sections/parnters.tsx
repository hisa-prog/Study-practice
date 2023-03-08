import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import "swiper/css";
import Container from "../wrappers/gridContainer";
import { useEffect, useState } from "react";
import Line from "../atoms/line";
import useResolution from "../hooks/useResolution";

const partners = [
    {
        img: '1',
    },
    {
        img: '2',
    },
    {
        img: '3',
    },
    {
        img: '4',
    },
    {
        img: '5',
    },
    {
        img: '6',
    },
    {
        img: '7',
    },
    {
        img: '8',
    },
    {
        img: '9',
    },
    {
        img: '10',

    },
    {
        img: '11',

    },
    {
        img: '12',

    },
    {
        img: '13',

    },
    {
        img: '14',

    },
    {
        img: '15',

    },
    {
        img: '16',
    },
    {
        img: '17',
    },
    {
        img: '18'
    }
]

export default function Partners() {
    const [swiperInstance, setSwiperInstance] = useState() as any
    const screenType = useResolution();

    return (
        <>
            <Line />
            <Container>
                <div className={`col-span-full flex justify-between items-center relative`}>
                    <p className={`font-bold text-4xl lg:text-[60px] uppercase`}>Partners</p>
                    <div className={`hidden lg:flex`}>
                        <div
                            onClick={() => swiperInstance.slidePrev()}
                            className={`swiper-button-prev cursor-pointer flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[#474747] mr-8`}>
                            <img
                                src="/images/arrow.svg"
                                alt=""
                                className=""
                            />
                        </div>
                        <div
                            onClick={() => swiperInstance.slideNext()}
                            className={`swiper-button-next cursor-pointer flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[#474747]`}>
                            <img
                                src="/images/arrow.svg"
                                alt=""
                                className="transform rotate-180 "
                            />
                        </div>
                    </div>
                </div>
                {!screenType.isMobile && (
                    <div className="col-span-full">
                        <Swiper
                            speed={700}
                            modules={[Mousewheel, Pagination, Navigation]}
                            loop={true}
                            pagination={{
                                clickable: true,
                                el:'.swiper-pagination',
                            }}
                            // mousewheel={true}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSwiper={(swiper) => setSwiperInstance(swiper)}
                        >
                            {partners.map((item, index) => (
                                <SwiperSlide key={index} className={``}>
                                    <div className={``}>
                                        <img className={`block`} src={`/images/partners/${item.img}.png`} alt='' />
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className={`flex justify-center w-full`}>
                                <div className={`swiper-pagination flex justify-center`} />
                            </div>
                        </Swiper>
                    </div>
                )}
                {screenType.isMobile && (
                    <div className="col-span-full">
                        <Swiper
                            speed={700}
                            modules={[Mousewheel, Pagination, Navigation]}
                            loop={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            // mousewheel={true}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSwiper={(swiper) => setSwiperInstance(swiper)}
                        >
                            {partners.map((item, index) => (
                                <SwiperSlide key={index} className={``}>
                                    <div className={``}>
                                        <img className={``} src={`/images/partners/mob/${item.img}.png`} alt='' />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </Container>
        </>
    )
}