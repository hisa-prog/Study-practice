import React from "react";
import { Title } from "../../incubator/Title/index";
import { Slider } from "../Slider/index";
import { ButtonOrange } from "../../incubator/Button/index";
import { FormattedHTMLMessage } from "../../../atoms/FormattedMessage/index";

export const TeamTestimonials = ({ handleClick }) => {
  return (
    <section className="section team-testimonials">
      <div className="wrapper_section-content">
        <Title className="team-testimonials__title">
          <FormattedHTMLMessage id="page.home.whyOurTeam.title" />
        </Title>
        <div data-aos="fade-up">
          <Slider className="team-testimonials__slider">
            <div className="team-testimonials__card">
              <div className="team-testimonials__card-image-container">
                <img
                  loading="lazy"
                  className="team-testimonials__card-image"
                  src="/images/members/krylova.webp"
                  alt="photo"
                />
              </div>
              <div className="team-testimonials__card-content">
                <div className="team-testimonials__card-header">
                  <p className="team-testimonials__card-title">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.AlexandraKrylovaPosition" />
                  </p>
                  <p className="team-testimonials__card-subtitle">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.AlexandraKrylova" />
                  </p>
                </div>
                <p className="team-testimonials__card-description font-lexendDeca">
                  <FormattedHTMLMessage id="page.home.whyOurTeam.AlexandraKrylovaFeedback" />
                </p>
              </div>
            </div>
            <div className="team-testimonials__card">
              <div className="team-testimonials__card-image-container">
                <img
                  loading="lazy"
                  className="team-testimonials__card-image"
                  src="/images/members/maria.webp"
                  alt="photo"
                />
              </div>
              <div className="team-testimonials__card-content">
                <div className="team-testimonials__card-header">
                  <p className="team-testimonials__card-title">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.MashaDanilova" />
                  </p>
                  <p className="team-testimonials__card-subtitle">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.MashaDanilovaPosition" />
                  </p>
                </div>
                <p className="team-testimonials__card-description font-lexendDeca">
                  <FormattedHTMLMessage id="page.home.whyOurTeam.MashaDanilovaFeedback" />
                </p>
              </div>
            </div>
            <div className="team-testimonials__card">
              <div className="team-testimonials__card-image-container">
                <img
                  loading="lazy"
                  className="team-testimonials__card-image"
                  src="/images/members/marketing-pr-team/grinevskiy.webp"
                  alt="photo"
                />
              </div>
              <div className="team-testimonials__card-content">
                <div className="team-testimonials__card-header">
                  <p className="team-testimonials__card-title">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.VladimirGrinevski" />
                  </p>
                  <p className="team-testimonials__card-subtitle">
                    <FormattedHTMLMessage id="page.home.whyOurTeam.VladimirGrinevskiPosition" />
                  </p>
                </div>
                <p className="team-testimonials__card-description font-lexendDeca">
                  <FormattedHTMLMessage id="page.home.whyOurTeam.VladimirGrinevskiFeedback" />
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="who-we-are__container-button pt-10" data-aos="fade-up">
          <ButtonOrange className="button-orange--big" onClick={handleClick}>
            <FormattedHTMLMessage id="button.contactUs" />
          </ButtonOrange>
        </div>
      </div>
    </section>
  );
};
