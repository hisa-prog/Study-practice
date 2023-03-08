import React, { useState, useEffect } from "react";
import { scroller } from "../../../../lib/onScroll/index";
import Slick from "react-slick";
import { FormattedHTMLMessage } from "../../../atoms/FormattedMessage/index";

export const TechStackSD = () => {
  const [selectedStack, setSelectedStack] = useState("blockchain");

  const onScroll = () => {
    scroller(".tech-stack-sd .title-sd", "on-animation", "off-animation");
    scroller(".tech-stack-block", "on-animation", "off-animation");
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, false);

    return () => {
      window.removeEventListener("scroll", onScroll, false);
    };
  }, []);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    centerMode: false,
    arrows: false,
    dotsClass: "slider-dots",
    customPaging: (index) => {
      const stack = ["blockchain", "back", "front", "dev", "data", "test"];
      return (
        <div>
          <div
            className={`slick-dot ${
              stack[index] === selectedStack ? "dot-active" : ""
            }`}
            onClick={() => {
              setSelectedStack(stack[index]);
            }}
          />
        </div>
      );
    },
  };
  return (
    <section className="section-light tech-stack-sd " id="tech-stack">
      <p className="tech-stack-sd__text-decoration">
        <FormattedHTMLMessage id="page.sdlight.techtstack.skills" />
      </p>
      <div className="tech-stack-sd__section-content">
        <h2 className="title title-sd">
          <FormattedHTMLMessage id="page.sdlight.techtstack.title" />
        </h2>
        <div className="tech-stack-block">
          <nav className="tech-stack-block__nav">
            <div>
              <a
                className={`tech-stack-block__toggle ${
                  selectedStack === "front" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedStack("front");
                }}
              >
                <span className="tech-stack-block__toggle-text">
                  <FormattedHTMLMessage id="page.sdlight.techtstack.nav1" />
                </span>
              </a>
            </div>
            <div>
              <a
                className={`tech-stack-block__toggle ${
                  selectedStack === "back" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedStack("back");
                }}
              >
                <span className="tech-stack-block__toggle-text">
                  <FormattedHTMLMessage id="page.sdlight.techtstack.nav2" />
                </span>
              </a>
            </div>
            <div>
              <a
                className={`tech-stack-block__toggle ${
                  selectedStack === "blockchain" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedStack("blockchain");
                }}
              >
                <span className="tech-stack-block__toggle-text">
                  <FormattedHTMLMessage id="page.sdlight.techtstack.nav3" />
                </span>
              </a>
            </div>
            <div>
              <a
                className={`tech-stack-block__toggle ${
                  selectedStack === "dev" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedStack("dev");
                }}
              >
                <span className="tech-stack-block__toggle-text">
                  <FormattedHTMLMessage id="page.sdlight.techtstack.nav4" />
                </span>
              </a>
            </div>
            <div>
              <a
                className={`tech-stack-block__toggle ${
                  selectedStack === "data" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedStack("data");
                }}
              >
                <span className="tech-stack-block__toggle-text">
                  <FormattedHTMLMessage id="page.sdlight.techtstack.nav5" />
                </span>
              </a>
            </div>
            <div>
              <a
                className={`tech-stack-block__toggle ${
                  selectedStack === "test" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedStack("test");
                }}
              >
                <span className="tech-stack-block__toggle-text">
                  <FormattedHTMLMessage id="page.sdlight.techtstack.nav6" />
                </span>
              </a>
            </div>
          </nav>
          <div className="tech-stack-block__nav-mobile">
            <Slick {...settings}>
              <div key="tech-stack0">
                <a
                  className={`tech-stack-block__toggle ${
                    selectedStack === "front" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedStack("front");
                  }}
                >
                  <span className="tech-stack-block__toggle-text">
                    <FormattedHTMLMessage id="page.sdlight.techtstack.nav1" />
                  </span>
                </a>
              </div>
              <div key="tech-stack1">
                <a
                  className={`tech-stack-block__toggle ${
                    selectedStack === "back" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedStack("back");
                  }}
                >
                  <span className="tech-stack-block__toggle-text">
                    <FormattedHTMLMessage id="page.sdlight.techtstack.nav2" />
                  </span>
                </a>
              </div>
              <div key="tech-stack2">
                <a
                  className={`tech-stack-block__toggle ${
                    selectedStack === "blockchain" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedStack("blockchain");
                  }}
                >
                  <span className="tech-stack-block__toggle-text">
                    <FormattedHTMLMessage id="page.sdlight.techtstack.nav3" />
                  </span>
                </a>
              </div>
              <div key="tech-stack3">
                <a
                  className={`tech-stack-block__toggle ${
                    selectedStack === "dev" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedStack("dev");
                  }}
                >
                  <span className="tech-stack-block__toggle-text">
                    <FormattedHTMLMessage id="page.sdlight.techtstack.nav4" />
                  </span>
                </a>
              </div>
              <div key="tech-stack4">
                <a
                  className={`tech-stack-block__toggle ${
                    selectedStack === "data" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedStack("data");
                  }}
                >
                  <span className="tech-stack-block__toggle-text">
                    <FormattedHTMLMessage id="page.sdlight.techtstack.nav5" />
                  </span>
                </a>
              </div>
              <div key="tech-stack5">
                <a
                  className={`tech-stack-block__toggle ${
                    selectedStack === "test" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedStack("test");
                  }}
                >
                  <span className="tech-stack-block__toggle-text">
                    <FormattedHTMLMessage id="page.sdlight.techtstack.nav6" />
                  </span>
                </a>
              </div>
            </Slick>
          </div>
          <div
            className={`tech-stack-block__list tech-stack-block__list-blockchain ${
              selectedStack === "blockchain" ? "active" : ""
            }`}
          >
            <img
              loading="lazy"
              className="tech-stack-block__solidity"
              src="/images-light/icons/techStack/blockchain/solidity.svg"
              alt="solidity"
              title="solidity"
            />
            <img
              loading="lazy"
              className="tech-stack-block__rust"
              src="/images-light/icons/techStack/blockchain/rust.svg"
              alt="rust"
              title="rust"
            />
            <img
              loading="lazy"
              className="tech-stack-block__go"
              src="/images-light/icons/techStack/blockchain/go.svg"
              alt="go"
              title="go"
            />
            <img
              loading="lazy"
              className="tech-stack-block__vyper"
              src="/images-light/icons/techStack/blockchain/vyper.svg"
              alt="vyper"
              title="vyper"
            />
            <img
              loading="lazy"
              className="tech-stack-block__haskell"
              src="/images-light/icons/techStack/blockchain/haskell.svg"
              alt="haskell"
              title="haskell"
            />
            <img
              loading="lazy"
              className="tech-stack-block__web3"
              src="/images-light/icons/techStack/blockchain/web3.svg"
              alt="web3"
              title="web3"
            />
          </div>
          <div
            className={`tech-stack-block__list tech-stack-block__list-back ${
              selectedStack === "back" ? "active" : ""
            }`}
          >
            <img
              loading="lazy"
              className="tech-stack-block__java"
              src="/images-light/icons/techStack/back/java.svg"
              alt="java"
              title="java"
            />
            <img
              loading="lazy"
              className="tech-stack-block__php"
              src="/images-light/icons/techStack/back/php.svg"
              alt="php"
              title="php"
            />
            <img
              loading="lazy"
              className="tech-stack-block__nodejs"
              src="/images-light/icons/techStack/back/nodejs.svg"
              alt="nodejs"
              title="nodejs"
            />
            <img
              loading="lazy"
              className="tech-stack-block__websocket"
              src="/images-light/icons/techStack/back/websocket.svg"
              alt="websocket"
              title="websocket"
            />
            <img
              loading="lazy"
              className="tech-stack-block__spring"
              src="/images-light/icons/techStack/back/spring.svg"
              alt="spring"
              title="spring"
            />
            <img
              loading="lazy"
              className="tech-stack-block__yii"
              src="/images-light/icons/techStack/back/yii.svg"
              alt="yii"
              title="yii"
            />
            <img
              loading="lazy"
              className="tech-stack-block__python"
              src="/images-light/icons/techStack/back/python.svg"
              alt="python"
              title="python"
            />
            <img
              loading="lazy"
              className="tech-stack-block__phalcon"
              src="/images-light/icons/techStack/back/phalcon.svg"
              alt="phalcon"
              title="phalcon"
            />
          </div>

          <div
            className={`tech-stack-block__list tech-stack-block__list-front ${
              selectedStack === "front" ? "active" : ""
            }`}
          >
            <img
              loading="lazy"
              className="tech-stack-block__vue"
              src="/images-light/icons/techStack/front/vue.svg"
              alt="vue"
              title="vue"
            />
            <img
              loading="lazy"
              className="tech-stack-block__react"
              src="/images-light/icons/techStack/front/react.svg"
              alt="react"
              title="react"
            />
            <img
              loading="lazy"
              className="tech-stack-block__js"
              src="/images-light/icons/techStack/front/js.svg"
              alt="js"
              title="js"
            />
            <img
              loading="lazy"
              className="tech-stack-block__jquery"
              src="/images-light/icons/techStack/front/jquery.svg"
              alt="jquery"
              title="jquery"
            />
            <img
              loading="lazy"
              className="tech-stack-block__ts"
              src="/images-light/icons/techStack/front/ts.svg"
              alt="ts"
              title="ts"
            />
            <img
              loading="lazy"
              className="tech-stack-block__mobile-first"
              src="/images-light/icons/techStack/front/mobile-first.svg"
              alt="mobile-first"
              title="mobile-first"
            />
            <img
              loading="lazy"
              className="tech-stack-block__bem"
              src="/images-light/icons/techStack/front/bem.svg"
              alt="bem"
              title="bem"
            />
            <img
              loading="lazy"
              className="tech-stack-block__css"
              src="/images-light/icons/techStack/front/css.svg"
              alt="css"
              title="css"
            />
            <img
              loading="lazy"
              className="tech-stack-block__responsive"
              src="/images-light/icons/techStack/front/responsive.svg"
              alt="responsive"
              title="responsive"
            />
            <img
              loading="lazy"
              className="tech-stack-block__sass"
              src="/images-light/icons/techStack/front/sass.svg"
              alt="sass"
              title="sass"
            />
            <img
              loading="lazy"
              className="tech-stack-block__less"
              src="/images-light/icons/techStack/front/less.svg"
              alt="less"
              title="less"
            />
            <img
              loading="lazy"
              className="tech-stack-block__npm"
              src="/images-light/icons/techStack/front/npm.svg"
              alt="npm"
              title="npm"
            />
            <img
              loading="lazy"
              className="tech-stack-block__animation"
              src="/images-light/icons/techStack/front/animation.svg"
              alt="animation"
              title="animation"
            />
            <img
              loading="lazy"
              className="tech-stack-block__angular"
              src="/images-light/icons/techStack/front/angular.svg"
              alt="angular"
              title="angular"
            />
            <img
              loading="lazy"
              className="tech-stack-block__gulp"
              src="/images-light/icons/techStack/front/gulp.svg"
              alt="gulp"
              title="gulp"
            />
            <img
              loading="lazy"
              className="tech-stack-block__babel"
              src="/images-light/icons/techStack/front/babel.svg"
              alt="babel"
              title="babel"
            />
            <img
              loading="lazy"
              className="tech-stack-block__eslint"
              src="/images-light/icons/techStack/front/eslint.svg"
              alt="eslint"
              title="eslint"
            />
            <img
              loading="lazy"
              className="tech-stack-block__composer"
              src="/images-light/icons/techStack/front/composer.svg"
              alt="composer"
              title="composer"
            />
            <img
              loading="lazy"
              className="tech-stack-block__yarn"
              src="/images-light/icons/techStack/front/yarn.svg"
              alt="yarn"
              title="yarn"
            />
            <img
              loading="lazy"
              className="tech-stack-block__web3"
              src="/images-light/icons/techStack/blockchain/web3.svg"
              alt="web3"
              title="web3"
            />
          </div>
          <div
            className={`tech-stack-block__list tech-stack-block__list-dev ${
              selectedStack === "dev" ? "active" : ""
            }`}
          >
            <img
              loading="lazy"
              className="tech-stack-block__docker"
              src="/images-light/icons/techStack/dev/docker.svg"
              alt="docker"
              title="docker"
            />
            <img
              loading="lazy"
              className="tech-stack-block__git"
              src="/images-light/icons/techStack/dev/git.svg"
              alt="git"
              title="git"
            />
            <img
              loading="lazy"
              className="tech-stack-block__zabbix"
              src="/images-light/icons/techStack/dev/zabbix.svg"
              alt="zabbix"
              title="zabbix"
            />
            <img
              loading="lazy"
              className="tech-stack-block__nginx"
              src="/images-light/icons/techStack/dev/nginx.svg"
              alt="nginx"
              title="nginx"
            />
            <img
              loading="lazy"
              className="tech-stack-block__grafana-labs"
              src="/images-light/icons/techStack/dev/grafanaLabs.svg"
              alt="grafanaLabs"
              title="grafanaLabs"
            />
            <img
              loading="lazy"
              className="tech-stack-block__elastic"
              src="/images-light/icons/techStack/dev/elastic.svg"
              alt="elastic"
              title="elastic"
            />
            <img
              loading="lazy"
              className="tech-stack-block__kubernetes"
              src="/images-light/icons/techStack/dev/kubernetes.svg"
              alt="kubernetes"
              title="kubernetes"
            />
          </div>

          <div
            className={`tech-stack-block__list tech-stack-block__list-data ${
              selectedStack === "data" ? "active" : ""
            }`}
          >
            <img
              loading="lazy"
              className="tech-stack-block__rabbitMQ"
              src="/images-light/icons/techStack/data/rabbitMQ.svg"
              alt="rabbitMQ"
              title="rabbitMQ"
            />
            <img
              loading="lazy"
              className="tech-stack-block__redis"
              src="/images-light/icons/techStack/data/redis.svg"
              alt="redis"
              title="redis"
            />
            <img
              loading="lazy"
              className="tech-stack-block__memcached"
              src="/images-light/icons/techStack/data/memcached.svg"
              alt="memcached"
              title="memcached"
            />
            <img
              loading="lazy"
              className="tech-stack-block__influxdb"
              src="/images-light/icons/techStack/data/influxdb.svg"
              alt="influxdb"
              title="influxdb"
            />
            <img
              loading="lazy"
              className="tech-stack-block__postgresql"
              src="/images-light/icons/techStack/data/postgresql.svg"
              alt="postgresql"
              title="postgresql"
            />
            <img
              loading="lazy"
              className="tech-stack-block__mongodb"
              src="/images-light/icons/techStack/data/mongodb.svg"
              alt="mongodb"
              title="mongodb"
            />
            <img
              loading="lazy"
              className="tech-stack-block__mysql"
              src="/images-light/icons/techStack/data/mysql.svg"
              alt="mysql"
              title="mysql"
            />
          </div>

          <div
            className={`tech-stack-block__list tech-stack-block__list-test ${
              selectedStack === "test" ? "active" : ""
            }`}
          >
            <img
              loading="lazy"
              className="tech-stack-block__selenium"
              src="/images-light/icons/techStack/test/selenium.svg"
              alt="selenium"
              title="selenium"
            />
            <img
              loading="lazy"
              className="tech-stack-block__behat"
              src="/images-light/icons/techStack/test/behat.svg"
              alt="behat"
              title="behat"
            />
            <img
              loading="lazy"
              className="tech-stack-block__mocha"
              src="/images-light/icons/techStack/test/mocha.svg"
              alt="mocha"
              title="mocha"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
