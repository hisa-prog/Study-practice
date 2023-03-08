import type { NextPage } from "next";
import { TranslationProvider } from "../../../components/atoms/TranslationProvider";
import { ContactMain } from "../../../components/sections/contact/contactMain";
import { ContactSlider } from "../../../components/sections/contact/contactSlider";
import { languageConfig } from "../../../i18n/language.config";
import { WithLanguage } from "../../../services/withLanguage";

const PlatinumContact: NextPage = ({ language }: any) => {
  return (
    <WithLanguage language={language}>
      <TranslationProvider>
        <div className="flex flex-col ">
          <ContactMain />
          <ContactSlider />
        </div>
      </TranslationProvider>
    </WithLanguage>
  );
};

export default PlatinumContact;

export async function getStaticProps(ctx : any) {
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
