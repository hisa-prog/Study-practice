import React from "react";
import { ButtonOrange } from "../../incubator/Button/index";
import { FormattedHTMLMessage } from "../../../atoms/FormattedMessage/index";

export const WhoWeAre = ({ handleClick }) => {
  return (
    <section className="section who-we-are px-4">
      <div className="wrapper_section-content">
        <h1 className="who-we-are__title">
          <FormattedHTMLMessage id="page.home.whoWeAre.title" />
        </h1>
        <div className="who-we-are__content-container">
          <div data-aos="fade-up">
            <p className="who-we-are__inform-text">
              Platinum Engineering is a new generation tech incubator with a
              background in networking that provides top grade expertise to
              future FinTech stars. With our ready-made Fintech solutions and
              our individualized approach to every client, we help new projects
              take the first steps towards success.
              <br />
              <br />
              Our diversified team of professionals can provide your project
              with all the necessary starting tools, from basic FinTech
              primitives to inspiring new partnerships. Our goal is to attract
              the boldest and most talented in the industry and ensure their
              sustainable development.
              <br />
              <br />
              We most likely can’t solve all your problems. But we can give you
              valuable help.
            </p>
          </div>
          <div className="who-we-are__container-button">
            <ButtonOrange className="button-orange--big" onClick={handleClick}>
              <FormattedHTMLMessage id="button.placeOrder" />
            </ButtonOrange>
          </div>
        </div>
      </div>
      <div className="who-we-are__map">
        <img
          loading="lazy"
          className="who-we-are__mapImage"
          src="/images/whoweare.webp"
          alt=""
        />
        <img
          loading="lazy"
          className="who-we-are__facts"
          src="/images/backgrounds/facts.svg"
          alt="facts"
        />
      </div>
    </section>
  );
};
