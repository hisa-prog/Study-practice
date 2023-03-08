import Line from '../atoms/line'
import Container from '../wrappers/gridContainer'

const linkList = [
    {
        name: 'youtube',
        link: 'https://www.youtube.com/c/PlatinumQDAOEngineering/videos',
    },
    {
        name: 'twitter',
        link: 'https://twitter.com/platinum_fund',
    },
    {
        name: 'facebook',
        link: 'https://www.facebook.com/FundPlatinum',
    },
    {
        name: 'telegram',
        link: 'https://t.me/platinumfund',
    },
    {
        name: 'medium',
        link: 'https://medium.com/platinum-fund',
    },
    {
        name: 'github',
        link: 'https://github.com/platinum-engineering',
    },
]
const logos: Array<{ img: string, link: string }> = [
    {img: 'crunchbase', link: 'https://www.crunchbase.com/organization/platinum-q-dao-engineering'},
    {img: 'angelList', link: 'https://venture.angellist.com/platinumfund/syndicate'},
    {img: 'golden', link: 'https://golden.com/wiki/Platinum_Capital-EKDMWYX'},
    {img:'pitchBook', link: 'https://my.pitchbook.com/external/no-deep-linking/profile/shared/cd7ee488-bde2-46d6-b592-ddb9c1139de4/file'},
    {img:'openVC', link: 'https://www.openvc.app/search?s=Platinum#thesisтз'}
]

const Footer = () => {
    
    return (
        <div className={`relative overflow-hidden font-lexendDeca`}>
            <Line/>
            <Container className="gap-y-0 pt-10 lg:pt-[80px] pb-0 lg:pb-0">
                <div
                    className="col-span-full px-3 lg:px-0 flex flex-col items-center justify-center bg-center bg-cover bg-footerBg">

                    <div className="flex flex-col md:flex-row">
                        {/* anton */}
                        <div className="flex flex-col items-center justify-center md:mr-8">
                            <div className={`flex flex-col justify-around items-center mt-4`}>
                                <img className={`h-[140px] -mt-2`} src={`/images/anton.png`}
                                     alt="anton"/>
                                <div className={`text-center`}>
                                    <p className={`text-xl-m md:text-2xl-h font-bold`}>Anton Dz.</p>
                                </div>
                            </div>
                            <div className={`flex items-center justify-center`}>
                                <div className="flex items-center">
                                    <a href="http://t.me/antondz" target="_blank"
                                       rel="noopener noreferrer" className="rounded">
                                        <img className={`drop-shadow-social`}
                                             src={`/images/icon-telegram.svg`} alt="telegram"/>
                                    </a>
                                    <p className="text-footer-gray text-thin-l tracking-02em">Telegram</p>
                                </div>

                                <div className="flex items-center">
                                    <a href="https://wa.me/+13412229178" target="_blank"
                                       rel="noopener noreferrer" className="rounded">
                                        <img className={`drop-shadow-social`}
                                             src={`/images/icon-whatsapp.svg`} alt="telegram"/>
                                    </a>
                                    <p className="text-footer-gray text-thin-l tracking-02em">WhatsApp</p>
                                </div>
                            </div>
                        </div>
                        {/* xenia */}
                        <div className="flex flex-col items-center justify-center md:mx-8">
                            <div
                                className={`flex flex-col justify-around items-center mt-4 mb-0.5`}>
                                <img className={`h-[140px]`} src={`/images/xenia.png`} alt="xenia"/>
                                <div className={`text-center`}>
                                    <p className={`text-xl-m md:text-2xl-h font-bold`}>Xenia D.</p>
                                </div>
                            </div>
                            <div className={`flex items-center justify-center`}>
                                <div className="flex items-center">
                                    <a href="http://t.me/KSPlat" target="_blank"
                                       className="rounded">
                                        <img className={`drop-shadow-social`}
                                             src={`/images/icon-telegram.svg`} alt="telegram"/>
                                    </a>
                                    <p className="text-footer-gray text-thin-l tracking-02em">Telegram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => window.open('https://calendly.com/d/cpg-sdr-sdb/intro-call-with-a-team')}
                        className={`mt-4 md:mt-17 hover:bg-main-blue hover:bg-opacity-[0.35] font-medium text-xs-xl-l md:text-xl-md py-4 w-auto px-9.5
            font-lexendDeca border border-main-blue rounded mb-10 md:mb-17.5`}>
                        Book a call
                    </button>
                    <span
                        className={'uppercase text-middle-gray pt-2.5 pb-7 text-lg-xs-s'}>You can find us here</span>
                    <div className={'grid grid-cols-2 gap-x-4 gap-y-8 justify-center md:grid-cols-5'}>
                        {logos.map((logo, index) => (
                            <a key={index} href={logo.link} target='_blank' className={`${logo.img === 'openVC' ? 'col-span-2 md:col-span-1' : 'w-37.5 h-12.5'} md:h-25 md:w-50 flex items-center justify-center`}>
                                <img className={`${logo.img === 'pitchBook' ? 'h-4.5 md:h-6' : 'h-7.5'} `} src={`/images/findUs/${logo.img}.png`} alt=""/>
                            </a>
                        ))}
                    </div>

                </div>
                <div
                    className={'col-span-full py-10 md:py-6 flex flex-col md:flex-row justify-between w-full text-thin-l border-b-[1px] border-lines-primary'}>
                    <div className={'uppercase order-2 md:order-1'}><span
                        className={'text-middle-gray'}>©All rights reserved. Platinum /</span> Privacy
                        Policy.
                    </div>
                    <div
                        className="mb-12.5 md:mb-0 grid grid-cols-2 md:flex gap-8 text-middle-gray order-1 md:order-2">
                        {
                            linkList.map((item, index) => {
                                return (
                                    <a href={item.link} target="_blank" key={index}
                                       className="uppercase cursor-pointer hover:text-main-blue">
                                        {item.name}
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={'h-6'}></div>
            </Container>
        </div>
    )
}
export default Footer
