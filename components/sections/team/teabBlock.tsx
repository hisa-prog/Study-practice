import React, { FC, ReactNode, useEffect, useLayoutEffect, useState } from 'react'
import 'swiper/css/pagination'
import 'swiper/css'
import useResolution from '../../hooks/useResolution'
import Container from '../../wrappers/gridContainer'
import CardTeam from '../../atoms/cardTeam'

type PropsType = {
    team: Array<{ img: string; name: string }>
    teamName: string
    title: ReactNode
}

const TeamBlock: FC<PropsType> = ({team, teamName, title}) => {
    const screenType = useResolution()
    const [isOpenTeam, setIsOpenTeam] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    useLayoutEffect(() => {
        if (screenType.isLaptop || screenType.isMobile) setIsOpenTeam(false)
    }, [screenType])


    useEffect(() => {
        const watch = document.getElementById(teamName);
    
        function obCallback(payload: any) {
          if (watch !== null) {
            if (payload[0].isIntersecting === true) {
                setIsSticky(true);
            } else setIsSticky(false)
          }
        }
    
        const ob = new IntersectionObserver(obCallback);
        if (watch) {
          ob.observe(watch);
        }
    });
    return (
        <Container id={teamName} className="gap-y-0 py-2 md:py-5.5 lg:py-9.5">
            <div
                className={`border border-lines-primary md:border-0 flex flex-col items-center md:items-start md:gap-14.5 col-span-4 md:col-span-4 lg:col-span-6 relative mb-1`}>
                <div className={'relative w-86 h-42 md:w-105 md:h-50'}>
                    <img className="absolute order-3 md:order-1 z-40"
                         src={`/images/teams/${teamName}/main.webp`}
                         alt=""/>
                    <img className="absolute bottom-0 order-3 md:order-1 z-0 md:hidden"
                         src={`/images/teams/heroBg.svg`} alt=""/>
                </div>
                <div className={'order-1 md:order-2 px-4 py-7.5 md:p-0 w-full'}>
                    <p className="uppercase text-4xl-h-xs xl:text-7xl-h font-bold tracking-03em">{title}</p>
                    <div className={'py-6 flex justify-between w-full md:hidden border-b' +
                        ' border-lines-primary'}
                         onClick={() => {
                             setIsOpenTeam(!isOpenTeam)
                         }}>
                            <span className={'font-lexendDeca font-light'}>
                                {isOpenTeam ? 'Hide team' : 'View team'}</span>
                        <img src="/images/menuArrow.svg" alt="arrow"
                             className={isOpenTeam ? 'rotate-90' : '-rotate-90'}/>
                    </div>
                </div>
                <div className='hidden md:flex flex-col md:order-3'>
                    <div className={`${teamName === 'business' && isSticky ? 'bg-[#0066FF]' : 'bg-[#4D4D4D]'} 
                    h-6 w-1 mb-2 rounded-[3px] transition-all duration-500`}></div>
                    <div className={`${teamName === 'engineering' && isSticky ? 'bg-[#0066FF]' : 'bg-[#4D4D4D]'} 
                    h-6 w-1 mb-2 rounded-[3px] transition-all duration-500`}></div>
                    <div className={`${teamName === 'mev' && isSticky ? 'bg-[#0066FF]' : 'bg-[#4D4D4D]'} 
                    h-6 w-1 rounded-[3px] transition-all duration-500`}></div>
                </div>

            </div>
            {!isOpenTeam && <div
                className="hidden md:col-span-4 lg:col-span-6 md:grid md:grid-cols-6 gap-x-6 gap-y-10">
                {team.map((item, index) => (
                    <CardTeam img={item.img} team={teamName} name={item.name}
                              key={index}/>
                ))}
            </div>}
            {isOpenTeam && <div
                className="col-span-full">
                <div className={'grid grid-cols-4 gap-5'}>
                    {team.map((item, index) => (
                        <CardTeam img={item.img} team={teamName} name={item.name}
                                  key={index}/>
                    ))}
                </div>

            </div>}
        </Container>

    )
}

export default TeamBlock
