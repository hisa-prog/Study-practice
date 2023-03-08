interface ICardFindUs {
    img: any
    key: any
}

const CardFindUs = ({img, key} : ICardFindUs) => {
    return (
        <div key={key} className='col-span-4 lg:col-span-6 border-line-gray border flex items-center justify-center relative mb-6 last:mb-0 md:mb-0'>
            <img src="/images/findUs/cardBg.svg" alt="" className="absolute w-full -bottom-6 md:bottom-0 z-0" />
            <img className="py-16 md:py-[18.8%] z-10 w-1/2" src={`/images/findUs/${img}.png`} alt='' />
        </div>
    )
}
export default CardFindUs