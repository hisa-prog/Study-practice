import React from "react"
import { FormattedHTMLMessage } from "../atoms/FormattedMessage"
import Line from "../atoms/line"
import Container from "../wrappers/gridContainer"

const strongDevSupportList : Array<{img: string, link: string}> = [
    { img: "binance", link: 'https://www.binance.com'},
    { img: 'morganStanley', link: 'https://www.morganstanley.com'},
    { img: 'hashkey', link: 'https://www.hashkey.com'},  
    {img: 'sap', link: 'https://www.concur.com'}, 
    {img: '3m', link: 'https://www.3m.com'}, 
    {img: 'stateStreet', link: 'https://www.statestreet.com'}, 
    {img: 'paxful', link: 'https://paxful.com'}, 
    {img: 'accenture', link: 'https://www.accenture.com'}, 
    {img: 'alibaba', link: 'https://www.alibaba.com/?spm=a2700.details.debelsubf.1.51446bbcdPUB9h'}, 
    {img: 'amazon', link: 'https://www.amazon.com'},
]

const StrongDevSupport = () => {
    return (
        <div>
            {/* <Line /> */}
            <Container className="gap-y-0 py-[80px]">
                <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2  text-[36px] leading-[40px] lg:text-[60px] lg:leading-[67px] md:text-center uppercase font-blinker mb-6 font-bold tracking-[0.03em]">
                    {/* Strong development support */}
                    <FormattedHTMLMessage id='page.main.strongDevelopmentSupport.title' />
                </div>
                <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2 text-base lg:text-[20px] lg:leading-[35px] md:text-center mb-10 lg:mb-[60px] font-lexendDeca tracking-[0.03em]">
                    {/* Our developers have strong industry background and come from global top-tier tech firms. For example, Finance, Morgan Stanley, Accenture, Amazon, SAP Concur, Alibaba. We have in-depth exchanges with some well-known Developer Communities across the world. */}
                    <FormattedHTMLMessage id='page.main.strongDevelopmentSupport.subtitle' />
                </div>
                <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2 gap-4 grid grid-cols-3 md:grid-cols-8 lg:grid-cols-10 mx-auto">
                    {
                        strongDevSupportList.map((item, index) => {
                            return (
                                <a href={item.link} target='_blank' className="col-span-1 md:col-span-2" key={`support-${index}`}>
                                    <img src={`/images/strongDevSupport/${item.img}.png`} alt='' />
                                </a>
                            )
                        })
                    }
                </div>
            </Container>
            <Line />
        </div>
    )
}

export default StrongDevSupport