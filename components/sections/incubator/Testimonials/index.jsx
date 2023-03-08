import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Title } from "../Title/index";
import { FormattedHTMLMessage } from "../../../atoms/FormattedMessage/index";

const items = [
  // {
  //   id: "1",
  //   name: "Josh",
  //   position: "Contango Ventures Inc",
  //   photo: "Josh.webp",
  //   feedback: <FormattedHTMLMessage id="page.home.testimonials.JoshFeedback" />,
  // },

  {
    id: "2",
    name: "Sascha",
    position: "Sascha | Felix",
    photo: "Sasha.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.SaschaFeedback" />
    ),
  },
  {
    id: "3",
    name: "邁克爾 Michael",
    position: "Tokenomik",
    photo: "Michael.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.MishaFeedback" />
    ),
  },
  {
    id: "4",
    name: "Siwon Kim",
    position: "KSM Starter",
    photo: "Siwon.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.SiwonKimFeedback" />
    ),
  },
  {
    id: "5",
    name: "Sundeep",
    position: "Sundeep",
    photo: "Sundeep.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.SundeepFeedback" />
    ),
  },
  {
    id: "5",
    name: "Richard Asamoah Boateng",
    position: "R-930 CAPITAL",
    photo: "Richard.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.RichardFeedback" />
    ),
  },
  {
    id: "6",
    name: "Thomas Nguyễn",
    position: "AZCOINVEST",
    photo: "Thomas.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackThomas" />
    ),
  },
  {
    id: "7",
    name: "Yuen",
    position: "Labsgroup",
    photo: "Yuen.webp",
    feedback: <FormattedHTMLMessage id="page.home.testimonials.feedbackYuen" />,
  },
  {
    id: "8",
    name: "Persio Flexa",
    position: "Gimmer",
    photo: "Persio.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackPersio" />
    ),
  },
  {
    id: "9",
    name: "Akshay Mehra",
    position: "CEO, Co-Founder",
    photo: "Akshay.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackAkshay" />
    ),
  },
  {
    id: "10",
    name: "Rinat Arslanov",
    position: "CEO",
    photo: "Rinat.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackRinat" />
    ),
  },
  {
    id: "11",
    name: "Alexey Shmonov",
    position: "HOQU CEO and Co-founder",
    photo: "Alexey.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackAlexey" />
    ),
  },
  {
    id: "12",
    name: "Rachel Chung",
    position: "ATFS",
    photo: "Rachel.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackRachel" />
    ),
  },
  {
    id: "12",
    name: "Pei-Han Chuang",
    position: "Morpheus Labs",
    photo: "Pei.webp",
    feedback: <FormattedHTMLMessage id="page.home.testimonials.feedbackPei" />,
  },
  {
    id: "13",
    name: "Eric Zhang",
    position: "TrueChain",
    photo: "Eric.webp",
    feedback: <FormattedHTMLMessage id="page.home.testimonials.feedbackEric" />,
  },
  {
    id: "14",
    name: "Simone Costa",
    position: "Multiversum Foundation",
    photo: "Simone.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackSimone" />
    ),
  },
  {
    id: "15",
    name: "Flavius Burca",
    position: "CTO",
    photo: "Burca.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackBurca" />
    ),
  },
  {
    id: "16",
    name: "DAVID",
    position: "",
    photo: "David.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackDavid" />
    ),
  },
  {
    id: "17",
    name: "Carmine Marzano",
    position: "Booster",
    photo: "Carmine.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackCarmine" />
    ),
  },
  {
    id: "18",
    name: "XTLabs",
    position: "",
    photo: "XTLabs.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackXTLabs" />
    ),
  },
  {
    id: "19",
    name: "Sentii",
    position: "",
    photo: "Sentii.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackSentii" />
    ),
  },
  {
    id: "20",
    name: "Abigail",
    position: "R8 Capital",
    photo: "Abigail.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackAbigail" />
    ),
  },
  {
    id: "21",
    name: "Cyclese",
    position: "PolkaBridge",
    photo: "Cyclese.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackCyclese" />
    ),
  },
  {
    id: "22",
    name: "Skye",
    position: "LaunchZone",
    photo: "Skye.webp",
    feedback: <FormattedHTMLMessage id="page.home.testimonials.feedbackSkye" />,
  },
  {
    id: "23",
    name: "Susan",
    position: "Athena Ventures",
    photo: "Susan.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackSusan" />
    ),
  },
  {
    id: "24",
    name: "Mark Sandro",
    position: "",
    photo: "Mark.webp",
    feedback: <FormattedHTMLMessage id="page.home.testimonials.feedbackMark" />,
  },
  {
    id: "25",
    name: "Rebel",
    position: "MoonCarl Team",
    photo: "Rebel.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackRebel" />
    ),
  },
  {
    id: "26",
    name: "Pavel Laskarzewski",
    position: "Synapse. Network",
    photo: "Pavel.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackPavel" />
    ),
  },
  {
    id: "27",
    name: "Mohamed K.",
    position: "Moonstarter",
    photo: "Mohamed.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackMohamed" />
    ),
  },
  {
    id: "28",
    name: "DAOSTARTER",
    position: "",
    photo: "DaoStarter.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackDaoStarter" />
    ),
  },
  {
    id: "29",
    name: "Genevieve Leveille",
    position: "Director of Timbuktu Capital",
    photo: "Genevieve.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackGenevieve" />
    ),
  },
  {
    id: "30",
    name: "Rachel Chung",
    position: "Marketing Lead and co-founder",
    photo: "RachelChung.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackRachelChung" />
    ),
  },
  {
    id: "31",
    name: "Sai Hnin Aung",
    position: "Co-founder, COO",
    photo: "Sai.webp",
    feedback: <FormattedHTMLMessage id="page.home.testimonials.feedbackSai" />,
  },
  {
    id: "32",
    name: "Dan Khomenko",
    position: "UNICOIN TV co-founder",
    photo: "Dan.webp",
    feedback: <FormattedHTMLMessage id="page.home.testimonials.feedbackDan" />,
  },
  {
    id: "33",
    name: "Spatium",
    position: "",
    photo: "Spatium.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackSpatium" />
    ),
  },
  {
    id: "34",
    name: "Yuriy Kovalev",
    position: "Founder",
    photo: "Yuriy.webp",
    feedback: (
      <FormattedHTMLMessage id="page.home.testimonials.feedbackYuriy" />
    ),
  },
];

