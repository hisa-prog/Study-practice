import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { InvestorsData } from "../data/investorsData";
import useResize from "../hooks/useResolution";
import { LanguageContext } from "../../contexts/LanguageContext";
import React from "react";


const headerDropDownLast = [
  {
    text: "QDeFi",
    link: "https://qdefi.io/",
  },
  {
    text: "DeFi",
    link: "https://platinumdefi.com/",
  },
  {
    text: "NFT",
    link: "https://platinumdefi.com/nft",
  },
  {
    text: "Code Audit",
    link: "https://platinum.fund/en/audit",
  },
  {
    text: "Listing",
    link: "https://platinum.fund/en/listing",
  },
  {
    text: "IEO",
    link: "https://platinum.fund/en/ieo",
  },
  {
    text: "Design",
    link: "https://www.prttps.pro",
  },
  {
    text: "Marketing",
    link: "https://platinum.fund/en/marketing",
  },
  {
    text: `Fundraising Q Platform`,
    link: "https://platinum.fund/en/otc",
  },
  {
    text: "Legal",
    link: "https://platinum.fund/en/legal",
  },
  {
    text: "STO",
    link: "https://platinum.fund/en/sto",
  },
  {
    text: "Video",
    link: "https://platinum.fund/en/video-streaming-service",
  },
  {
    text: "DeFi Rating",
    link: "https://platinum.fund/en/qdefirating",
  },
  {
    text: "Other",
    link: "disable",
  },
];

const languages = [
  'en', 'ja', 'ko', 'zh'
]

