import React from "react";
import { FormattedHTMLMessage } from "../atoms/FormattedMessage";
import Line from "../atoms/line";
import Container from "../wrappers/gridContainer";

const partnersList = [
  "1",
  // "2",
  "3",
  "4",
  "5",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  // "15",
  // "17",
];

const runningLine1: Array<{ img: string; link: string }> = [
    { img: "1", link: "https://kabyarena.com" },
    { img: "2", link: "https://bitquery.io" },
    { img: "3", link: "https://www.fomolab.io" },
    { img: "4", link: "" },
    { img: "5", link: "https://www.itering.io" },
    { img: "6", link: "https://darwinia.network" },
    { img: "7", link: "https://www.metaverse-lab.net" },
    { img: "8", link: "https://www.himo.world" },
    { img: "9", link: "https://leagueofpharaohs.com" },
    { img: "10", link: "https://www.basics.capital" },
    { img: "11", link: "https://moonbootscapital.io" },
    { img: "12", link: "https://corestarter.com" },
    { img: "13", link: "https://www.cytblockchain.ventures" },
    { img: "14", link: "https://phoenixpro.club" },
    { img: "15", link: "https://almoracapital.com" },
    { img: "16", link: "https://followtheseed.vc" },
    { img: "17", link: "https://oort.digital" },
    { img: "18", link: "https://www.crtlabs.io" },
  ];

const OurPartners = () => {
  return (
    <div id="ourPartners" className={`lg:mt-10`}>
      <Line />
      <Container className="gap-y-0 py-[80px] overflow-x-hidden h-screen">
        <div className="col-span-full text-[36px] leading-[40px] lg:text-[60px] lg:leading-[67px] uppercase font-blinker mb-[50px] font-bold tracking-[0.03em]">
          {/* Our Partners */}
          <FormattedHTMLMessage id="page.main.outPartners.title"/>
        </div>
        <div className="col-span-full grid grid-cols-3 gap-4 md:grid-cols-8 lg:grid-cols-12 mb-15">
          {partnersList.map((item, index) => {
            return (
              <img
                className={`${
                  index === 6 ? 'md:col-span-3 justify-self-end' 
                  : index === partnersList.length - 1  ? 'md:col-span-3' 
                  : 'md:col-span-2'} 
                  col-span-1`}
                key={`partner_${index}`}
                src={`/images/ourPartners/${item}.png`}
                alt=""
              />
            );
          })}
        </div>
        <div className={"marquee lg:py-4 h-48"}>
          <div className={"w-[3000%] flex"}>
            <span className={"w-[150%] flex justify-around"}>
              {runningLine1.map((partners, index) => (
                <a href={partners.link} target="_blank" className="mr-6 w-[300px] h-[200px]">
                  <img
                    key={index + partners.link}
                    src={`/images/partners/${partners.img}.png`}
                    alt={partners.link}
                    width={264} height={176}
                  />
                </a>
                  
              ))}
            </span>
          </div>
        </div>
      </Container>
      <Line />
    </div>
  );
};

export default OurPartners;