export const Testimonials = ({ isMobile }) => {
  const [maxCols, setMaxCols] = useState(2);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        onResize();
      });
      onResize();
    }
  });

  const onResize = () => {
    const clientWidth = document.documentElement.clientWidth;
    let newMaxCols = maxCols;
    if (clientWidth <= 600) {
      newMaxCols = 1;
    } else {
      newMaxCols = 2;
    }

    if (newMaxCols !== maxCols) {
      setMaxCols(newMaxCols);
    }
  };

  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 500,
    infinite: true,
    dotsClass: "slider-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false, //true
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="section testimonials">
      <div className="wrapper_section-contentSlider" data-aos="fade-up">
        <Title className="testimonials__title">
          <FormattedHTMLMessage id="page.home.testimonials.title" />
        </Title>
          <div className="testimonials__card-slider">
            <Slider {...settings}>
              {items.map((item, key) => {
                return (
                  <div className={"testimonials__slide"} key={key}>
                    <div className="testimonials__card">
                      <div className="testimonials__card-photo">
                        {!isMobile ? (
                          <img
                            loading="lazy"
                            src={`/images-light/testimonials/${item.photo}`}
                            alt={item.name}
                          />
                        ) : (
                          <img
                            loading="lazy"
                            src={`/images-light/testimonials/mobile/${item.photo}`}
                            alt={item.name}
                          />
                        )}
                      </div>
                      <div className="testimonials__card-header">
                        <p className="testimonials__text-feedback">
                          {item.feedback}
                        </p>
                        <div>
                          <p className="testimonials__text-name">{item.name}</p>
                          <p className="testimonials__text-position">
                            {item.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
      </div>
    </section>
  );
};
