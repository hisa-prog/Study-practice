import React from "react";
import { Slider } from "../Slider/index";
import { FormattedHTMLMessage } from "../../../atoms/FormattedMessage/index";

export const Facts = () => (
  <section className="section facts px-4" data-aos="fade-up">
    <div className="wrapper_section-content">
      <Slider className="facts__slider">
        <div className="facts__slide">
          <h3 className="facts__slide-title">
            <FormattedHTMLMessage id="page.home.facts.platinumIsCompanyWith" />
          </h3>
        </div>
        <div className="facts__slide">
          <h3 className="facts__slide-title">
            <FormattedHTMLMessage id="page.home.facts.weHaveMore12employees" />
          </h3>
        </div>
        <div className="facts__slide">
          <h3 className="facts__slide-title">
            <FormattedHTMLMessage id="page.home.facts.weWorkInAllAsianRegion" />
          </h3>
        </div>
        <div className="facts__slide">
          <h3 className="facts__slide-title">
            <FormattedHTMLMessage id="page.home.facts.weHelpedToRaiseMore" />
          </h3>
        </div>
        <div className="facts__slide">
          <h3 className="facts__slide-title">
            <FormattedHTMLMessage id="page.home.weConsultedMoreThan1000" />
          </h3>
        </div>
        <div className="facts__slide">
          <h3 className="facts__slide-title">
            <FormattedHTMLMessage id="page.home.weBuildExchanges" />
          </h3>
        </div>
        <div className="facts__slide">
          <h3 className="facts__slide-title">
            <FormattedHTMLMessage id="page.home.weHaveMoreThan300Business" />
          </h3>
        </div>
      </Slider>
      <img
        loading="lazy"
        className="facts__background"
        src="/images/backgrounds/facts.svg"
        alt="facts"
      />
    </div>
  </section>
);
