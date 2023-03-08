import type { NextPage } from "next";
import { useModal } from "../../../components/layout/ModalLayout";
import ModalPure from "../../../components/sections/incubator/ModalPure";
import { PrefaceMain } from "../../../components/sections/about/PrefaceMain/index";
import { WhyPlatinum } from "../../../components/sections/about/WhyPlatinum/index";
import { WhoWeAre } from "../../../components/sections/about/WhoWeAre/index";
import { Facts } from "../../../components/sections/about/Facts/index";
import { TeamTestimonials } from "../../../components/sections/about/TeamTestimonials/index";
import { TeamByDepartments } from "../../../components/sections/about/TeamByDepartments/index";
import { Community } from "../../../components/sections/about/Community/index";
import { BlogPreview } from "../../../components/sections/about/BlogPreview/index";
import { PlacesWeWorked } from "../../../components/sections/about/PlacesWeWorked/index";
import { TranslationProvider } from "../../../components/atoms/TranslationProvider";
import { WithLanguage } from "../../../services/withLanguage";
import { languageConfig } from "../../../i18n/language.config";

const PlatinumAbout: NextPage = ({ language }: any) => {
  const contactModal = useModal();
  return (
    <WithLanguage language={language}>
      <TranslationProvider>
        <ModalPure modalPureMod={contactModal} />
        <div className="pages-home overflow-hidden">
          <PrefaceMain handleClick={() => contactModal.open()} />
          <WhyPlatinum handleClick={() => contactModal.open()} />
          <WhoWeAre handleClick={() => contactModal.open()} />
          <Facts />
          <TeamTestimonials handleClick={() => contactModal.open()} />
          <TeamByDepartments handleClick={() => contactModal.open()} />
          <Community />
          <BlogPreview />
          <PlacesWeWorked />
        </div>
      </TranslationProvider>
    </WithLanguage>
  );
};

export default PlatinumAbout;

export async function getStaticProps(ctx: any) {
  // console.log(ctx.params.language)
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
