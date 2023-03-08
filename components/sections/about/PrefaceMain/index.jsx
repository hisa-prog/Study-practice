import React from "react";
import { ButtonOrange } from "../../incubator/Button/index";
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'
import { Slider } from "../Slider/index";

export const PrefaceMain = (props) => {
  const { handleClick } = props;

  return (
    <>
      <div className="h-[92.2vh] lg:h-[82vh] w-screen"></div>
      <section className="preface-main">
        <div className="preface-about-us__section-content">
          <div className="rhombus-middle"></div>
          <div className="rhombus-little"></div>
          <div className="rhombus-big"></div>
          <Slider
            className="slider-preface preface-main__slider"
            autoPlay="true"
          >
            <div className="preface-main__slide">
              <div className="preface-main__content-container">
                <h1 className="preface-main__title">
                  <FormattedHTMLMessage id="page.home.prefaceTitle" />
                </h1>
                <h3 className="preface-main__subtitle">
                  <FormattedHTMLMessage id="page.home.preface1subtitle" />
                </h3>
                <div className="preface-main__container-button">
                  <ButtonOrange
                    className="button-orange--big"
                    onClick={handleClick}
                  >
                    <FormattedHTMLMessage id="button.getFreeConsultation" />
                  </ButtonOrange>
                </div>
              </div>
              <div className="preface-main__wrapper-signature">
                <img
                  loading="lazy"
                  className="preface-main__image"
                  src="/images/preface/anton.webp"
                  alt="Anton Dziatkovskii"
                />
                <div className="preface-main__signature">
                  <span className="preface-main__name">
                    <FormattedHTMLMessage id="page.home.AntonDziatkovskii" />
                  </span>
                  <span className="preface-main__position">
                    <FormattedHTMLMessage id="page.home.positionAntonDziatkovskii" />
                  </span>
                </div>
              </div>
            </div>
            <div className="preface-main__slide">
              <div className="preface-main__content-container">
                <h1 className="preface-main__title">
                  <FormattedHTMLMessage id="page.home.efficiencyAndQuality" />
                </h1>
                <h3 className="preface-main__subtitle">
                  <FormattedHTMLMessage id="page.home.preface3subtitle" />
                </h3>
                <div className="preface-main__container-button">
                  <ButtonOrange
                    className="button-orange--big"
                    onClick={handleClick}
                  >
                    <FormattedHTMLMessage id="button.getFreeConsultation" />
                  </ButtonOrange>
                </div>
              </div>
              <div className="preface-main__wrapper-signature">
                <img
                  loading="lazy"
                  className="preface-main__image"
                  src="/images/preface/vladimir.webp"
                  alt="Vladimir Grinevsky"
                />
                <div className="preface-main__signature">
                  <span className="preface-main__name">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.VladimirGrinevski" />
                  </span>
                  <span className="preface-main__position">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.VladimirGrinevskiPosition" />
                  </span>
                </div>
              </div>
            </div>
            <div className="preface-main__slide">
              <div className="preface-main__content-container">
                <h1 className="preface-main__title">
                  <FormattedHTMLMessage id="page.home.everyCustomer" />
                </h1>
                <h3 className="preface-main__subtitle">
                  <FormattedHTMLMessage id="page.home.preface4subtitle" />
                </h3>
                <div className="preface-main__container-button">
                  <ButtonOrange
                    className="button-orange--big"
                    onClick={handleClick}
                  >
                    <FormattedHTMLMessage id="button.getFreeConsultation" />
                  </ButtonOrange>
                </div>
              </div>
              <div className="preface-main__wrapper-signature">
                <img
                  loading="lazy"
                  className="preface-main__image"
                  src="/images/preface/masha.webp"
                  alt="Masha Danilova"
                />
                <div className="preface-main__signature">
                  <span className="preface-main__name">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.MashaDanilova" />
                  </span>
                  <span className="preface-main__position">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.MashaDanilovaPosition" />
                  </span>
                </div>
              </div>
            </div>
            <div className="preface-main__slide">
              <div className="preface-main__content-container">
                <h1 className="preface-main__title">
                  <FormattedHTMLMessage id="page.home.weHave100PlusAmazing" />
                </h1>
                <h3 className="preface-main__subtitle">
                  <FormattedHTMLMessage id="page.home.preface6subtitle" />
                </h3>
                <div className="preface-main__container-button">
                  <ButtonOrange
                    className="button-orange--big"
                    onClick={handleClick}
                  >
                    <FormattedHTMLMessage id="button.getFreeConsultation" />
                  </ButtonOrange>
                </div>
              </div>
              <div className="preface-main__wrapper-signature">
                <img
                  loading="lazy"
                  className="preface-main__image"
                  src="/images/preface/aleksandra.webp"
                  alt="Alexandra Krylova"
                />
                <div className="preface-main__signature">
                  <span className="preface-main__name">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.AlexandraKrylova" />
                  </span>
                  <span className="preface-main__position">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.AlexandraKrylovaPosition" />
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};
