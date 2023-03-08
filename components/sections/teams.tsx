import React, { useEffect, useState } from "react";
import "swiper/css/pagination";
import "swiper/css";
import Container from "../wrappers/gridContainer";
import CardTeam from "../atoms/cardTeam";
import { FormattedHTMLMessage } from "../atoms/FormattedMessage";

const businessTeam: Array<{ img: string; name: string }> = [
  { img: "ave", name: "Nataly Ave" },
  { img: "semerikova", name: "Nataliya S." },
  { img: "burieva", name: "Layli B." },
  { img: "dziatkovskii", name: "Anton Dziatkovskii" },
  { img: "forbes", name: "John Forbes" },
  { img: "erhan", name: "Anzhelika Erhan" },
  { img: "safronov", name: "Anton S. " },
];

const engineeringTeam: Array<{ img: string; name: string }> = [
  { img: "magomed", name: "Rasul Magomed" },
  { img: "ezerskaja", name: "Kate Es." },
  { img: "k", name: "Federico К" },
  { img: "po", name: "Serge Po" },
  { img: "deni", name: "Basil Deni" },
  { img: "stark", name: "Tim Stark" },
  { img: "adil", name: "Alex Adil" },
  { img: "rustamov", name: "Khayrullo R." },
  { img: "olzhas", name: "Olzhas" },
  { img: "karyukin", name: "Stanislav K." },
  { img: "karyukinD", name: "Denis K." },
];

const mevTeam: Array<{ img: string; name: string }> = [
  { img: "ovi", name: "Kate Ovi" },
  { img: "kant", name: "Alena Kant" },
  { img: "mamyth", name: "Meko Mamyth" },
  { img: "lee", name: "Nataly Lee" },
  { img: "drobyshevska", name: "Xenia D." },
  { img: "thompson", name: "Aiza Thompson" },
  { img: "generator", name: "Purr Generator" },
  { img: "d", name: "Nguyễn D" },
  { img: "strange", name: "Dr. Strange" },
  { img: "lin", name: "Eric Lin" },
  { img: "huang", name: "I-Chan Huang" },
  { img: "ma", name: "Michael Ma" },
  { img: "peng", name: "Jia Peng" },
  { img: "tong", name: "Michael Tong" },
  { img: "shen", name: "Stefan Shen" },
  { img: "wang", name: "Tomas Wang" },
];

const titles = [
  // "platinum business team", 
  <FormattedHTMLMessage id='page.main.teams.business'/>,
  // "Engineering team", 
  <FormattedHTMLMessage id='page.main.teams.engineering'/>,
  // "Mev team"
  <FormattedHTMLMessage id='page.main.teams.mev'/>,
];
const teams = ["business", "engineering", "mev"];

const Teams = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(0);
  const [lim, setLim] = useState(0);
    //TODO should be rewritten using intersection observers logo
  useEffect(() => {
    //@ts-ignore
    let scrollMin = document.getElementById("teams")?.offsetTop + 80; //@ts-ignore
    let scrollMax = document.getElementById("ourPortfolio")?.offsetTop - window.innerHeight / 1;
    let limit = scrollY - scrollMin; //@ts-ignore
    let bT = document.getElementById("businessT")?.offsetTop - 80; //@ts-ignore
    let eT = document.getElementById("engineeringT")?.offsetTop - 120; //@ts-ignore
    let mT = document.getElementById("mevT")?.offsetTop - 120;
    function onScrolling() {
      setScrollY(window.scrollY);
      if (window.scrollY >= scrollMin && window.scrollY <= scrollMax)
        setLim(limit);
      if (window.scrollY >= scrollMin + bT && window.scrollY < scrollMin + eT)
        setCurrentTeam(0);
      else if (
        window.scrollY >= scrollMin + eT &&
        window.scrollY < scrollMin + mT
      )
        setCurrentTeam(1);
      else if (window.scrollY >= scrollMin + mT) setCurrentTeam(2);
    }
    // console.log('min',scrollMin)
    // console.log('max',scrollMax)
    // console.log('scroll',scrollY)
    // console.log('lim',limit)
    onScrolling();
    window.addEventListener("scroll", onScrolling);
    return () => window.removeEventListener("scroll", onScrolling);
  }, [scrollY]);

  return (
    <Container id="teams" className="gap-y-0 py-[80px] relative">
      <div className={`col-span-6 grid grid-cols-6 sticky top-0 h-max`}>
        <div className={` col-span-5 `}>
          <div className="relative min-h-[250px] xxl:min-h-[350px] ">
            {/* TODO move to single component */}
            {teams.map((image, imageIndex) => (
              <img
                className={`${
                  currentTeam === imageIndex
                    ? "showContentNavBar opacity-100"
                    : "hideContentNavBar opacity-0"
                } lg:top-10 3xl:top-0 absolute`}
                src={`/images/teams/${teams[imageIndex]}/main.webp`}
                alt=""
              />
            ))}
          </div>
          <p className="mt-14 3xl:mt-24 uppercase text-4xl-h-xs xl:text-7xl-h font-bold tracking-03em">
            {titles[currentTeam]}
          </p>
          <div className="hidden md:flex flex-col mt-4">
            {Array(3).fill(0).map((item, index) => (
                <div
                className={`${
                  index === currentTeam ? "bg-[#0066FF]" : "bg-[#4D4D4D]"
                } 
                              h-6 w-1 mb-2 rounded-[3px] transition-all duration-500`}
                ></div>
            ))}
          </div>
        </div>
      </div>
    {/* TODO change to array map method + use intersection observer api */}
      <div className="col-span-6 flex flex-col">
        <div id="businessT" className="grid grid-cols-6 gap-4 mb-24">
          {businessTeam.map((item, index) => (
            <CardTeam
              img={item.img}
              team={"business"}
              name={item.name}
              key={index}
            />
          ))}
        </div>

        <div id="engineeringT" className="grid grid-cols-6 gap-4 mb-24">
          {engineeringTeam.map((item, index) => (
            <CardTeam
              img={item.img}
              team={"engineering"}
              name={item.name}
              key={index}
            />
          ))}
        </div>

        <div id="mevT" className="grid grid-cols-6 gap-4 mb-10">
          {mevTeam.map((item, index) => (
            <CardTeam
              img={item.img}
              team={"mev"}
              name={item.name}
              key={index}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Teams;
