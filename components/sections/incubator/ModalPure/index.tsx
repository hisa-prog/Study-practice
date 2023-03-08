import { FormattedHTMLMessage } from "../../../atoms/FormattedMessage";
import ModalLayout from "../../../layout/ModalLayout";

interface IModalPure {
  modalPureMod: any;
}

const ModalPure = ({ modalPureMod }: IModalPure) => {
  return (
    <ModalLayout {...modalPureMod}>
      <div className={'modal-pure modal-pure_type_primary'}>
        <div className="modal-pure-backdrop">
          <div className="modal-pure__body">
            <div
              className="modal-pure__btn-close"
              onClick={() => modalPureMod.close()}
            >
              <span />
              <span />
            </div>
            <div className={`contact-now contact-now--blue`}>
              <h4 className="contact-now__title">{`Contact now!`}</h4>
              <p className="contact-now__subtitle">
                <FormattedHTMLMessage id='contactNowForm.susbtitle' />
              </p>
              <div className="contact-now__grid">
                <div className="contact-now__grid-row">
                  <div className="contact-now__col">
                    <div className="contact-now__avatar">
                      <img
                        loading="lazy"
                        src={"/images/contactNow/anton.webp"}
                        alt={""}
                      />
                    </div>
                    <div className="contact-now__profile">
                      <p className="contact-now__profile-name">{"Anton d."}</p>
                      <div className="contact-now__profile-email">
                        <a href={`mailto:a@platinum.fund`}>
                          {"a@platinum.fund"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-now__col">
                    <div className="contact-now__messengers">
                      <div className="contact-now__messenger">
                        <a href={"https://t.me/antondz2"} target="_blank">
                          <div className="contact-now__messenger-icon">
                            <img
                              loading="lazy"
                              src="/images/contactNow/icon-telegram.webp"
                            />
                          </div>
                        </a>
                        <p className="contact-now__messenger-label">Telegram</p>
                      </div>
                      <div className="contact-now__messenger">
                        <a href={"https://wa.me/66953310253"} target="_blank">
                          <div className="contact-now__messenger-icon">
                            <img
                              loading="lazy"
                              src="/images/contactNow/icon-whatsapp.webp"
                            />
                          </div>
                        </a>
                        <p className="contact-now__messenger-label">WhatsApp</p>
                      </div>
                      <div className="contact-now__messenger">
                        <a
                          href={"https://u.wechat.com/IJIKG0GiB944y12JlusFzs4"}
                          target="_blank"
                        >
                          <div className="contact-now__messenger-icon contact-now__messenger-icon--qrcode">
                            <img
                              loading="lazy"
                              src="/images/contactNow/qr-wechat-anton.webp"
                            />
                          </div>
                          <div className="contact-now__messenger-icon contact-now__messenger-icon--wechat">
                            <img
                              loading="lazy"
                              src="/images/contactNow/icon-wechat.webp"
                            />
                          </div>
                        </a>
                        <p className="contact-now__messenger-label">WeChat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};
export default ModalPure;
