import React from "react"
import { FormattedHTMLMessage } from "../atoms/FormattedMessage"
import Line from "../atoms/line"

const data = [
    {
        value: "130+",
        // name: "VCs",
        name: <FormattedHTMLMessage id="page.main.outSyndicate.nav1" />,
        img: 'vcs.svg',
    },
    {
        value: "80+",
        // name: "Angels",
        name: <FormattedHTMLMessage id="page.main.outSyndicate.nav2" />,
        img: 'angels.svg',
    },
    {
        value: "210+",
        // name: "Projects",
        name: <FormattedHTMLMessage id="page.main.outSyndicate.nav3" />,
        img: 'projects.svg',
    },
    {
        value: "300+",
        // name: "KOLs",
        name: <FormattedHTMLMessage id="page.main.outSyndicate.nav4" />,
        img: 'kols.svg',
    },
    {
        value: "2015",
        // name: "We are in crypto",
        name: <FormattedHTMLMessage id="page.main.outSyndicate.nav5" />,
        img: 'crypto.svg',
    },
]

const OurSyndicate = () => {
    return (
        <div id="syndicate" className={`grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 w-full mx-auto lg:h-screen`}>
            {/* <Line /> */}
            <div className="px-4 md:px-8 lg:px-16 col-span-full mt-[40px] lg:mt-[60px] flex justify-between items-center">
                <p className="text-[32px] leading-[40px] lg:text-[60px] lg:leading-[67px] uppercase font-blinker font-bold tracking-[0.03em]">
                    {/* OUR WEB3 INVESTORS SYNDICATE */}
                    <FormattedHTMLMessage id="page.main.outSyndicate.title" />
                </p>
                <div className="hidden lg:block py-4 px-8 bg-[#0066FF] uppercase rounded font-lexendDeca text-base cursor-pointer">
                    {/* About Syndicate */}
                    <FormattedHTMLMessage id="page.main.outSyndicate.button" />
                </div>
            </div>
            <div className="px-4 md:px-8 lg:px-16 col-span-full lg:mt-6 mt-5 mb-10 lg:mb-[60px]">
                <p className="font-lexendDeca text-base lg:text-2xl lg:w-[45%]">
                    {/* We never lead rounds, however we always follow decent deals lead by our WEB3 SYNDICATE */}
                    <FormattedHTMLMessage id="page.main.outSyndicate.subtitle" />
                </p>
                <div className="flex items-center justify-center lg:hidden py-4 px-8 mt-8 bg-[#0066FF] uppercase rounded font-lexendDeca text-base cursor-pointer">
                    {/* About Syndicate */}
                    <FormattedHTMLMessage id="page.main.outSyndicate.button" />
                </div>
            </div>
            <div className="col-span-full md:flex w-full mb-10 lg:mb-[60px]">
                {
                    data.map((item, index) => {
                        return (
                            <div key={`item_${index}`} className='border border-line-gray w-full py-6 md:pt-8 md:pb-8 lg:pt-[61px] lg:pb-[43px]'>
                                <div className="text-center justify-around flex md:flex-col items-center gap-x-10">
                                    <img className={``} src={`/images/sindycate/${item.img}`} alt={item.img} />
                                    <div className='flex flex-col'>
                                        <div className="w-1/2 md:w-auto text-6xl-m lg:text-[48px] lg:leading-[96px] md:mb-[14px]">
                                            {item.value}
                                        </div>
                                        <div className="text-base-m lg:text-lg lg:leading-[26px] text-[#ACACAC]">
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* <Line /> */}
        </div>
    )
}

export default OurSyndicate