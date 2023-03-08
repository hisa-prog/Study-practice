import React from 'react'
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'

export const FooterSD = () => {
    return (
        <section className='footer-sd'>
            <div className='footer-sd__section-content'>
                <h2 className='footer-sd__title'>
                    <FormattedHTMLMessage id='page.sdlight.footer.title'/>
                </h2>
                <h4 className='footer-sd__sub-title'>
                    <a href={`/contact`}>
                        <FormattedHTMLMessage id='page.sdlight.footer.subTitle'/>
                        <span className='underline footer-sd__sub-title--blue'>
                            <FormattedHTMLMessage id='page.sdlight.footer.hello'/>
                            <span className="footer-sd__sub-title--blue-click">Click here</span>
                        </span>
                    </a>
                </h4>
            </div>
        </section>
    )
}