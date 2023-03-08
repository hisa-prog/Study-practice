import React from "react"
import CardFindUs from "../atoms/cardFindUs"
import Line from "../atoms/line"
import Container from "../wrappers/gridContainer"

const logos : Array<{img: string, link: string}> = [
    {img: 'crunchbase', link: ''},
    {img: 'angelList', link: ''},
    {img: 'golden', link: ''},
    {img: 'pitchBook', link: ''},
]

const FindUs = () => {
    return (
        <div className={`mb-20`}>
            <Line />
            <Container className="gap-y-4 py-[80px]">
                <div className="col-span-4 md:col-span-8 lg:col-span-12 text-[33px] leading-[40px] lg:text-[60px] lg:leading-[67px] uppercase font-blinker mb-10 lg:mb-[50px] font-bold tracking-[0.03em]">You can find us here</div>
                {logos.map((item, index) => (
                    <CardFindUs img={item.img} key={index}/>
                ))}
            </Container>
            <Line />
        </div>
    )
}

export default FindUs