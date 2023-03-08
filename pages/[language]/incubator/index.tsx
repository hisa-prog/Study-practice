import type { NextPage } from "next";
import useResize from "../../../components/hooks/useResolution";
import { PrefaceSD } from "../../../components/sections/incubator/PrefaceSD/index";
import { WhoWeAreSD } from "../../../components/sections/incubator/WhoWeAreSD/index";
import { HowWeProvide } from "../../../components/sections/incubator/HowWeProvide/index";
import { TechStackSD } from "../../../components/sections/incubator/TechStackSD/index";
import { PlatinumClients } from "../../../components/sections/incubator/PlatinumClients/index";
import { Testimonials } from "../../../components/sections/incubator/Testimonials/index";
import { FooterSD } from "../../../components/sections/incubator/FooterSD/index";
import { WeOfferSD } from "../../../components/sections/incubator/WeOfferSD/index";
import { MediaSlider } from "../../../components/sections/incubator/MediaSlider/index";
import { Recognition } from "../../../components/sections/incubator/Recognition/index";
import { Investors } from "../../../components/sections/incubator/Investors/index";
import { Partnerships } from "../../../components/sections/incubator/Partnerships/index";
import { useModal } from "../../../components/layout/ModalLayout";
import ModalPure from "../../../components/sections/incubator/ModalPure";
import { WithLanguage } from "../../../services/withLanguage";
import { TranslationProvider } from "../../../components/atoms/TranslationProvider";
import { languageConfig } from "../../../i18n/language.config";

const PlatinumIncubator: NextPage = ({ language }: any) => {
  const screenType = useResize();
  const contactModal = useModal();

  return (
    <>
      <WithLanguage language={language}>
        <TranslationProvider>
          <ModalPure modalPureMod={contactModal} />
          <main className="main-light bg-[#111111] overflow-hidden">
            <PrefaceSD
              handleClick={() => contactModal.open()}
              loading={false}
            />
            <WhoWeAreSD
              handleClick={() => contactModal.open()}
              isMobile={screenType.isMobile}
            />
            <HowWeProvide
              handleClick={() => contactModal.open()}
              isMobile={screenType.isMobile}
            />
            <TechStackSD />
            <PlatinumClients
              handleClick={() => contactModal.open()}
              isMobile={screenType.isMobile}
            />
            <Testimonials isMobile={screenType.isMobile} />
            <Partnerships />
            <Investors
              handleClick={() => contactModal.open()}
              isMobile={screenType.isMobile}
            />
            <Recognition />
            <MediaSlider />
            <WeOfferSD
              handleClick={() => contactModal.open()}
              isMobile={screenType.isMobile}
            />
            <FooterSD />
          </main>
        </TranslationProvider>
      </WithLanguage>
    </>
  );
};

export default PlatinumIncubator;

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
