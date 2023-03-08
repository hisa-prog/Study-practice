interface ICardTeam {
    img: any
    team:string
    name: any
    key: any
    left?: boolean
}

const CardTeam = ({img, team, name, key, left=false} : ICardTeam) => {
    return (
        <div key={key} className='col-span-2'>
            <div className={`relative flex items-center ${left ? 'justify-start' : 'justify-center'} `}>
                <img className="z-0" src={`/images/teams/cardBg.webp`} alt='' />
                <img src={`/images/teams/${team}/${img}.webp`} alt="" className="absolute h-full top-0 z-10" />
            </div>
            <p className='mt-4 text-lg-xs-s font-lexendDeca font-light'>{name}</p>
        </div>
    )
}
export default CardTeam