import type { NextPage } from "next";
import MainCareers from "../../../components/sections/careers/main";
import SkillFulCareers from "../../../components/sections/careers/skillful";
import WorkingCareers from "../../../components/sections/careers/working";
import OurVacanvies from "../../../components/sections/careers/ourVacancies";
import OurBigFamily from "../../../components/sections/careers/ourBigFamily";
import DifferentPeople from "../../../components/sections/careers/differentPeople";
import { WithLanguage } from "../../../services/withLanguage";
import { TranslationProvider } from "../../../components/atoms/TranslationProvider";
import { languageConfig } from "../../../i18n/language.config";
import HistoryCareers from "../../../components/sections/careers/history";

const PlatinumCareers: NextPage = ({ language }: any) => {
  return (
    <WithLanguage language={language}>
      <TranslationProvider>
        <div className="absolute top-0 bg-cover bg-mainBgDark bg-center bg-blend-darken w-full h-screen z-0 overflow-hidden"></div>
        <MainCareers />
        <HistoryCareers />
        <SkillFulCareers />
        <OurBigFamily />
        <DifferentPeople />
        <WorkingCareers />
        <OurVacanvies />
      </TranslationProvider>
    </WithLanguage>
  );
};

export default PlatinumCareers;

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
