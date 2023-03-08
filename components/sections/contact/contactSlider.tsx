import { FormattedHTMLMessage } from "../../atoms/FormattedMessage";

export const ContactSlider = () => {
  return (
    <section className="w-full -mt-50 lg:-mt-0 px-4 mx-auto overflow-visible mb-15">
      <div className={`w-full max-w-lg mx-auto`}>
        <div className={`border-4 border-blue-hover shadow-contact`}>
          <div className="relative shadow-contact-inner flex flex-col justify-between
          w-full h-full py-5 lg:py-10 pr-6 lg:pr-8 pl-[37%] lg:pl-[45%] overflow-hidden lg:overflow-visible">
            <h3 className="font-bold uppercase text-xl-m lg:text-4xl-m drop-shadow-contactMobTitle lg:drop-shadow-none">
              {"Anton Dziatkovskii"}
            </h3>
            <h4 className="capitalize py-2.5 lg:text-xl-m text-xs w-[80%] lg:w-full">
              <FormattedHTMLMessage id='page.home.contactUs.subTitle' />
            </h4>
            <div className="pt-5 flex w-full">
              <a href="https://t.me/antondz2" target={"_blank"} className='flex flex-col items-center mr-4 lg:mr-10 cursor-pointer'>
                <img
                  loading="lazy"
                  src="/images/qr-codes/telegram.webp"
                  className="hidden lg:flex"
                  alt="telegram"
                />
                <div className="lg:hidden w-20 h-20 rounded bg-footer-black flex items-center justify-center">
                  <img
                    loading="lazy"
                    src="/images/qr-codes/icons/Telegram.svg"
                    className="m-auto w-8"
                    alt="telegram"
                  />
                </div>
                <p className="text-xs-h text-center pt-4 text-footer-gray">Telegram</p>
              </a>
              <a href="/" target={"_blank"} className='flex flex-col items-center lg:mr-10 cursor-pointer'>
                <img
                  loading="lazy"
                  src="/images/qr-codes/whatsApp.webp"
                  className="hidden lg:flex"
                  alt="whatsApp"
                />
                <div className="lg:hidden w-20 h-20 rounded bg-footer-black flex items-center justify-center">
                  <img
                    loading="lazy"
                    src="/images/qr-codes/icons/WhatsApp.svg"
                    className="m-auto"
                    alt="telegram"
                  />
                </div>
                <p className="text-xs-h text-center pt-4 text-footer-gray">WhatsApp</p>
              </a>
            </div>
            <img
              loading="lazy"
              className="absolute -left-5 lg:left-0 bottom-0 w-auto h-[12rem] lg:h-[30rem] -scale-x-100"
              src={'/images/contact/anton-dziatkovskii.webp'}
              alt={'Anton Dziatkovskii'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
