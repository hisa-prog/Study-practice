import React, { useEffect, useState } from "react";

const DifferentPeople = () => {
  const [isLoading, setIsLoading] = useState(true);
  const test = async () => {
    let One;
    const one = (await import("./helpers/demo-2")).default;
    if (document.getElementsByTagName("canvas").length === 0) One = new one();
    // console.log(One);
  };

  useEffect(() => {
    const watch = document.getElementById("sliders");

    function obCallback(payload: any) {
      if (watch !== null) {
        if (payload[0].isIntersecting === true) {
          setTimeout(() => {
            test();
            setIsLoading(false);
          }, 1500);
        }
      }
    }

    const ob = new IntersectionObserver(obCallback);
    if (watch) {
      ob.observe(watch);
    }
  });

  return (
    <div id={"sliders"} className="w-[97vw] lg:w-[98.8vw] 2xl:w-[99vw] relative overflow-hidden">
      <div className="h-full w-full z-5 overflow-hidden">
        <div className={`${isLoading ? 'opacity-100' : 'opacity-0'} absolute lg:left-15 top-6 z-10 transition-all duration-1000`}>
          <p className="font-blinker text-3xl-h lg:text-6xl-mg font-bold uppercase">
            Different people — <br /> one heartbeat.
          </p>
        </div>

        <div className={`${isLoading ? 'opacity-100' : 'opacity-0'} absolute bottom-7 left-15 z-10 flex items-center transition-all duration-1000`}>
          <p className="text-xs font-lexendDeca uppercase">Scroll</p>
          <img src='/images/careers/arrow-right.svg' alt='arrow-right' className="ml-2 w-4" />
        </div>

        {isLoading && (
          <div className="absolute text-6xl-mg left-[34%] lg:left-[48%] top-[48%]">
            Wait...
          </div>
        )}

        <div className="h-screen w-[140rem] lg:w-[250rem] 2xl:w-[270rem] relative demo-2__gallery">
          <figure className="absolute left-[1%] lg:left-[4%] top-[40%] lg:top-[26%] h-[26%] lg:h-[40%] 2xl:h-[32%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/1.png" />
          </figure>

          <figure className="absolute left-[18%] lg:left-[22%] top-[8%] lg:top-[6%] h-[26%] lg:h-[40%] 2xl:h-[32%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/2.png" />
          </figure>

          <figure className="absolute left-[18%] lg:left-[20%] 2xl:left-[22%] top-[60%] 2xl:top-[56%] h-[22%] lg:h-[30%] 2xl:h-[24%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/3.png" />
          </figure>

          <figure className="absolute left-[34%] lg:left-[38%] 2xl:left-[40%] top-[35%] h-[18%] lg:h-[22%] 2xl:h-[18%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/4.png" />
          </figure>

          <figure className="absolute left-[41%] lg:left-[45%] 2xl:left-[47%] top-[4%] h-[18%] lg:h-[20%] 2xl:h-[18%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/5.png" />
          </figure>

          <figure className="absolute left-[48%] lg:left-[50%] 2xl:left-[51%] top-[50%] h-[26%] lg:h-[30%] 2xl:h-[24%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/6.png" />
          </figure>

          <figure className="absolute left-[58%] 2xl:left-[59%] top-[20%] h-[16%] lg:h-[20%] 2xl:h-[16%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/7.png" />
          </figure>

          <figure className="absolute left-[67%] lg:left-[65%] 2xl:left-[67%] top-[70%] h-[16%] lg:h-[20%] 2xl:h-[16%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/8.png" />
          </figure>

          <figure className="absolute left-[69%] lg:left-[67%] 2xl:left-[68%] top-[16%] lg:top-[14%] h-[28%] lg:h-[40%] 2xl:h-[34%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/9.png" />
          </figure>

          <figure className="absolute left-[81%] 2xl:left-[82.5%] top-[50%] 2xl:top-[44%] h-[30%] lg:h-[40%] 2xl:h-[34%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/10.png" />
          </figure>

          <figure className="absolute left-[90%] lg:left-[89%] 2xl:left-[90%] top-[56%] 2xl:top-[52%] h-[20%] lg:h-[24%] 2xl:h-[20%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/11.png" />
          </figure>

          <figure className="absolute left-[90%] 2xl:left-[91%] top-[15%] lg:top-[10%] h-[20%] lg:h-[24%] 2xl:h-[18%] demo-2__gallery__figure invisible">
            <img className="h-full" src="/images/careers/slides/12.png" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default DifferentPeople;
