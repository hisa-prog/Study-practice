import { useRouter } from 'next/router'
import React from 'react'
import Container from '../wrappers/gridContainer'
import useResize from '../hooks/useResolution'
import { FormattedHTMLMessage } from '../atoms/FormattedMessage'

const buttons = [
    {
        text: <FormattedHTMLMessage id={"page.main.firstScreen.Butt1"} />,
        link: '#whatWeDo',
    },
    {
        text: <FormattedHTMLMessage id={"page.main.firstScreen.Butt2"} />,
        link: '#syndicate',
    },
    {
        text: <FormattedHTMLMessage id={"page.main.firstScreen.Butt3"} />,
        link: '#ourPartners',
    },
    {
        text: <FormattedHTMLMessage id={"page.main.firstScreen.Butt4"} />,
        link: '#ourPortfolio',
    },
]

const Main = () => {
    const router = useRouter()
    const {isMobile} =useResize()
    return (
        <>
            <div className="absolute top-0 bg-cover bg-mainBg bg-center w-full h-[90vh] lg:h-screen z-0">
                <div className={'bg-shadowMainTop h-full w-full'}/>
                <div className={'bg-shadowMain h-full w-full'}/>
            </div>
            <div className="relative pb-20 ml:pb-0 h-[81vh] lg:h-[86vh]">
                <Container className="pt-[120px] md:pt-[64px] lg:pt-21.5 relative z-10 ">
                    <div className="col-span-full mx-auto text-center">
                        <a 
                        ><img src="/images/logo.svg" alt=""
                              className="mx-auto w-[236px] h-[42px] md:w-auto md:h-auto"/></a>
                        <div
                            className="text-[16px] leading-[22.4px] md:text-[22px] md:leading-[30.8px] font-lexendDeca mt-5">
                            <span className="text-main-blue">Platinum </span>
                            {/* <span className="">is a Australian venture fund with a seven-year history. <br/>
                            We started our journey back in 2015 and have already helped hundreds of projects. <span className='text-3xl'>🇦🇺</span>
                            </span> */}
                            <span className=""><FormattedHTMLMessage id={"page.main.firstScreen.subtitle"} /> <span className='text-3xl'>🇦🇺</span>
                            </span>
                        </div>
                    </div>
                    <div
                        className={`hidden max-w-218 mx-auto text-lg-xs-s gap-6 col-span-full md:flex items-center justify-between md:mt-14`}>
                        {buttons.map((items, index) => (
                            <a
                                className={`flex rounded hover:bg-main-blue hover:bg-opacity-[0.35] items-center justify-center w-[193px] py-4 border font-lexendDeca border-main-blue col-span-3`}
                                href={items.link}
                                key={index}>
                                {items.text}
                            </a>
                        ))}
                    </div>
                    <div className={'md:hidden col-span-full px-4 pt-7'}>
                        <div className={'grid grid-cols-4 gap-7'}>
                            {buttons.map((items, index) => (
                                <a
                                    className={`flex items-center hover:bg-main-blue hover:bg-opacity-[0.35] rounded justify-center py-4 border text-xs-h font-lexendDeca font-semibold border-main-blue col-span-2 `}
                                    href={items.link}
                                    key={index}>
                                    {items.text}
                                </a>
                            ))}
                        </div>
                    </div>

                </Container>
                <div className={'bottom-0 absolute flex justify-center z-0 w-full overflow-x-hidden'}>
                   <img loading='lazy' src={isMobile ? '/images/mainImageMobile.png' : '/images/mainImage.png'} alt="mainImage" className='z-0 w-screen' />
                </div>
            </div>
        </>
    )
}

export default Main