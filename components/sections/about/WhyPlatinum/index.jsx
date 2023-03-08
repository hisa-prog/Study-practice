import React from "react";
import { Title } from "../../incubator/Title/index";
import { Slider } from "../Slider/index";
import { ButtonOrange } from "../../incubator/Button/index";
import { FormattedHTMLMessage } from "../../../atoms/FormattedMessage/index";

export const WhyPlatinum = ({ handleClick }) => {
  return (
    <section className="section why-platinum px-4">
      <div className="wrapper_section-content">
        <Title className="why-platinum__title">
          <FormattedHTMLMessage id="page.home.whyPlatinum.title" />
        </Title>
        <div className="why-platinum__main">
          <div data-aos="fade-up">
            <Slider className="why-platinum__slider">
              <div className="why-platinum__slide">
                <h3 className="why-platinum__slide-title">
                  <FormattedHTMLMessage id="page.home.whyPlatinum.quality" />
                </h3>
                <p className="why-platinum__slide-description">
                  <FormattedHTMLMessage id="page.home.whyPlatinum.weWorkWithNumerous" />
                </p>
              </div>
              <div className="why-platinum__slide">
                <h3 className="why-platinum__slide-title">
                  <FormattedHTMLMessage id="page.home.whyPlatinum.innovations" />
                </h3>
                <p className="why-platinum__slide-description">
                  <FormattedHTMLMessage id="page.home.whyPlatinum.weDefineInnovations" />
                </p>
              </div>
              <div className="why-platinum__slide">
                <h3 className="why-platinum__slide-title">
                  <FormattedHTMLMessage id="page.home.whyPlatinum.clientRelationShip" />
                </h3>
                <p className="why-platinum__slide-description">
                  <FormattedHTMLMessage id="page.home.whyPlatinum.toBuildSuccessful" />
                </p>
              </div>
            </Slider>
            <ButtonOrange className="button-orange--big" onClick={handleClick}>
              <FormattedHTMLMessage id="button.requestFreeConsultation" />
            </ButtonOrange>
          </div>
        </div>
        <img
          loading="lazy"
          className="why-platinum__background"
          src="/images/backgrounds/why.svg"
          alt="why"
        />
      </div>
    </section>
  );
};
