import React from "react";
import CareersVacancy from "../../atoms/careersVacancy";
import { FormattedHTMLMessage } from "../../atoms/FormattedMessage";

const vacancies : Array<{name: any, link: string}> = [
    {
        name: <FormattedHTMLMessage id='page.careers.ourVacancies.frontEnd' />,
        link: ''
    },
    {
        name: <FormattedHTMLMessage id='page.careers.ourVacancies.fullStack' />,
        link: ''
    },
    {
        name: <FormattedHTMLMessage id='page.careers.ourVacancies.japaneseEnglishTranslator' />,
        link: ''
    }
]


const OurVacanvies = () => {
  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-4 px-4 md:px-16 w-full relative">
        <p className="col-span-full mt-[8%] font-blinker text-3xl-h md:text-6xl-mg font-bold uppercase">Our vacancies</p>
        {vacancies.map((item, index) => (
            <CareersVacancy name={item.name} link={item.link} key={index} />
        ))}
    </div>
  );
};

export default OurVacanvies;