const getInvestors = () => {
  let investors: { img: string; link: string }[] = [];
  InvestorsData.forEach(
    (item: { [key: string]: { img: string; link: string }[] }) => {
      for (let value of Object.values(item)) {
        investors = [...investors, ...value];
      }
    }
  );
  return investors;
};
export default function Header({isFixed = false}) {
  const [isShown, setIsShown] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(true);
  const [isOpenLangBar, setIsOpenLangBar] = useState(false)
  const [showLangs, setShowLangs] = useState(false)
  const investors = getInvestors();
  const res = useResize();
  
  const Router = useRouter();
  const { route = '/', query = {} } = Router

	const path = Object.entries(query).reduce((a, c) => {
		if (c[0] === 'language') return a //@ts-ignore
		return a.replace(`[${c[0]}]`, c[1])
	}, route)

  const { language, setLanguage } = useContext(LanguageContext)

  const headerItems = [
    {
      text: "Platinum VC",
      link: `/${language}/`,
    },
    {
      text: "Incubator",
      link: `/${language}/incubator/`,
    },
    {
      text: "Hedge & mev",
      link: `/${language}/mev/`,
    },
    {
      text: "Careers",
      link: `/${language}/careers/`,
    },
    {
      text: "About",
      link: `/${language}/company/`,
    },
    {
      text: "Blog",
      link: "https://news.platinum.fund/en",
    },
    {
      text: "Contact",
      link: `/${language}/contact/`,
    },
  ];
  

  useEffect(() => {
    if (!res.isMobile) setIsOpenServices(true);
    else setIsOpenServices(false);
  }, [res.isMobile]);

  useEffect(() => {
    if (isShown) document.body.classList.add("bodyNoScroll");
    else if(!isShown) document.body.classList.remove("bodyNoScroll");
  }, [isShown]);

  const toggleNavBar = () => {
    if (!isShown) {
      setIsShown(true);
      setTimeout(() => setShowContent(true), 500);
    } else if (isShown) {
      setShowContent(false)
      setTimeout(() => setIsShown(false), 500)
    }
  };

  const toggleLangBar = () => {
    if (!isOpenLangBar) {
      setIsOpenLangBar(true);
      setTimeout(() => setShowLangs(true), 500);
    } else if (isOpenLangBar) {
      setShowLangs(false)
      setTimeout(() => setIsOpenLangBar(false), 500)
    }
  };

  return (
    <>
      <div className={`${!isFixed ? 'relative' : 'fixed top-0 w-screen z-50'} font-lexendDeca`}>
        <div
          className={`z-50 relative flex items-center justify-between p-4 md:justify-center mx-auto`}
        >
          <a href="/">
            <img src="/images/logoHeader.svg" alt="" />
          </a>

          <div
            className={`hidden md:flex items-center justify-between w-10/12 md:py-6 lg:py-10 md:px-[10%]`}
          >
            {headerItems.map((item, index) => (
              <a
                key={index}
                onClick={() => {
                  setShowContent(false)
                  setTimeout(() => setIsShown(false), 500)
                  Router.push(`${item.link}`)
                }}
                className={`${Router.asPath === item.link && 'text-[#ACACAC]'} cursor-pointer hover:text-blue-hover active:text-blue-active uppercase pb-2 flex flex-col items-center relative`}
              >
                {item.text}
                <div className={`${Router.asPath === item.link ? 'opacity-100' : 'opacity-0'} border-b-2 border-blue-hover absolute top-1 self-center text-transparent w-6 transition-all duration-500`}>.</div>
              </a>
            ))}
            <div className="relative">
              <div onClick={toggleLangBar} className="pb-2 cursor-pointer uppercase">{language}</div>
              <div className={`${isOpenLangBar ? 'h-30' : 'h-0'} transition-all duration-500 absolute -left-4 top-8 bg-blue-hover z-10`}>
                <div className={`${showLangs ? "showContentNavBar opacity-100" : "hideContentNavBar opacity-0"} flex flex-col items-center`}>
                  {languages.map((item, index) => (
                    <a 
                      key={index} 
                      href={path.replace('[language]', `${item}`)}
                      onClick={() => {
                        setLanguage(item)
                        }}>
                        <div onClick={toggleLangBar} className={`${item === language ? 'hidden' : 'flex'} h-10 py-2 px-4 cursor-pointer uppercase`}>
                          {item}
                        </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`md:relative`}
          >
            <div onClick={toggleNavBar} className={`cursor-pointer flex gap-2`}>
              {!isShown ? (
                <>
                  <img
                    className={`md:w-6`}
                    src="/images/menuBurger.svg"
                    alt="burger-menu"
                    height={8}
                    width={24}
                  />
                  <span
                    className={
                      "font-lexendDeca text-thin-m tracking-02em text-middle-gray hover:text-blue-hover active:text-blue-active"
                    }
                  >
                    MENU
                  </span>
                </>
              ) : (
                <>
                  <img
                    className={`${
                      !isShown ? "hidden" : "block"
                    } z-50`}
                    src="/images/crossMenu.svg"
                    alt="cross"
                    height={2}
                    width={24}
                  />
                  <span
                    className={
                      "font-lexendDeca text-thin-m tracking-02em text-middle-gray z-20 hover:text-blue-hover active:text-blue-active"
                    }
                  >
                    CLOSE
                  </span>
                </>
              )}
            </div>
          </div>
          <div
            className={`${
              isShown ? "translate-x-0" : "-translate-x-full"
            } fixed w-full h-screen bg-main-black inset-0 overflow-scroll md:overflow-hidden transition-all duration-500`}
          >
            <div
              className={`${
                showContent ? "showContentNavBar opacity-100" : "hideContentNavBar opacity-0"
              } transition-all duration-500 h-full`}
            >
              <div className={"py-[3.5%] mx-4 md:mx-[60px] flex items-center"}>
                <img
                  src={"/images/logo.svg"}
                  alt={"Platinum logo"}
                  height={30}
                  width={168}
                />
              </div>
              <div className="md:h-[31.5%] grid grid-cols-2 md:grid-cols-7 
              md:text-2xl-m lg:text-2xl-sm text-center">
                {headerItems.map((item, index) => (
                  <a key={index} 
                  onClick={() => {
                    setShowContent(false)
                    setTimeout(() => setIsShown(false), 500)
                    Router.push(`${item.link}`)
                  }}
                  className={`${index === headerItems.length - 1 ? 'col-span-2' : 'col-span-1'} cursor-pointer bg-main-black hover:bg-main-blue flex font-lexendDeca
                  uppercase items-center justify-center border border-lines-primary md:hidden h-[15.6vh] md:h-full`}>
                    {item.text}
                  </a>
                ))}
                {headerDropDownLast.slice(0, headerDropDownLast.length / 2).map((item, index) => (
                  <a href={item.link} target="_blank" key={item.text + index} className="text-2xl-l col-span-1 cursor-pointer bg-main-black hover:bg-main-blue hidden md:flex font-lexendDeca
                  items-center justify-center border border-lines-primary h-[15.6vh] md:h-full">
                      {item.text}
                  </a>
                ))}
              </div>

              <div
                className={
                  "opacity-30 marqueeSideBar py-15 md:py-[4.5%] 3xl:py-[4%] h-55 md:h-[22%] hidden md:block"
                }
              >
                <div className={"w-[3000%] flex"}>
                  <span className={"w-[150%] flex justify-around"}>
                    {investors.map((investor, index) => (
                      <img
                        key={index + investor.link}
                        src={investor.img}
                        alt={investor.link}
                        height={72}
                        width={140}
                      />
                    ))}
                  </span>
                  <span className={"w-[150%] flex justify-around"}>
                    {investors.map((investor, index) => (
                      <img
                        key={index + investor.link}
                        src={investor.img}
                        alt={investor.link}
                        height={72}
                        width={140}
                      />
                    ))}
                  </span>
                </div>
              </div>

              {res.isMobile && (
                <div
                  className={
                    "flex justify-center border-lines-primary" +
                    " py-9 border"
                  }
                  onClick={() => setIsOpenServices(!isOpenServices)}
                >
                  <img
                    src={"/images/menuArrow.svg"}
                    alt={"arrow"}
                    width={12}
                    height={16}
                    className={isOpenServices ? "rotate-180" : ""}
                  />
                  <div className={"uppercase text-xl-m ml-2"}>
                    Services ({headerDropDownLast.length - 1}+)
                  </div>
                </div>
              )}
              
              {isOpenServices && !res.isMobile && (
                <div className="md:h-[31.5%] grid grid-cols-2 md:grid-cols-7">
                  {headerDropDownLast.slice(headerDropDownLast.length / 2, headerDropDownLast.length).map((item, index) => (
                    <a href={item.link != 'disable' ? item.link : ''} target="_blank">
                      <div className={`${item.link === 'disable' ? 'text-footer-gray' : 'hover:bg-main-blue'} 
                      text-2xl-l col-span-1 text-center cursor-pointer bg-main-black flex font-lexendDeca
                      items-center justify-center border border-lines-primary h-[15.6vh] md:h-full`}>
                        {item.text}
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {isOpenServices && res.isMobile && (
                <div className="md:h-[31.5%] grid grid-cols-2 md:grid-cols-7">
                  {headerDropDownLast.map((item, index) => (
                    <a href={item.link != 'disable' ? item.link : ''} target="_blank">
                      <div className={`${item.link === 'disable' ? 'text-footer-gray' : 'hover:bg-main-blue'} 
                      text-lg-l col-span-1 text-center cursor-pointer bg-main-black flex font-lexendDeca
                      items-center justify-center border border-lines-primary h-[15.6vh] md:h-full`}>
                        {item.text}
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {res.isMobile && isOpenServices && (
                <div
                  className={
                    "flex justify-center py-9 border border-lines-primary bg-main-black"
                  }
                  onClick={() => setIsOpenServices(!isOpenServices)}
                >
                  <img
                    src={"/images/menuArrow.svg"}
                    alt={"arrow"}
                    width={12}
                    height={16}
                    className={"rotate-180"}
                  />
                  <div className={"uppercase text-xl-m ml-2"}>hide</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
