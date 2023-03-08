import type { NextPage } from "next";
import { useEffect, useState } from "react";
import useResize from "../../components/hooks/useResolution";
import BusinessTeam from "../../components/sections/businessTeam";
import EngineeringTeam from "../../components/sections/engineeringTeam";
import Investors from "../../components/sections/investors";
import Main from "../../components/sections/main";
import ManagementTeam from "../../components/sections/managementTeam";
import MevTeam from "../../components/sections/mevTeam";
import OurPartners from "../../components/sections/ourPartners";
import OurSyndicate from "../../components/sections/ourSyndicate";
import Portfolio from "../../components/sections/portfolio";
import Recognition from "../../components/sections/recognition";
import StrongDevSupport from "../../components/sections/strongDevSupport";
import Teams from "../../components/sections/teams";
import Testimonials from "../../components/sections/testimonials";
import WhatWeDo from "../../components/sections/whatWeDo";
import { languageConfig } from "../../i18n/language.config";
import { WithLanguage } from "../../services/withLanguage";
import { TranslationProvider } from "../../components/atoms/TranslationProvider";
import Mission from "../../components/sections/mission";

const Home: NextPage = ({ language } : any) => {
  const res = useResize();
  return (
    <WithLanguage language={language}>
      <TranslationProvider>
        <Main />
        <WhatWeDo />
        <Mission />
        <OurSyndicate />
        <OurPartners />
        <Investors />
        <Testimonials />
        <ManagementTeam />
        {!res.isMobile ? (
          <Teams />
        ) : (
          <>
            <BusinessTeam />
            <EngineeringTeam />
            <MevTeam />
          </>
        )}
        <Portfolio />
        <Recognition />
        <StrongDevSupport />
      </TranslationProvider>
    </WithLanguage>
  );
};

export default Home;

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
