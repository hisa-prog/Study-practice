import React, { useState, useEffect } from 'react';
import { FormattedHTMLMessage } from '../../atoms/FormattedMessage';
import Line from '../../atoms/line';

const strategies : Array<{title: any, text: any}> = [
    {
        title: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies1.title' />,
        // 'Arbitrage and MEV',
        text: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies1.text' />,
        // 'Cross DEX Arbitrage Strategies. Designed to exploit market inefficiencies and price discrepancies among different DEXs.'
    },
    {
        title: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies2.title' />,
        // 'Liquidations MEV', 
        text: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies2.text' />,
        // 'Strategies developed by acting as an agnostic actor, checking liquidation levels, profiting from price discounts and maintaining price stability in the DeFi lending market.'
    },
    {
        title: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies3.title' />,
        // 'Market Making for FT (Fungible Tokens)', 
        text: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies3.text' />,
        // 'We provide market-making services across the top decentralized exchanges, developing the best routing possible with fluid order processing. (Order Book and AMM).'
    },
    {
        title: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies4.title' />,
        // 'Market Making for NFTs (Non Fungible Tokens)', 
        text: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies4.text' />,
        // 'Supporting price stability with tight liquidity'
    },
    {
        title: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies5.title' />,
        // 'DeFi Strategies', 
        text: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies5.text' />,
        // 'Designed to extract maximum value from protocols’ tokenomic models.'
    },
    {
        title: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies6.title' />,
        // 'Long Strategies', 
        text: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies6.text' />,
        // 'Designed to outperform traditional benchmarks by tilting the composition.'
    },
    {
        title: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies7.title' />,
        // 'Yield enhanced risk premia', 
        text: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies7.text' />,
        // 'Long and Short. Designed to provide a positive return profile with low traditional asset correlation.'
    },
    {
        title: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies8.title' />,
        // 'Tail Hedging', 
        text: <FormattedHTMLMessage id='page.mev.hedgeStrategies.strategies8.text' />,
        // 'Effective way to limit losses in adverse markets. It enables our Fund to stick with long-term positions through a bearish market. The Platinum MEV approach favors cost-effective solutions that balance protection against dominant risks in a portfolio with long-run returns.'
    },
]

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

export default function PlatinumMEVHedgeStrategies() {
    return (
        <div className={` relative w-full`}>
            <div className='px-4 md:px-8 lg:px-16 hidden lg:flex flex-col justify-center font-mono z-50 relative bg-mevFooterBg bg-cover bg-center lg:py-[12%]'>
                <h2 className={`text-4xl-m xl:text-6xl-l font-bold text-center`}>
                    {/* Platinum MEV<br />Investment Mandate */}
                    <FormattedHTMLMessage id='page.mev.hedgeStrategies.title' />
                </h2>
            </div>
            <div className={`min-h-screen bg-mev-footer-black pt-20 px-4 md:px-8 lg:px-16 xl:px-64 pb-20 font-mono relative z-10`}>
                <div className={`py-3 w-full`}>
                    <h2 className={`text-lg lg:text-xl font-medium uppercase`}>
                        {/* Platinum MEV Hedge Strategies: */}
                        <FormattedHTMLMessage id='page.mev.hedgeStrategies.subtitle' />
                    </h2>
                </div>
                {strategies.map((item, index) => (
                    <div key={index} className={`mt-6 md:mt-8`}>
                        <h3>{item.title}</h3>
                        <p className={`text-[#D9D9D9] mt-5`}>{item.text}</p>
                    </div>
                ))}
            </div>
            <div className={'bg-mev-footer-black py-10 md:py-6 px-4 lg:px-15 flex flex-col md:flex-row justify-between w-full text-thin-l border-b-[1px] border-lines-primary'}>
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
            <div className='pb-11 bg-mev-footer-black'>
                <Line />
            </div>
        </div>
    )
}