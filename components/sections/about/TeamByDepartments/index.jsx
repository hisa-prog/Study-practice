import React, { useState } from "react";
import { team } from "./teams";
import { Title } from "../../incubator/Title/index";
import { ButtonOrange } from "../../incubator/Button/index";
import { FormattedHTMLMessage } from "../../../atoms/FormattedMessage/index";

const DepartmentBlock = ({ title, previewImage, team }) => {
  const [isOpen, setStatus] = useState(false);

  return (
    <div className="team-by-departments__block" data-aos="fade-up">
      <div className="team-by-departments__preview blue-block">
        <div className="team-by-departments__wrapper">
          <Title className="team-by-departments__block-title">{title}</Title>
          <button
            onClick={() => setStatus(!isOpen)}
            className="button button--small button--team"
          >
            {isOpen ? (
              "Hide"
            ) : (
              <FormattedHTMLMessage id="page.home.tapToSeeAll" />
            )}
          </button>
        </div>
        <div className="team-by-departments__preview-image-container">
          <img
            loading="lazy"
            className="team-by-departments__preview-image"
            src={previewImage}
            alt="platinum team members"
          />
        </div>
      </div>
      <div className={`team-by-departments__list ${!isOpen ? "hidden" : ""}`}>
        {team.map((member, memberIndex) => (
          <div className="team-by-departments__member" key={memberIndex}>
            <div className="team-by-departments__member-header">
              <img
                loading="lazy"
                className="team-by-departments__member-photo"
                src={member.photo}
                alt={`${member.name} photo`}
              />
              <div className="team-by-departments__wrapper-icons">
                <div className="team-by-departments__member-socials">
                  {member.socials.map((social, socialIndex) => (
                    <a
                      target="_blank"
                      className="team-by-departments__member-social"
                      href={social.link}
                      key={socialIndex}
                    >
                      <img
                        loading="lazy"
                        className="team-by-departments__member-social-icon"
                        src={social.icon}
                        alt={social.name}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="team-by-departments__member-main">
              <p className="team-by-departments__member-name">{member.name}</p>
              <p className="team-by-departments__member-position">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TeamByDepartments = ({ handleClick }) => {
  return (
    <section className="section team-by-departments px-4">
      <div className="wrapper_section-content">
        <DepartmentBlock
          title={<FormattedHTMLMessage id="page.home.platinumTeam" />}
          previewImage="/images/members/management-team/management-team1.webp"
          team={team.management}
        />
        <DepartmentBlock
          title={<FormattedHTMLMessage id="page.home.itChampionsTeam" />}
          previewImage="/images/members/it-champions-team/it-champions-team.webp"
          team={team.champions}
        />
        <div
          className="team-by-departments__container-button"
          data-aos="fade-up"
        >
          <ButtonOrange className="button-orange--big" onClick={handleClick}>
            <FormattedHTMLMessage id="button.sendRequest" />
          </ButtonOrange>
        </div>
      </div>
    </section>
  );
};
