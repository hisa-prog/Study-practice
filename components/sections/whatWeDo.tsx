import React from "react"
import { FormattedHTMLMessage } from "../atoms/FormattedMessage"
import Container from "../wrappers/gridContainer"

const WhatWeDo = () => {
    return (
        <>
            <div id='whatWeDo' className={`relative`}>
                <Container className="pb-0 lg:pb-0 lg:pr-0 xxl:pr-[70px] lg:h-screen">
                    <div className={`col-span-full lg:col-span-6 mb-60 md:mb-[440px]lg:mb-40 mt-[20%]`}>
                        <p className={`col-span-full text-lg-s md:text-base uppercase tracking-[0.03em] font-blinker font-bold text-middle-gray`}>
                            {/* What we do */}
                            <FormattedHTMLMessage id="page.main.whatWeDo.title"/>
                        </p>
                        <p className={`text-4xl-h-s md:text-[57px] lg:text-7xl-h leading-[100%] font-blinker font-semibold`}>
                            {/* We help startups whose mission and vision to build a decentralized world. */}
                            <FormattedHTMLMessage id="page.main.whatWeDo.subtitle"/>
                        </p>
                    </div>
                </Container>
                <img className={`pl-4 md:pl-0 absolute right-0 bottom-0 xl:w-6/12 pr-4 md:pr-0`} src='/images/whatWeDo.png' alt='' />
            </div>
        </>
    )
}

export default WhatWeDo