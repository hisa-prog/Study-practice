import type { NextPage } from "next";
import PlatinumMEVHedgeStrategies from "../../../components/sections/mev/platinumMEVHedgeStrategies";
import ReactFullpage from "@fullpage/react-fullpage";
import { employees } from "../../../components/data/employeesData";
import { useEffect } from "react";
import { WithLanguage } from "../../../services/withLanguage";
import { TranslationProvider } from "../../../components/atoms/TranslationProvider";
import { languageConfig } from "../../../i18n/language.config";
import MainScreen from "../../../components/sections/mev/mainScreen";

const PlatinumMev: NextPage = ({language} : any) => {
  
  useEffect(() => {
    document?.getElementsByClassName('fp-watermark')[0]?.classList?.add('waterMark')
    document?.getElementsByClassName('fp-watermark')[1]?.classList?.add('waterMark')
    document?.getElementsByClassName('fp-overflow')[0]?.classList?.add('fpOveflow')
  },[])
  return (
    <>
      <WithLanguage language={language}>
        <TranslationProvider>
          <div className="absolute top-0 bg-cover bg-mainBgDark bg-center bg-blend-darken w-full h-[100vh] z-0"></div>
          <ReactFullpage
            scrollingSpeed={1000}
            css3={true}
            fitToSection={true}
            keyboardScrolling={true}
            touchSensitivity={1}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section h-[89vh] lg:h-[100vh] flex relative">
                    <MainScreen />
                  </div>
                  {employees.map((item, index) => (
                    <div key={index} className="section h-[89vh] lg:h-[100vh]">
                      <div
                        key={index}
                        className={`h-[89vh] lg:h-[100vh] flex flex-col lg:flex-row relative font-mono`}
                      >
                        <div className={`pt-10 my-auto lg:pl-10 w-full px-4 md:px-8`}>
                          <div className={`maw-w-[935px] lg:w-8/12`}>
                            <h2 className={`text-3xl md:text-4xl-m lg:whitespace-pre lg:text-6xl-l font-bold mb-4 lg:mb-0`}>{item.title}</h2>
                          </div>
                          <div className={`lg:w-6/12 lg:mt-8`}>
                            <p className={`text-sm md:text-lg lg:text-2xl-m-l`}>{item.subtitle}</p>
                          </div>
                        </div>
                        <div className={`flex flex-col-reverse lg:items-end rounded-b-lg md:px-8 lg:px-0`}>
                          <img
                            className={`hidden absolute bottom-0 right-0 lg:block lg:max-w-[500px] xl:max-w-[700px] pointer-events-none`}
                            src={item.img}
                            alt=""
                          />
                          <img
                            className={`lg:hidden mt-4 pointer-events-none`}
                            src={item.mobImg}
                            alt=""
                          />
                          <div className={`absolute bg-black backdrop-blur-12px mx-4 mb-4 md:mx-0 md:mb-0 mt-10 lg:mt-0 bg-opacity-60 rounded-l-lg rounded-r-lg 
                          lg:rounded-r-none lg:rounded-t-lg p-3 md:p-4 w-[92vw] lg:w-[511px] lg:h-[139px] lg:absolute lg:right-0 lg:bottom-0`}>
                            <p className={`text-base lg:text-xl mb-2 md:mb-3 font-medium`}>{item.name}</p>
                            <p className={`text-xs md:text-lg-xs-s whitespace-pre-wrap lg:whitespace-pre`}>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="section w-full h-full ">
                    <PlatinumMEVHedgeStrategies />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          ></ReactFullpage>
        </TranslationProvider>
      </WithLanguage>
    </>
  )};

export default PlatinumMev;

export async function getStaticProps(ctx: any) {
  // console.log(ctx.params.language);
  return {
    props: {
      language: ctx.params.language,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: Object.keys(languageConfig.languages).map((language) => {
      return { params: { language } };
    }),
    fallback: false,
  };
}
